import Cookies from "js-cookie";
import React from "react";
import Navbars from "./navbars";
import Sidebard from "./sidebar";

const Container=(props)=>{
    return(
        <>
        <div className='container mx-auto'>
            {Cookies.get('access_token') && <Navbars/>}
            <div className='flex'>
                {Cookies.get('access_token') && <Sidebard/>}
                <div className="flex-1">
                    {props.children}
                </div>
            </div>
        </div>
        </>
    )
}

export default Container