import { BottomWarning } from "./BottomWarning";
import Button from "./BlueButton";
import Heading from "./Heading";
import LabelledInput from "./LabelledInput";
import Subheading from "./Subheading";
import { useState } from "react";
import axios from "axios";

export default function SignupForm() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastame] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function Signup() {
    const response = await axios.post("http://localhost:3001/api/v1/users/signup", {
      firstName,
      lastName,
      username,
      password,
    });
    console.log(response);
  }
  return (
    <>
      <div className="bg-white w-1/4 flex flex-col justify-center p-4 rounded-lg h-[95vh]">
        <div className="text-center">
          <Heading label={"Sign up"} />
          <Subheading label={"Enter your information to create an account"} />
        </div>
        <LabelledInput
          label={"First Name"}
          type={"text"}
          placeholder={"John"}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <LabelledInput
          label={"Last Name"}
          type={"text"}
          placeholder={"Doe"}
          onChange={(e) => {
            setLastame(e.target.value);
          }}
        />
        <LabelledInput
          label={"Email"}
          type={"text"}
          placeholder={"example@gmail.com"}
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
        <Button label={"Sign up"} onClick={Signup} />

        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </>
  );
}
