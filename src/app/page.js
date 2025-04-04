"use client";
import { useState } from "react";

export default function Home() {

  const [submitted, setSubmitted] = useState(false);

  return ( 
      <main className="flex flex-col lg:flex-row lg:w-screen lg:justify-center">
        <div className="flex flex-col justify-center lg:w-150 lg:text-left">
          <p className="text-2xl font-bold lg:text-5xl">Learn to code by watching others</p>
          <p className="lg:mt-4">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <div className="lg:w-140">
          <div className="bg-[var(--blue)] rounded-2xl h-25 lg:h-12 flex flex-col lg:flex-row items-center justify-center mt-6 shadow-(--shadow)"><p><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</p></div>
            <div className="bg-white mt-5 rounded-2xl flex flex-col items-center shadow-(--shadow) lg:p-10">
              {!submitted ?
                <form action={() => setSubmitted(true)}>
                  <input type="text" name="name" placeholder="First Name" required className="text-black border w-60 lg:w-full p-3 mt-3 border-[var(--grayish-blue)] rounded"></input>
                  <input type="text" name="lastName" placeholder="Last Name" required className="text-black border w-60 lg:w-full p-3 mt-2 border-[var(--grayish-blue)] rounded"></input>
                  <input type="email" name="email" required placeholder="Email" className="text-black border w-60 lg:w-full p-3 mt-2 border-[var(--grayish-blue)] rounded"></input>
                  <input type="password" name="password" required placeholder="Password" className="text-black border w-60 lg:w-full p-3 mt-2 border-[var(--grayish-blue)] rounded"></input>
                  <button type="submit" className="bg-[var(--green)] mt-5 rounded w-60 h-12 font-bold shadow-(--gshadow) lg:w-full hover:bg-[var(--green-shadow)]"> CLAIM YOUR FREE TRIAL </button>
                  <p className="text-[var(--grayish-blue)] text-xs p-3">By clicking the button you are agreeing to our <a href="www.google.com" className="text-[var(--orange)]">Terms and services</a></p>
                </form>
              :
                <div>
                  <div className="text-[var(--dark-blue)]">Success! Thanks for submitting</div>
                  <button onClick={() => setSubmitted(false)} className="bg-[var(--green)] mt-5 mb-5 rounded w-60 h-12 font-bold shadow-(--gshadow) lg:w-full hover:bg-[var(--green-shadow)]">Fill again</button>
                </div>
              }
            </div>
        </div>
      </main>
  );
}
