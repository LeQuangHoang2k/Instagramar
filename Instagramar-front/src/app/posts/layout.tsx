import * as React from 'react';

import { images, sidebar } from '@/constants';

import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import Image from 'next/image';
import Sidebar from './components/Sidebar';
import { alert } from '@/utils';

export interface IPostLayoutProps {
    children: React.ReactNode
}

export default function PostLayout({
    children,
}: IPostLayoutProps) {


    return (
        <div className='bg-black w-full flex '>
            <Sidebar />

            <div className="post-main w-4/5 flex justify-center">
                {children}
            </div>

            <div className="post-main w-1/3 h-full bg-blue-400">
                right menu
            </div>

        </div>
    );
}
