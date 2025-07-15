import { useNavigate } from "react-router-dom";

export const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <div className="w-screen h-140 flex flex-col justify-center items-center gap-7 ">
      <div className="text-6xl font-bold w-180 text-center">
        Scale Your Saas with Multi-Tenant Architecture
      </div>

      <div className="text-xl text-center text-gray-500 w-150">
        Build and deploy scalable multi-tenant applications with
        enterprise-grade security, complete data isolation, and seamless tenant
        management.
      </div>

      <div className="flex gap-4">
        <div>
          <button
            className="flex justify-center rounded-md h-11 bg-black py-2.5 px-5 w-60 border border-transparent text-center text-base text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-800 focus:shadow-none active:bg-slate-700 hover:bg-slate-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <div className="flex items-center space-x-2 text-xl" onClick={()=>{
              navigate("/signup")
            }}>
              <span>Start Free Trial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right-icon lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        <div >
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 w-40 text-base font-medium focus:outline-none rounded-lg border focus:z-10 bg-white text-black border-gray-300 dark:hover:text-black dark:hover:bg-button"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};
