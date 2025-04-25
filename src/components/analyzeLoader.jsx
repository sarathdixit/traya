import { CheckCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AnalyzeLoader() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/result");
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen justify-center text-center px-4">
      <div className="w-24 h-24 mb-6">
        <img src="/image/webp/hair.jpg" alt="logo" />{" "}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Customising your plan...</h2>

      <ul className="space-y-4 text-left">
        <li className="flex items-center space-x-2">
          <CheckCircle className="text-green-500 w-5 h-5" />
          <span>Assessing your response</span>
        </li>
        <li className="flex items-center space-x-2">
          <CheckCircle className="text-green-500 w-5 h-5" />
          <span>Analyzing hair loss</span>
        </li>
        <li className="flex items-center space-x-2">
          <Loader2 className="animate-spin text-green-500 w-5 h-5" />
          <span>Building recommendations</span>
        </li>
      </ul>
    </div>
  );
}
