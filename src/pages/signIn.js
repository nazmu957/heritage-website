import React from "react";

import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";


const LoginForm = () => {
  

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-9">
          <div className="bg-white p-8 h-[30rem] rounded shadow-md">
            <h1 className="text-2xl text-[#1F2761] font-bold text-center mb-4">
              SignIn
            </h1>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1F2761]"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#1F2761]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-[#1F2761] hover:bg-gray-800 py-2 px-4 w-full rounded-md text-white mt-4"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
