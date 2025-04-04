import Image from "next/image";

export default function Home() {
  return ( 
      <main className="">
         {/* sm:text-black */}
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
          <p className="text-2xl font-bold">Learn to code by watching others</p>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
          <div className="big-div rounded-2xl h-25 flex flex-col justify-center mt-6 shadow"><p className="font-bold">Try it free 7 days </p>then $20/mo. thereafter</div>
          <form>
            <div className="bg-white mt-5 rounded-2xl flex flex-col items-center shadow">
              <input type="text" name="name" placeholder="First Name" required className="text-black border w-60 p-3 mt-3 border-gray-500 rounded"></input>
              <input type="text" name="lastName" placeholder="Last Name" required className="text-black border w-60 p-3 mt-2 border-gray-500 rounded"></input>
              <input type="text" name="email" required placeholder="Email" className="text-black border w-60 p-3 mt-2 border-gray-500 rounded"></input>
              <input type="text" name="password" required placeholder="Password" className="text-black border w-60 p-3 mt-2 border-gray-500 rounded"></input>
              <button type="submit" className="green-button mt-5 rounded w-60 h-12 font-bold green-shadow"> CLAIM YOUR FREE TRIAL </button>
              <p className="text-gray-500 text-xs p-3">By clicking the button you are agreeing to our <a href="www.google.com" className="text-amber-600">Terms and services</a></p>
            </div>
          </form>
      </main>
  );
}
