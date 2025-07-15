import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const BackHome = ()=>{

    const navigate = useNavigate();

    return <div>
        <div>
            <button
            type="button"
            onClick={()=>{
                navigate("/")
            }}
            className=" flex justify-center items-center gap-3 py-2.5 px-5 me-2 mb-2 text-base font-medium focus:outline-none rounded-lg border focus:z-10 bg-white text-black border-white dark:hover:text-black dark:hover:bg-button"
          >
            <div>
                <ArrowLeft size={18} />
            </div>

            <div className="text-sm">
                Back to Home
            </div>

          </button>
        </div>
    </div>
}