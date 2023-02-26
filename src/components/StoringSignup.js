import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SignUp from "./SignUp";

const StoringSignup = () => {
  const HandelStoring = [
    {
      id: uuidv4(),
      Firstname: "",
      name: "",
      email: "",
      password: "",
      Repeatpassword: "",
    },
  ];
  const [storing, setStoring] = useState(HandelStoring);
  const HandelNewUser = (value) => {
    setStoring((PrevValue) => [...PrevValue, value]);
    console.log(storing);
  };

  return (
    <div>
      <SignUp HandelNewUser={HandelNewUser} />
    </div>
  );
};


