import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CommonButton({ btnText, navigateLink }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white/10 border border-white/20 py-1.5 px-2 rounded-md relative group overflow-hidden hover:shadow-md shadow-white/10">
      <div className="absolute top-0 -right-1/2 w-1/4 h-full bg-white/20 blur-sm group-hover:right-[120%] duration-700"></div>
      <button
        onClick={() => navigate(navigateLink ? navigateLink : "#")}
        className="py-2.5 active:scale-95 px-6 lg:px-8 rounded-lg  bg-gradient-to-r from-[#3c1c9c] via-[#623ac0] to-[#b091f8] text-white relative group overflow-hidden"
      >
        <span className="relative z-10 text-xs flex flex-row gap-2 items-center justify-center">
          {btnText} <ArrowUpRight className="group-hover:scale-110 duration-500"/>
        </span>
        <span className="absolute top-0 w-1/4 h-full -left-1/2 bg-white/20 blur-sm group-hover:left-[120%] duration-1000 transition-all ease-out z-0"></span>
      </button>
    </div>
  );
}
