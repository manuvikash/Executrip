import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  const GuideSignup = () => {
    const navigate = useNavigate();
    console.log("Guide signup");
    navigate("/guide-signup");
  };

  //handle Signup API Integration here
  //if response status is 500, show prompt that input is invalud
  const createAccount = () => {
    fetch("http://localhost:5000/api/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupState),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status !== 201) {
          alert("Invalid input");
        } else {
          alert("Account created");
        }
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          // handle network error
        } else {
          // handle other errors
        }
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <div className="flex space-x-4">
          <FormAction handleSubmit={handleSubmit} text="Signup as tourist" />
          {/* <FormAction handleSubmit={GuideSignup} text="Signup as guide" /> */}
          <a
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onSubmit={GuideSignup}
            href="/guide-signup"
          >
            Signup as guide
          </a>
        </div>
      </div>
    </form>
  );
}
