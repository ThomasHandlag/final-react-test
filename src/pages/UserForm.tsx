import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUsers } from "./contexts";
import { useState } from "react";

interface UserFormValues {
  username: string;
  email: string;
}

const UserForm = () => {
  // ignore age validation with schema above
  // if age is not provided, it will be set to null
  // if age is provided, it will be validated as a positive number

  // useForm hook with validation schema
  const schema = yup.object({
    username: yup
      .string()
      .min(2, "Minimum 2 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  const [age, setAge] = useState<number | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { setUsers, index } = useUsers();

  const onSubmit: SubmitHandler<UserFormValues> = (data: UserFormValues) => {
    console.log(data);
    if (age === null || age > 0) {
      setUsers([
        { username: data.username, email: data.email, age: age, id: index },
      ]);
    }
  };

  const inputClasses = "border p-2 rounded";
  const errorClasses = "text-red-500 text-sm";

  const validateAge = (value: number | null) => {
    if (value === null) return true; // Allow null
    return value > 0 || "Age must be positive";
  };

  return (
    <div className="">
      <form
        className="grid grid-cols-3 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 col-span-3">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username")}
            className={inputClasses}
          />
          {errors.username && (
            <span className={errorClasses}>{errors.username.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 col-span-3">
          <label htmlFor="email">Email:</label>
          <input type="email" {...register("email")} className={inputClasses} />
          {errors.email && (
            <span className={errorClasses}>{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 col-span-3">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className={inputClasses}
            value={age ?? ""}
            onChange={(e) =>
              setAge(e.target.value ? Number(e.target.value) : null)
            }
          />
          {age && <span className={errorClasses}>{validateAge(age)}</span>}
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded col-span-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
