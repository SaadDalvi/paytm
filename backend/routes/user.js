const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router();
const { User,Account } = require("../db");
const { z } = require("zod");
const { authMiddleware } = require("../middleware/auth");

// creating zod schema
const signUpBody = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string().email(),
  password: z.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signUpBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Invalid Input",
    });
  }

  //   checking if username is already taken
  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser) {
    return res.status(411).json({
      message: "user alredy created",
    });
  }
  //   creating new user
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000
})

  // //   creating jwt
  // const token = jwt.sign(
  //   {
  //     userId: user._id,
  //   },
  //   JWT_SECRET
  // );

  res.json({
    message: "User Signed up",
  });
});

const signInBody = z.object({
  username: z.string().min(6).email(),
  password: z.string().min(6).max(12),
});
router.post("/signin", async (req, res) => {
  const { success } = signInBody.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Invalid input",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
  });
  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    res.json({
      message: "User signed in ",
      token,
    });
  } else {
    res.status(411).json({
      message: "Error while logging in",
    });
  }
});

const updateBody = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});
router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      message: "error while updating information",
    });
  }
  await User.updateOne(
    {
      _id: req.userId,
    },
    req.body
  );

  res.json({
    message: "User updated",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: { $regex: filter },
      },
      {
        lastName: { $regex: filter },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
module.exports = router;
