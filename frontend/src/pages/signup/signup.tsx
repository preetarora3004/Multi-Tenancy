import { Building2 } from "lucide-react";
import { useState } from "react";
import { BackHome } from "../../components/pageComponent/appBar/backHome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

  const [formData, setFormData] = useState({
    username: "",
    lastName: "",
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToUpdates: false,
  });


  const navigate = useNavigate();

  async function sendRequest(){

    const response = await axios.post("http://localhost:8787/api/v1/user/signup",formData)
    const token = response.data;

    localStorage.setItem("token",token);
    navigate("/dashboard");
    
  }

  return (
    <div className="flex justify-center items-center">
      <div className="pt-5">
        <div className="pr-70 font-semibold">
          <BackHome />
        </div>

          <div className="mx-auto w-full max-w-md">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 relative">
              {/* Logo in gray circle */}
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-700">
                    <Building2 size={40} />
                  </span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Create your account
              </h1>
              <p className="text-center text-gray-500 mb-6 font-medium">
                Start building your multi-tenant application today
              </p>

              <div className="flex flex-col space-y-3 mb-6">
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Continue with GitHub
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500 font-medium">
                    or continue with email
                  </span>
                </div>
              </div>

              <div className="space-y-4" >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="Enter first name"
                      type="text"
                      onChange={(e)=>{
                        setFormData({
                            ...formData,
                            username : e.target.value
                        })
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter last name"
                      onChange={(e)=> {
                        setFormData({
                            ...formData,
                            lastName : e.target.value
                        })
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="xyz@gmail.com"
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            email : e.target.value
                        })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            password : e.target.value
                        })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Create a strong password"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-bold text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            confirmPassword : e.target.value
                        })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    onClick={()=>{
                        setFormData({
                            ...formData,
                            agreeToTerms : true
                        })
                    }}

                    type="checkbox"
                    className="h-4 w-4 mt-1 text-gray-700 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    <span className="font-semibold">I agree to the Terms of Service and Privacy Policy</span>{" "}
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="subscribeToNewsletter"
                    name="subscribeToNewsletter"
                    type="checkbox"
                    onClick={()=>{
                        setFormData({
                            ...formData,
                            agreeToUpdates : true
                        })
                    }}
                    className="h-4 w-4 mt-1 text-gray-700 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="subscribeToNewsletter"
                    className="ml-2 block text-sm text-gray-700 font-semibold"
                  >
                    Subscribe to our newsletter for updates and tips
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={sendRequest}
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Create account
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <span className="text-gray-500">Already have an account?</span>{" "}
                  <p className="font-semibold cursor-pointer hover:underline" onClick={()=>{
                    navigate("/signin")
                  }}>Sign In</p>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
