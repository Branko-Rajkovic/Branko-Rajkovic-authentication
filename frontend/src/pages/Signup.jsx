import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center m-3 font-bold text-sky-950">
        Sign Up
      </h1>
      {loading ? (
        <p>signing up</p>
      ) : (
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="username"
            id="username"
            className="bg-slate-100 p-3 rounded-lg border-2 border-slate-300"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg border-2 border-slate-300"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg border-2 border-slate-300"
            onChange={handleChange}
          />
          <button className="bg-sky-950 text-white font-bold border-2 border-sky-500 rounded-full w-fit px-3 py-1 hover:bg-sky-500 disabled:bg-slate-500">
            Sign Up
          </button>
        </form>
      )}
      <div className="bg-green-100 mx-auto my-3 p-2 w-fit flex gap-2 items-center">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="border-2 border-sky-800 rounded-full px-2 py-0.5 font-bold text-sky-800">
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
}
