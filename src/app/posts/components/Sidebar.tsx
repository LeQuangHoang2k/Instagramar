"use client"

import * as React from 'react';

import { Button, Icon } from '@mui/material';
import { images, sidebar } from '@/constants';

import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { alert } from '@/utils';

export interface ISidebarProps {
}

export default function Sidebar(props: ISidebarProps) {
    const showNotifications = () => {
        alert({ type: "success", content: "test", position: "top-center" })
    }
    return (
        <div className="post-side-bar w-1/6 h-full fixed p-2 border-r border-r-gray-300">
            <div className='h-[85px] flex items-center'>
                <Image src={images.logo} alt='logo' className='w-full h-[35px] object-cover' />
            </div>
            <div className="w-full h-4/5">
                {sidebar.map((side, key) => {
                    return (
                        <Button onClick={() => showNotifications()} key={key} className='w-full flex justify-start h-[50px] mb-2 normal-case text-black'>
                            <Icon className='mr-2' fontSize='large' >{side.icon} </Icon>
                            <span className='text-sm'>{side.name} </span>
                        </Button>
                    )
                })}
            </div>

            <Button className='w-full flex justify-start items-center h-[50px] mt-1 normal-case text-black'>
                <MenuIcon className='mr-2' fontSize='large' />
                <span className='text-sm'>Xem thêm</span>
            </Button>

        </div>
    );
}
