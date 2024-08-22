import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@deepak_01/common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"})=> {
    const [postInput,setPostInput] = useState<SignupType>({
        email: "",
        password: "",
        name: "",
    });
    const navigate = useNavigate();

    async function sendRequest() {
        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin"}`,postInput);
            const jwt = res.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        }catch(e) {
            alert("Error while signing up");
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        {type==="signin" ? "Don't have an account ?" : "Already have an account ?"}
                        <Link className="pl-2 underline" to={type==="signin" ? "/signup" : "/signin"}> 
                        {type==="signin" ? "Sign up" : "Login"}
                        </Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type==="signup" ? <LabeledInput label="Name" placeholder="deepak kumar" onchange={(e)=> {
                        setPostInput({
                            ...postInput,
                            name: e.target.value
                        })
                    }}/> : null}
                    <LabeledInput label="Username / Email" placeholder="deepak@gmail.com" onchange={(e)=> {
                        setPostInput({
                            ...postInput,
                            email: e.target.value
                        })
                    }}/>
                    <LabeledInput label="Password" type={"password"} placeholder="123456" onchange={(e)=> {
                        setPostInput({
                            ...postInput,
                            password: e.target.value
                        })
                    }}/>
                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabeledInputType {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabeledInput({label,placeholder,onchange, type}: LabeledInputType) {
    return <div>
            <label className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
            <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
}