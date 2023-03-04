import Image from "next/image";
import Link from "next/link";
import { Radio } from "@nextui-org/react";
import { useState } from "react";
import Swal from "sweetalert2";

//import Controllers

import { addContact } from "@/controllers/contacts";
import { nextBaseURL } from "@/config";

const ContactsNew = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const changeGender = (e) => {
    setGender(e);
  };

  function Add_contact() {
    if (name === "" && email === "" && phone === "" && gender === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
    } else if (name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your Name!",
      });
    } else if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your Email!",
      });
    } else if (phone === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your Number!",
      });
    } else if (gender === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your Gender!",
      });
    } else if (email === "" || email === "" || phone === "" || gender === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
    } else {
      addContact({
        fullName: name,
        email: email,
        phoneNumber: phone,
        gender: gender,
      }).then((res) => {
        console.log(res);
        if (res.status === true) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Contact Added Successfully!",
          });
          setTimeout(() => {
            window.location.replace(nextBaseURL + "/contacts");
          }, 1000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
    }
  }
  return (
    <>
      <div className=" h-screen text-white bg-hero-pattern bg-cover bg-center">
        <div className="flex space-x-4">
          <Image
            src="/images/02_1.png"
            className="ml-48 mt-20"
            alt="Small Image"
            width={40}
            height={500}
          />
          <h1 className="ml-64 mt-20 text-3xl font-bold">twc</h1>
        </div>
        <div>
          <h1 className="ml-48 text-3xl font-extrabold ">Contacts</h1>
          <h1 className="ml-48 text-3xl font-semibold">portal</h1>
        </div>
        <div className="ml-32 pt-10 pl-20">
          <div>
            <h1 className="text-4xl font-bold">New Contact</h1>
          </div>
          <form>
            <div className=" flex justify-start gap-x-6 pt-5">
              <input
                type="text"
                className="peer block min-h-[auto] w-96  rounded-3xl border-0  py-[0.32rem] px-3 leading-[2.15] outline-none  text-black"
                id="FullName"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="peer block min-h-[auto] w-96  rounded-3xl border-0  py-[0.32rem] px-3 leading-[2.15] outline-none  text-black"
                id="email"
                placeholder="Email address"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex justify-start gap-x-6 pt-5">
              <input
                type="number"
                className="peer block min-h-[auto] w-96  rounded-3xl border-0  py-[0.32rem] px-3 leading-[2.15] outline-none  text-black"
                id="PhoneNumber"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Radio.Group
                orientation="horizontal"
                label="Gender"
                onChange={changeGender}
              >
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Radio.Group>
            </div>
          </form>
          <div className="text-center lg:text-left flex">
            <button
              type="button"
              className="inline- mt-20 mr-4 rounded-3xl border-2 bg-primary py-4 pl-10 pr-10 text-lg font-semibold  leading-tight text-white "
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => Add_contact()}
            >
              Add your first contact
            </button>
          </div>
          <div>
            <Link
              className="grid justify-items-end pr-10 pt-20 underline text-lg"
              href="/login"
            >
              logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactsNew;
