"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbSeparator } from './ui/breadcrumb';
import { MobileSidebar } from './Sidebar';
function BreadcrumpHeader() {
    const pathname = usePathname();
    const paths = pathname === "/" ? [""] : pathname?.split("/");
  return <div className='flex items-center flex-start'>
    <MobileSidebar/>
    <Breadcrumb>
    <BreadcrumbList>
    {paths.map((path,index)=>(
        <React.Fragment key={index}>
            <BreadcrumbItem>
            <BreadcrumbLink className= "capitalize" href = {`${path}`}>
            {path === "" ? "home" :path}
            </BreadcrumbLink>
            </BreadcrumbItem>
            {index!== path.length-1 && <BreadcrumbSeparator/>}
        </React.Fragment>
    ))}
    </BreadcrumbList>
    </Breadcrumb>
    </div>
}
export default BreadcrumpHeader