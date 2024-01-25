import * as React from 'react';

import Sidebar from './components/Sidebar';

export interface IPostLayoutProps {
    children: React.ReactNode
}

export default function PostLayout({
    children,
}: IPostLayoutProps) {


    return (
        <div className='post-container w-full flex h-screen justify-between relative'>
            <div className='w-1/6'>
                <Sidebar />
            </div>

            <div className="w-5/6 flex">
                <div className="post-main w-3/4 flex justify-center text-black">
                    {children}
                </div>

                <div className="post-main w-1/4 h-full bg-blue-400">
                    right menu
                </div>
            </div>

        </div>
    );
}
