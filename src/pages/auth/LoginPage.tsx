import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h3 className=" text-center text-3xl pr-5 font-semibold text-slate-900 ">{`<Codemy/>`}</h3>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h2 className=" mb-6 text-center text-xl font-extrabold text-white">Log in to your account</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={handleUsernameChange}
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <NavLink to={"/home"}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-white hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </button>
              </NavLink>

            </div>
            <p className=" text-slate-50 text-center text-sm">
              Don't have an account?{" "}
              <NavLink to={"/auth/register"}>
                {" "}
                <button className=" text-blue-500 font-semibold">
                  Register
                </button>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
