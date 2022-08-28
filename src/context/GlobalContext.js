import React, { createContext, useState } from "react";
import axios from 'axios'
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom'
export const GlobalContext = createContext()
export const GlobalProvider=(props)=>{
    let navigate=useNavigate()
    // login
    const[login,setLogin]=useState({
        email:"",
        password:""
    })
    const handleLogin=(event)=>{
        let name=event.target.name
        let value=event.target.value

        setLogin({...login,[name]:value})
    }
    const handleLoginSubmit=(event)=>{
        event.preventDefault()
        let {email,password} = login
        axios.post('https://mitramas-test.herokuapp.com/auth/login',{email,password})
        .then((res)=>{
            console.log(res)
            let {access_token}=res.data
            Cookies.set('access_token',access_token,{expires:1})
            navigate('/list')
        })
        .catch((error)=>{
            console.log(error)
        })
        setLogin({
            email:"",
            password:""
        })
    }
    // table
    const [isModal,setIsModal]=useState(false)
    const [data,setData]=useState(null)
    const [fetching,setFetching]=useState(true)
    const status=(status)=>{
        if(status===true){
            return "Success"
        }
        else{
            return "Failed"
        }
    }
    // input
    const [currentId,setCurrentId]=useState(-1)
    const [input,setInput]=useState({
        address:"",
        country:"",
        job_title:"",
        name:"",
        phone_number:"",
        status:"",
    })
    const handleInput=(event)=>{
        let name=event.target.name
        let value=event.target.value   
        // setInput(prev => ({ ...prev, [event.target.name]: event.target.value }))
        // event.preventDefault()
        if(name==="name"){
            setInput({...input,name:value})
        }
        else if(name==="address"){
            setInput({...input,address:value})
        }
        else if(name==="country"){
            setInput({...input,country:value})
        }
        else if(name==="job_title"){
            setInput({...input,job_title:value})
        }
        else if(name==="phone_number"){
            setInput({...input,phone_number:value})
        }
        else if(name==="status"){
            setInput({...input,status:value})
        }
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        let{
            address,
            country,
            job_title,
            name,
            phone_number,
            status,
        }=input
        if(currentId===-1){
            axios.post('https://mitramas-test.herokuapp.com/customers',{
                address,
                country,
                job_title,
                name,
                phone_number,
                status,
            },{headers: {"Authorization" : Cookies.get('access_token')}})
            .then((res)=>{
                console.log(res)
                setFetching(true)
                navigate('/list')            
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        else{
            axios.put(`https://mitramas-test.herokuapp.com/customers/${currentId}`,{
                address,
                country,
                job_title,
                name,
                phone_number,
                status,
            },{headers: {"Authorization" : Cookies.get('access_token')}})
            .then((res)=>{
                console.log(res)
                setFetching(true)
                navigate('/list')            
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        setInput({
            address:"",
            country:"",
            job_title:"",
            name:"",
            phone_number:"",
            status:"",
        })
        console.log(input)
    }
    // delete
    const handleDelete=(event)=>{
        let id=parseInt(event.target.value)
        axios.delete(`https://mitramas-test.herokuapp.com/customers`,
        {headers: {"Authorization" : Cookies.get('access_token')},data:{id:id}})
        .then((res)=>{
            setFetching(true)
        })
            console.log(id)
    }
    // edit
    const handleEdit=(event)=>{
        let id=event.target.value
        console.log(id)
        // setInput({
        //     address:data.address,
        //     country:data.country,
        //     job_title:data.job_title,
        //     name:data.name,
        //     phone_number:data.phone_number,
        //     status:data.status,
        // })
        // setIsModal(true)

    }
    // destrucuring
    let state={
        login,
        setLogin,
        isModal,
        setIsModal,
        data,
        setData,
        input,
        setInput,
        fetching,
        setFetching,
        currentId,
        setCurrentId
    }
    let handle={
        handleLogin,
        handleLoginSubmit,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        status
    }
    return(
        <GlobalContext.Provider value={
            {
                state,
                handle
                
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}