import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Edit=()=>{
    let {Id} = useParams()
    const{state}=useContext(GlobalContext)
    const{
        setInput
    }=state
    useEffect(()=>{
        if(Id!==undefined){
            axios.get(`https://mitramas-test.herokuapp.com/customers/${Id}`,
            {headers:{"Authorization" : Cookies.get('access_token')}})
            .then((res)=>{
                console.log(res)
                let data=res.data.data
                setInput({
                    address:data.address,
                    country:data.country,
                    job_title:data.job_title,
                    name:data.name,
                    phone_number:data.phone_number,
                    status:data.status,
                })
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },[setInput,Id])
    console.log(Id)
    return(
        <></>
    )
}

export default Edit