import * as React from 'react';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Button } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import Icon from '@mui/material/Icon';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import logo from "../../../public/images/Instagramar.png"
import { sidebar } from '@/constants';

export interface IPostLayoutProps {
    children: React.ReactNode

}

export default function PostLayout({
    children,
}: IPostLayoutProps) {
    return (
        <div className='bg-black w-full flex '>
            <div className="post-side-bar w-1/5 h-full p-2 border-r border-r-gray-300">
                <div className='h-[85px] flex items-center'>
                    <Image src={logo} alt='logo' className='w-full h-[35px] object-cover' />
                </div>

                <div className="w-full h-4/5">
                    {sidebar.map((side, key) => {
                        return (
                            <Button key={key} className='w-full flex justify-start h-[50px] mb-2 normal-case text-white'>
                                <Icon className='mr-2' fontSize='large' >{side.icon} </Icon>
                                <span className='text-sm'>{side.name} </span>
                            </Button>
                        )
                    })}
                </div>

                <Button className='w-full flex justify-start items-center h-[50px] mt-1 normal-case text-white'>
                    <MenuIcon className='mr-2' fontSize='large' />
                    <span className='text-sm'>Xem thêm</span>
                </Button>

            </div>

            <div className="post-main w-4/5 flex justify-center">
                {children}
            </div>

            <div className="post-main w-1/3 h-full bg-blue-400">
                right menu
            </div>

        </div>
    );
}
