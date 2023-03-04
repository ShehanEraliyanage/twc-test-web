import Image from "next/image";
import Swal from "sweetalert2";
import { useState } from "react";
import Link from "next/link";

import { RegisterUser } from "@/controllers/users";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function regiUser() {
    console.log("register");
    if (email === "" && password === "" && confirmPassword === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
    } else if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email!",
      });
    } else if (password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your Password!",
      });
    } else if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
    } else if (email === "" || password === "" || confirmPassword === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
    } else {
      RegisterUser({
        email: email,
        password: password,
      }).then((res) => {
        console.log(res);
        console.log(res.status);
        if (res.status === true) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registration Successful!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration Failed!",
          });
        }
      });
    }
  }

  return (
    <>
      <div className=" text-white  bg-hero-pattern2 bg-cover bg-center h-screen">
        <div className="flex justify-between gap-72">
          <div>
            <div className="pl-40 pt-36 pb-10  ">
              <h1 className="text-5xl pb-10 font-semibold text-white  ">
                Register Now!
              </h1>
            </div>
            <div className="pl-40 ">
              <form>
                {/* <!-- Email input --> */}
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-96  rounded-3xl border-0  py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-10 motion-reduce:transition-none text-black"
                    id="email"
                    placeholder="Email address"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-96  rounded-3xl border-0  py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-10 motion-reduce:transition-none text-black"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <!--Re Password input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-96  rounded-3xl border-0  py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-10 motion-reduce:transition-none text-black"
                    id="confirmpassword"
                    placeholder="Re-Enter Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="text-center lg:text-left flex">
                  <button
                    type="button"
                    className="inline-block mr-2 rounded-3xl border-2 bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => regiUser()}
                  >
                    Register
                  </button>
                </div>
                <div className="pt-10">
                  <Link href="/login">~Back to Login</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="text-black">
            <div className="pt-56 pl-10 pr-60">
              <img src="/images/02.png" alt="contact-us" />
              <h1 className=" text-6xl font-extrabold text-mainBack1">
                Contacts
              </h1>
              <h2 className="text-5xl font-bold text-mainBack1">Portal</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
