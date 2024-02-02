"use client"

import * as React from 'react';

import { Button, Icon } from '@mui/material';
import { images, sidebar } from '@/constants';

import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { alert } from '@/utils';

export interface ISidebarProps {
}

export default function Sidebar(props: ISidebarProps) {

    const [isSelected, setIsSelected] = React.useState("Trang chủ");

    const showNotifications = (name: string) => {
        alert({ type: "success", content: "test", position: "top-center" })
        setIsSelected(name)
    }

    return (
        <div className="w-1/6 h-full fixed p-2 border-r border-r-gray-400">
            <div className='h-[90px] flex items-center justify-center'>
                <Image src={images.logo} alt='logo' className='w-full h-[35px] object-cover' />
                {/* {windowInnerWidth >= 1200
                    ? 
                    : <Link href="/posts" ><InstagramIcon className='text-black' sx={{ fontSize: 35 }} /></Link>} */}
            </div>

            <div className="w-full h-4/5">
                {sidebar.map((side, key) => {
                    return (
                        <Button onClick={() => showNotifications(side.name)} key={key} className={`w-full flex justify-start px-3 py-4 my-1 text-black `} >
                            <Icon className='mr-2' style={{ fontSize: 35 }}>{side.icon} </Icon>
                            <span className='text-xl normal-case' >{side.name} </span>
                        </Button>
                    )
                })}
            </div>

            <Button className='w-full flex justify-start items-center h-[50px] mt-1 normal-case text-black'>
                <MenuIcon className='mr-2' fontSize='large' />

                <span className='text-xl'>Xem thêm</span>
            </Button>

        </div>
    );
}
