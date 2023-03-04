import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen text-white bg-hero-pattern bg-cover bg-center ">
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
            <h1 className="text-6xl font-bold">Welcome,</h1>
            <h2 className="text-4xl font-semibold">
              This is where your contacts will live. Click the button below to
            </h2>
            <h2 className="text-4xl font-semibold">add a new contact.</h2>
          </div>
          <div className="text-center lg:text-left flex">
            <Link href="/contacts/new">
              <button
                type="button"
                className="inline- mt-20 mr-4 rounded-3xl border-2 bg-primary py-4 pl-10 pr-10 text-lg font-semibold  leading-normal text-white "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Add your first contact
              </button>
            </Link>
          </div>
          <div>
            <Link
              className="grid justify-items-end pr-10 pt-40 underline text-lg"
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
