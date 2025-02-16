"use client";

import { useState } from "react";

const Page_Design = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("worked!!");

    fetch("/api/auth/register", {
      body: JSON.stringify({
        email,
        password,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="w-full h-screen">
      <form
        onSubmit={submitHandler}
        className="w-1/4 h-1/2 text-black flex flex-col gap-5 m-5"
      >
        <input
          className="border p-5"
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="border p-5"
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="border p-5" type="submit">
          create user
        </button>
      </form>
    </div>
  );
};

export default Page_Design;
