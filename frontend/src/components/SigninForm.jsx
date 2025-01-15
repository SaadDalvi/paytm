import { BottomWarning } from "./BottomWarning";
import Button from "./BlueButton";
import Heading from "./Heading";
import LabelledInput from "./LabelledInput";
import Subheading from "./Subheading";
import { useState } from "react";
import axios from "axios";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function Signin() {
    const response = await axios.post(
      "http://localhost:3001/api/v1/users/signin",
      {
        username,
        password,
      }
    );
    const token = `Bearer ${response.data.token}`
    localStorage.setItem("authorization",token)
    console.log(token);
  }
  return (
    <>
      <div className="bg-white w-1/4 h-[80vh] flex flex-col justify-center px-4 rounded-lg">
        <div className="text-center">
          <Heading label={"Sign in"} />
          <Subheading label={"Enter your credentials to Transfer Money"} />
        </div>
        <LabelledInput
          label={"Email"}
          type={"text"}
          placeholder={"Email"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <LabelledInput
          label={"Password"}
          type={"password"}
          placeholder={"123456"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button label={"Sign In"} onClick={Signin} />

        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Sign up"}
          to={"/signup"}
        />
      </div>
    </>
  );
}
