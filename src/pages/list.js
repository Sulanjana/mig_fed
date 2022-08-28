import React, { useContext, useEffect} from "react"
import { Button } from "flowbite-react"
import { Modal} from "flowbite-react/lib/esm/components"
import { Table } from "flowbite-react/lib/esm/components"
import axios from "axios"
import Cookies from "js-cookie"
import { GlobalContext } from "../context/GlobalContext"
import { Auth } from "../component/auth";
import { Label } from "flowbite-react/lib/esm/components"
import { TextInput } from "flowbite-react/lib/esm/components"
import Container from "../component/container"
const List=()=>{
    const {state,handle}=useContext(GlobalContext)
    const{
        isModal,
        setIsModal,
        data,
        setData,
        input,
        fetching,
        setFetching,
    }=state
    const{
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        status
    }=handle
    
    useEffect(()=>{
        if(fetching===true){
            axios.get(`https://mitramas-test.herokuapp.com/customers`,
            {headers: {"Authorization" : Cookies.get('access_token')}})
            .then((res)=>{
                let data=res.data.data
                let result=data.map((e)=>{
                    let{
                        address,
                        country,
                        id,
                        job_title,
                        name,
                        phone_number,
                        status,
                    }=e
                    return{
                        address,
                        country,
                        id,
                        job_title,
                        name,
                        phone_number,
                        status,
                    }
                })
                setData(result)
                
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        setFetching(false)
    },[setData,fetching,setFetching])
    console.log(data)
    return(
        <>
        <Container>
        <Auth>
        <Button onClick={()=>{setIsModal(true)}}>
            Create Data
        </Button>
        <Modal
            show={isModal}
            onClose={()=>{setIsModal(false)}}
        >
            <Modal.Header>
            Create Data
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
                <div className=" block">
                <Label
                    value="Name"
                />
                </div>
                <TextInput
                type="text"
                name="name"
                value={input.name}
                onChange={handleInput}
                required={true}
                />
            </div>
            <div>
                <div className=" block">
                <Label
                    value="Job Title"
                />
                </div>
                <TextInput
                type="text"
                name="job_title"
                value={input.job_title}
                onChange={handleInput}
                required={true}
                />
            </div>
            <div>
                <div className=" block">
                <Label
                    value="Country"
                />
                </div>
                <TextInput
                type="text"
                name="country"
                value={input.country}
                onChange={handleInput}
                required={true}
                />
            </div>
            <div>
                <div className=" block">
                <Label
                    value="Address"
                />
                </div>
                <TextInput
                type="text"
                name="address"
                value={input.address}
                onChange={handleInput}
                required={true}
                />
            </div>
            <div>
                <div className=" block">
                <Label
                    value="Phone Number"
                />
                </div>
                <TextInput
                type="number"
                name="phone_number"
                value={input.phone_number}
                onChange={handleInput}
                required={true}
                />
            </div>
            <div>
                <div className=" block">
                <Label
                    value="Status"
                />
                </div>
                <TextInput
                type="number"
                name="status"
                value={input.status}
                onChange={handleInput}
                required={true}
                />
            </div>
            <Button onClick={()=>{setIsModal(false)}} className="mb-2" type="submit">
                Submit
            </Button>
            </form>
            </Modal.Body>
            <Modal.Footer>
            {/* <Button onClick={()=>{setIsModal(true)}}>
                I accept
            </Button>
            <Button
                color="gray"
                onClick={()=>{setIsModal(false)}}
            >
                Decline
            </Button> */}
            </Modal.Footer>
        </Modal>
        <Table>
        <Table.Head>
            <Table.HeadCell>
            Name
            </Table.HeadCell>
            <Table.HeadCell>
            Job Title
            </Table.HeadCell>
            <Table.HeadCell>
            Address
            </Table.HeadCell>
            <Table.HeadCell>
            Country
            </Table.HeadCell>
            <Table.HeadCell>
            Phone Number
            </Table.HeadCell>
            <Table.HeadCell>
            Status
            </Table.HeadCell>
            <Table.HeadCell>
            Action
            </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {data!==null && data.map((res,index)=>{
            return(
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {res.name}
            </Table.Cell>
            <Table.Cell>
                {res.job_title}
            </Table.Cell>
            <Table.Cell>
                {res.address}
            </Table.Cell>
            <Table.Cell>
                {res.country}
            </Table.Cell>
            <Table.Cell>
                {res.phone_number}
            </Table.Cell>
            <Table.Cell>
                {status(res.status)}
            </Table.Cell>
            <Table.Cell>
                <button
                href="/tables"
                className="font-medium text-yellow-600 hover:underline dark:text-blue-500"
                onClick={handleEdit} value={res}
                >
                Edit
                </button>
                <button
                href="/tables"
                className="font-medium text-red-600 hover:underline dark:text-red-500"
                onClick={handleDelete} value={res.id}
                >
                Delete
                </button>
            </Table.Cell>
            </Table.Row>
        )})}
            
        </Table.Body>
        </Table>
        </Auth>
        </Container>
        </>
    )
}

export default List