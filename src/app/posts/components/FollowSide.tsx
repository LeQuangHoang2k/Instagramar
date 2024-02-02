"use client"

import * as React from 'react';

import { Avatar, Button } from '@mui/material';

import Image from 'next/image';
import { followerSuggested } from '@/mocks';
import { images } from '@/constants';

export interface IFollowSideProps {
}

export default function FollowSide(props: IFollowSideProps) {

    return (
        <div className={`post-wrapper w-4/5 h-1/2`}>
            <div className="py-4 px-2 flex justify-between items-center">
                <Image src={images.avatar} alt='avatar' className='w-11 h-11 rounded-full object-cover' />

                <div className="flex justify-start flex-col w-1/2 text-sm">
                    <span className='text-black font-semibold'>dnn__2812</span>
                    <span className='text-black'>Đức Nghị</span>
                </div>

                <Button className='normal-case'>
                    Chuyển
                </Button>
            </div>

            <div className="flex justify-between px-2 py-4">
                <span className='text-gray-400 text-sm font-bold'>Gợi ý cho bạn</span>
                <Button className='text-black text-sm/3 capitalize font-semibold' >Xem tất cả</Button>
            </div>

            <div className="">
                {followerSuggested.map((follower, key) => {
                    return (
                        <div key={key} className="py-4 px-2 flex justify-between items-center">
                            <Image src={follower.image} alt='avatar' className='w-11 h-11 rounded-full object-cover' />

                            <div className="flex justify-start flex-col w-1/2 text-sm">
                                <span className='text-black font-semibold'>{follower.nickname}</span>
                                <span className='text-black'>{follower.name} </span>
                            </div>

                            <Button className='normal-case'>
                                Theo dõi
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
