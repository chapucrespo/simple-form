export default function Home() {
  return ( 
      <main className="flex flex-col lg:flex-row lg:w-screen lg:justify-around">
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-bold">Learn to code by watching others</p>
          <p className="lg:w-100">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <div className="lg:w-140">
          <div className="bg-[#6055A5] rounded-2xl h-25 lg:h-12 flex flex-col lg:flex-row items-center justify-center mt-6 shadow-(--shadow)"><p className="font-bold">Try it free 7 days </p> then $20/mo. thereafter</div>
          <form>
            <div className="bg-white mt-5 rounded-2xl flex flex-col items-center shadow-(--shadow) lg:p-6">
              <input type="text" name="name" placeholder="First Name" required className="text-black border w-60 lg:w-full p-3 mt-3 border-[#B9B6D3] rounded"></input>
              <input type="text" name="lastName" placeholder="Last Name" required className="text-black border w-60 lg:w-full p-3 mt-2 border-[#B9B6D3] rounded"></input>
              <input type="text" name="email" required placeholder="Email" className="text-black border w-60 lg:w-full p-3 mt-2 border-[#B9B6D3] rounded"></input>
              <input type="text" name="password" required placeholder="Password" className="text-black border w-60 lg:w-full p-3 mt-2 border-[#B9B6D3] rounded"></input>
              <button type="submit" className="bg-[#38CC8C] mt-5 rounded w-60 h-12 font-bold shadow-(--gshadow) lg:w-full"> CLAIM YOUR FREE TRIAL </button>
              <p className="text-[#B9B6D3] text-xs p-3">By clicking the button you are agreeing to our <a href="www.google.com" className="text-amber-600">Terms and services</a></p>
            </div>
          </form>
        </div>
      </main>
  );
}
