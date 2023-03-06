import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

//import Controllers
import {
  deleteContact,
  updateContact,
  getAllContact,
} from "@/controllers/contacts";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [editRowFullName, setEditRowFullName] = useState(null);
  const [editRowGender, setEditRowGender] = useState(null);
  const [editRowEmail, setEditRowEmail] = useState(null);
  const [editRowPhone, setEditRowPhone] = useState(null);

  useEffect(() => {
    getAllContact().then((res) => {
      setContacts(res);
    });
  }, []);

  function tableChangeHandler(value) {
    setEditRowId(value._id);
    setEditRowFullName(value.fullName);
    setEditRowGender(value.gender);
    setEditRowEmail(value.email);
    setEditRowPhone(value.phoneNumber);
  }

  const setNameHandler = (data) => {
    setEditRowFullName(data.target.value);
  };
  const setGenderHandler = (data) => {
    setEditRowGender(data.target.value);
  };
  const setEmailHandler = (data) => {
    setEditRowEmail(data.target.value);
  };
  const setPhoneHandler = (data) => {
    setEditRowPhone(data.target.value);
  };

  function contactEditHandler(id, name, gender, email, number) {
    Swal.fire({
      title: "are you sure?",
      text: "Do you want to update this contact?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((res) => {
      if (res.value === true) {
        updateContact({
          _id: id,
          fullName: name,
          email: email,
          phoneNumber: number,
          gender: gender,
        }).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Contact has been updated",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }

  function delete_Contact(id) {
    Swal.fire({
      title: "are you sure?",
      text: "Do you want to delete this contact?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((res) => {
      if (res.value === true) {
        deleteContact(id).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Contact has been deleted",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }

  return (
    <>
      <div className="h-screen text-white bg-hero-pattern bg-cover bg-center ">
        <div className="flex space-x-3 ml-2 ">
          <Image
            src="/images/02_1.png"
            className="ml-48 mt-20"
            alt="Small Image"
            width={40}
            height={500}
          />
          <h1 className="ml-72 mt-20 text-3xl font-bold">twc</h1>
        </div>
        <div>
          <h1 className="ml-52 text-3xl font-extrabold ">Contacts</h1>
          <h1 className="ml-52 text-3xl font-semibold">portal</h1>
        </div>
        <div className="ml-32 pt-10 pl-20">
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">Contacts</h1>
            </div>
            <div className="text-center lg:text-left flex mr-96 mb-4">
              <Link href="/contacts/new">
                <button
                  type="button"
                  className="inline-block mr-4 rounded-3xl border-2 bg-primary py-2 pl-6 pr-6 text-lg font-semibold  leading-normal text-white "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Add your contact
                </button>
              </Link>
            </div>
          </div>
          <div className="relative mr-80 overflow-x-auto shadow-md sm:rounded-3xl bg-white">
            <table className="w-5/6 ml-3 mt-4 mb-3 text-base text-left text-mainBack1 dark:text-mainBack1 table-auto">
              <thead>
                <tr>
                  <th></th>
                  <th>full name</th>
                  <th>gender</th>
                  <th>e-mail</th>
                  <th>phone number</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>Image</td>
                      {editRowId === value._id ? (
                        <>
                          <td>
                            <input
                              type="text"
                              value={editRowFullName}
                              onChange={setNameHandler}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={editRowGender}
                              onChange={setGenderHandler}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={editRowEmail}
                              onChange={setEmailHandler}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={editRowPhone}
                              onChange={setPhoneHandler}
                            />
                          </td>
                          <td>
                            <button
                              className="bg-mainBack1 hover:bg-blue-700 rounded-3xl text-white font-bold py-2 px-4 "
                              onClick={() =>
                                contactEditHandler(
                                  value._id,
                                  editRowFullName,
                                  editRowGender,
                                  editRowEmail,
                                  editRowPhone
                                )
                              }
                            >
                              save
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{value.fullName}</td>
                          <td>{value.gender}</td>
                          <td>{value.email}</td>
                          <td>{value.phoneNumber}</td>
                          <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                              <a
                                x-data="{ tooltip: 'Edite' }"
                                onClick={tableChangeHandler.bind(this, value)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                  x-tooltip="tooltip"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                  />
                                </svg>
                              </a>
                              <a
                                x-data="{ tooltip: 'Delete' }"
                                onClick={() => delete_Contact(value._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                  x-tooltip="tooltip"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <Link
              className="grid justify-items-end pr-10 pt-10 underline text-lg"
              href="/login"
            >
              logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
