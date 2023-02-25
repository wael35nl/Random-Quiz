// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const Input = (props) => {
//   const [InputUsers, setInputUsers] = useState({
//     email: "",
//     password: "",
//   });
//   const HandelInput = (event) => {
//     setInputUsers((prevInput) => {
//       return { ...prevInput, [event.target.name]: event.target.value };
//     });
//   };

//   const HandelSubmit = (event) => {
//     event.preventDefault();
//     const newValue = { id: uuidv4(), InputUsers };
//     props.NewValues(newValue);

//     setInputUsers({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div onSubmit={HandelSubmit} className=" input__section">
//       <label>Email</label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         placeholder="Enter your Email"
//         onChange={HandelInput}
//         value={InputUsers.email}
//         required
//       />
//       <label>password</label>
//       <input
//         type="password"
//         name="password"
//         id="password"
//         placeholder="Enter your password"
//         onChange={HandelInput}
//         value={InputUsers.password}
//         required
//       />
//       <button type="submit" onClick={HandelSubmit} className="navbar__btn">
//         LOG IN
//       </button>
//     </div>
//   );
// };

// export default Input;
