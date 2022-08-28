import React, { useContext} from "react";
import { AuthDashboard } from "../component/auth";
import { GlobalContext } from "../context/GlobalContext";
const Login=()=>{
    const {state,handle}=useContext(GlobalContext)
    let{
        login,
    }=state
    const{
        handleLogin,
        handleLoginSubmit
    }=handle
    
   
    
    return(
        <>
        <AuthDashboard>
        <div className="m-auto mt-10 w-1/2">
        <form onSubmit={handleLoginSubmit}>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="email" value={login.email} onChange={handleLogin} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" name="password" value={login.password} onChange={handleLogin} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        </div>
        </AuthDashboard>
        </>
    )
}
export default Login