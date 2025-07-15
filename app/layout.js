import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis ",
  },
  description:
    "Luxurious cabin hotel,located in the heart of the Italian Dolomites,surrounded by beautiful dark forest",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} text-primary-100 min-h-screen bg-primary-950 flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid ">
          <main className=" max-w-7xl mx-auto w-full ">{children}</main>
        </div>
      </body>
    </html>
  );
}
