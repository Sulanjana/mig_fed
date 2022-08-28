import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

    const Auth = (props)=>{
        if(Cookies.get('access_token')=== undefined){
            return <Navigate to={'/login'}/>
        }else if(Cookies.get('access_token')!==undefined){
            return props.children  
        }
    }
    const AuthDashboard = (props)=>{
        if(Cookies.get('access_token')=== undefined){
            return props.children  
        }else if(Cookies.get('access_token')!==undefined){
            return <Navigate to={'/'}/>
        }
    }


export {Auth,AuthDashboard}