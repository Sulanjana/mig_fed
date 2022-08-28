import React from "react";
import { Navbar } from "flowbite-react/lib/esm/components";
const Navbars=()=>{
    return(
        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Mitramas Infosys Global
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link>Logout</Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars