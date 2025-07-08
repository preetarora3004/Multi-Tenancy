import { Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";



export const AppBar = () => {

  const navigate = useNavigate();

  return (
    <div id = "navbar" className="flex w-screen items-center h-20 justify-between border-b border-gray-300 pb-5 z-50">

      <div className="flex gap-2 items-center pt-5 pl-9">
        <div>
          <Building2 size={40} color="black" strokeWidth={2} />
        </div>
        <div className="text-2xl font-bold ">Multi Tenant</div>
      </div>

      <div className="flex gap-7 pl-8 text-md pt-5 font-medium">

        <div className=" cursor-pointer">Features</div>

        <div className=" cursor-pointer" >Pricing</div>

        <div className=" cursor-pointer" >About</div>

        <div className=" cursor-pointer" >Contact</div>
      </div>

      <div className="flex pt-5 text-sm font-semibold pr-9">
        <div className="pr-2">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-base font-medium focus:outline-none rounded-lg border focus:z-10 bg-white text-black border-white dark:hover:text-black dark:hover:bg-button" onClick={()=> {
              navigate("/signup")
            }}
          >
            Sign In
          </button>
        </div>

        <div>
          <button
            className="rounded-md bg-black py-2.5 px-5 border border-transparent text-center text-base text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-800 focus:shadow-none active:bg-slate-700 hover:bg-slate-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
