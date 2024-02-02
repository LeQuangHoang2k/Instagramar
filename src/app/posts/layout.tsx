import * as React from 'react';

import { Avatar, Button } from '@mui/material';

import FollowSide from './components/FollowSide';
import Image from 'next/image';
import Sidebar from './components/Sidebar';
import { followerSuggested } from '@/mocks';
import { images } from '@/constants';

export interface IPostLayoutProps {
    children: React.ReactNode
}

export default function PostLayout({
    children,
}: IPostLayoutProps) {
    return (
        <div className='post-container w-full flex h-screen justify-between relative'>
            <div className='post-side-bar w-1/6'>
                <Sidebar />
            </div>

            <div className="w-5/6 flex">
                <div className="w-3/4 flex justify-center text-black post-main">
                    {children}
                </div>

                <div className="w-1/4 pt-10 h-full flex justify-start">
                    <FollowSide />
                </div>
            </div>

        </div>
    );
}
