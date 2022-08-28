import React from "react";
import { Sidebar } from "flowbite-react/lib/esm/components";
const Sidebard=()=>{
    return(
        <>
        <div className="flex-none bg-gray-50">
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item
                href="/"
                >
                <button>Dashboard</button>
                </Sidebar.Item>
            </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
        </div>
        </>

    )
}

export default Sidebard