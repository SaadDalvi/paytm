import { useSearchParams } from "react-router-dom";
import GreenButton from "../components/GreenButton";
import Heading from "../components/Heading";
import LabelledInput from "../components/LabelledInput";
import { useState } from "react";
import axios from "axios";

export default function Send() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="bg-slate-300 w-screen h-screen flex justify-center items-center">
        <div className="w-1/3 h-2/3 bg-white rounded-lg">
          <div className="h-1/3 w-full text-center pt-10 ">
            <Heading label={"Send Money"} />
          </div>

          <div className="flex flex-col items-center gap-14 ">
            <div className="flex items-center gap-3 ">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 text-2xl flex items-center justify-center">
                <div>{name[0].toUpperCase()}</div>
              </div>
              <div className="text-2xl font-semibold">{name.toUpperCase()}</div>
            </div>
            <div className="w-4/5 ">
              <LabelledInput
                label={"Amount (in Rs)"}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <GreenButton
                label={"Initiate Transfer"}
                onClick={async () => {
                 await axios.post(
                    "http://localhost:3001/api/v1/account/transfer",
                    {
                      to: id,
                      amount,
                    },
                    {
                      headers: {
                        Authorization: localStorage.getItem("authorization"),
                      },
                    }
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
