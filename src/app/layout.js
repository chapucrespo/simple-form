import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Learn to code",
  description: "Challenge by frontend mentor, coded by chapu crespo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={`${poppins.variable} antialiased flex flex-col h-screen justify-evenly w-screen m-auto p-10 xl:p-0 text-center bg-[url(/bg-intro-desktop.png)] bg-[#FF7A7A] bg-cover bg-center`}
        >
          {children}
        <footer className="text-center mt-4">Challenge by <a href="https://www.frontendmentor.io/home" className="text-[#6055A5]">Frontend Mentor</a>. Coded by <a href="https://github.com/chapucrespo" className="text-[#6055A5]">Chapu Crespo.</a></footer>
        </body>
    </html>
  );
}