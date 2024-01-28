import * as React from 'react';

import { Avatar, Button } from '@mui/material';

import Image from 'next/image';
import Sidebar from './components/Sidebar';
import { images } from '@/constants';

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

                <div className="w-1/4 pt-10 h-full flex justify-start">
                    <div className="post-wrapper w-4/5 h-1/2">
                        <div className="py-4 px-2 flex justify-between items-center">
                            <Image src={images.avatar} alt='avatar' className='w-11 h-11 rounded-full object-cover' />

                            <div className="flex justify-start flex-col w-1/2 text-sm">
                                <span className='font-semibold'>dnn__2812</span>
                                <span className='text-black'>Đức Nghị</span>
                            </div>

                            <Button className='normal-case'>
                                Chuyển
                            </Button>
                        </div>

                        <div className="flex justify-between px-2 py-4">
                            <span className='text-gray-400 text-sm font-semibold'>Gợi ý cho bạn</span>
                            <Button className='text-white text-sm/3 capitalize' >Xem tất cả</Button>
                        </div>

                        <div className="">
                            <div className="py-4 px-2 flex justify-between items-center">
                                <Image src={images.avatar} alt='avatar' className='w-11 h-11 rounded-full object-cover' />

                                <div className="flex justify-start flex-col w-1/2 text-sm">
                                    <span className='font-semibold'>dnn__2812</span>
                                    <span className='text-black'>Đức Nghị</span>
                                </div>

                                <Button className='normal-case'>
                                    Theo dõi
                                </Button>
                            </div><div className="py-4 px-2 flex justify-between items-center">
                                <Image src={images.avatar} alt='avatar' className='w-11 h-11 rounded-full object-cover' />

                                <div className="flex justify-start flex-col w-1/2 text-sm">
                                    <span className='font-semibold'>dnn__2812</span>
                                    <span className='text-black'>Đức Nghị</span>
                                </div>

                                <Button className='normal-case'>
                                    Theo dõi
                                </Button>
                            </div>
                            <div className="py-4 px-2 flex justify-between items-center">
                                <Image src={images.avatar} alt='avatar' className='w-11 h-11 rounded-full object-cover' />

                                <div className="flex justify-start flex-col w-1/2 text-sm">
                                    <span className='font-semibold'>dnn__2812</span>
                                    <span className='text-black'>Đức Nghị</span>
                                </div>

                                <Button className='normal-case'>
                                    Theo dõi
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
