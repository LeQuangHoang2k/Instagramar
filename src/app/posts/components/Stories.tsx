"use client"

import '../post.scss'

import * as React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { stories } from '@/mocks';

export interface IStoriesProps {

}

export default function Stories(props: IStoriesProps) {
    return (
        <div className="post-story w-full h-[100px] relative text-black py-2 mt-6 mb-8">
            <Swiper
                slidesPerView={8}
                spaceBetween={16}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper"
            >
                {stories.map((story, key) => {
                    return <SwiperSlide key={key} className='flex flex-col'>
                        <div className="w-14 h-14 rounded-full mb-1">
                            <Image className='w-full h-full object-cover rounded-full' width={0} height={0} src={story.image} alt="avatar" priority={true} />
                        </div>

                        <div className="name text-xs truncate w-full font-semibold" >
                            {story.name}
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
}
