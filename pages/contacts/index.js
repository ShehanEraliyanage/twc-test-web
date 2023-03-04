import Link from "next/link";
import Image from "next/image";

const ContactView = () => {
  return (
    <>
      <div className=" bg-mainBack1 h-screen text-white">
        {/* <div className="fixed">
          <Image
            src="/images/contact-us.png"
            alt="Picture of the author"
            width={1763.23}
            height={1107.47}
            left={122.01}
            top={-489}
          />
        </div>
        <div className="fixed">
          <Image
            src="/images/theme.png"
            alt="Picture of the author"
            width={1550}
            height={500}
          />
        </div> */}
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
          <div className="flex flex-row">
            <h1 className="text-5xl font-bold basis-1/2">Contacts</h1>
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
};

export default ContactView;
