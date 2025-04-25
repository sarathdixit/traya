import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/header";
import Assessment from "@/components/assessment";

// Load Nunito Sans
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap", // optional, for better performance
});

export default function Home() {
  return (
    <main className={`${nunitoSans.className} font-[var(--font-nunito-sans)]`}>
      <Header />
      <div className="p-4">
        <Assessment />
      </div>
    </main>
  );
}
