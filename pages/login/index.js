import Swal from "sweetalert2";
import { useState } from "react";
import Link from "next/link";

import { LoginUser } from "@/controllers/users";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LogUser() {
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
    } else {
      LoginUser({
        email: email,
        password: password,
      })
        .then((response) => {
          return response.data;
        })
        .then((item) => {
          console.log("hi");
          console.log(item);
          console.log(item);
          console.log("hi");

          if (item.data === "") {
            Swal.fire({
              title: "Error!",
              text: "Log in Error ",
              icon: "error",
              timer: 2000,
              button: false,
            });
          } else {
            Swal.fire({
              title: "success!",
              text: "Your Successfully LogIn",
              icon: "success",
              timer: 2000,
              button: false,
            }).then(function () {
              window.location = "/";
            });
          }
        })
        .catch((error) => {
          console.log(`2`);
          Swal.fire({
            title: "Error!",
            text: "Log in Error ",
            icon: "error",
            timer: 2000,
            button: false,
          });
        });
    }
  }
  return (
    <>
      <div className=" text-white  bg-hero-pattern2 bg-cover bg-center h-screen">
        <div className="flex justify-between gap-72">
          <div>
            <div className="pl-36 pt-36 pb-10">
              <h1 className="text-5xl font-semibold ">Hi there</h1>
              <h2 className="text-3xl">Welcome to our</h2>
              <h2 className="text-3xl">contacts portal</h2>
            </div>
            <div className="pl-36 ">
              <form>
                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
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
                <div className="text-center lg:text-left flex">
                  <button
                    type="button"
                    className="inline- mr-4 rounded-3xl border-2 bg-primary py-4 pl-10 pr-10 text-sm font-medium  leading-normal text-white "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => LogUser()}
                  >
                    Login
                  </button>
                  <div className="flex space-x-3">
                    <h1 className="pt-5">or</h1>
                    <Link className="pt-5 underline" href="/register">
                      Click here to Register
                    </Link>
                  </div>
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
