// import React from "react";
// import { useForm } from "react-hook-form";

// import "./styles.css";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   }; // your form submit function which will invoke after successful validation

//   console.log(watch("example")); // you can watch individual input by pass the name of the input

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name</label>
//       <input
//         {...register("firstName", {
//           required: true,
//           pattern: /^[A-Za-z]+$/i,
//         })}
//       />
//       {errors?.firstName?.type === "required" && <p>This field is required</p>}
//       {errors?.firstName?.type === "maxLength" && (
//         <p>First name cannot exceed 20 characters</p>
//       )}
//       {errors?.firstName?.type === "pattern" && (
//         <p>Alphabetical characters only</p>
//       )}
//       <label>Laste Name</label>
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       {errors?.lastName?.type === "pattern" && (
//         <p>Alphabetical characters only</p>
//       )}
//       <label>Age</label>a
//       <input {...register("age", { min: 18, max: 99 })} />
//       {errors.age && (
//         <p>You Must be older then 18 and younger then 99 years old</p>
//       )}
//       <input type="submit" />
//     </form>
//   );
// }
