import { auth, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth()
  return (
    <section className="text-gray-600 relative justify-center bg-slate-100 body-font overflow-hidden">

      <div className="pt-80 flex justify-between bg-customGray mx-auto">

        <div className="w-7/12  sm:ml-2.5 md:ml-4 xl:ml-5 ">
          <h2 className="sm:text-2xl md:text-3xl lg:text-6xl -mt-10 text-yellow-400 uppercase font-serif pb-2">Let’s get those tasks done—are you ready?</h2>
          <p className="sm:text-lg md:text-2xl lg:text-3xl text-yellow-500" >Let me assist you in achieving all your goals.</p>
          <p className="sm:text-md md:text-md lg:text-xl text-yellow-500 font-medium" >Engage your family to assist them while also helping yourself to beat procrastination.</p>
          <div className="bg-green-300 w-40 mt-10 text-white pt-2 pb-2 text-center rounded-lg">
            {session?.user ?
              <Link href={'Login'} className="text-center uppercase text-customGray font-bold">Check Tasks</Link>
              :
              <Link href={'Login'} className="text-center">Login</Link>
            }
          </div>
        </div>

        <Image className="-mt-24 sm:w-[50%] md:w-[50%] lg:w-[40%]" src="/monkey1.webp" width={500} height={500} alt="Monkey" />
      </div>

      {/* <div className="bg-customBlack flex  pt-20 pb-20">

        <div className="w-3/6 bg-yellow-50 h-full text-md p-5 font-serif">
          <p className="text-center">U r family wil be able to check u r progress and they will approve and disaprove the things that u finish</p>
        </div>

        <div className="w-3/6 bg-customBlack k h-full text-md font-serif">
          <Image src="/monkey2.avif" className="mx-auto" width={500} height={500} alt="Monkey" />
        </div>


      </div> */}

      <div className="w-full bg-yellow-500 border border-t-2 border-green-500 p-10 font-extralight">
        {/* <p className="text-center">U r family wil be able to check u r progress and they will approve and disaprove the things that u finish</p> */}
      </div>

    </section>
  );
}
