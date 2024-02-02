"use client"

import '../post.scss';

import * as React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { stories, storiesMocked } from '@/mocks';

import CustomModal from '@/components/Modals';
import Image from 'next/image';
import Stories from 'react-insta-stories';

export interface IStoriesProps {

}

export default function StoryList(props: IStoriesProps) {
    const [isOpen, setIsOpen] = React.useState(false);

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
                    return <SwiperSlide key={key} className='flex flex-col' onClick={() => setIsOpen(true)}>
                        <div className="story-avatar w-16 h-16 rounded-full mb-1 cursor-pointer">
                            <Image className='w-full h-full object-cover rounded-full' width={0} height={0} src={story.image} alt="avatar" priority={true} />
                        </div>

                        <div className="name text-xs truncate w-full font-semibold" >
                            {story.name}
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>

            <CustomModal isOpen={isOpen} onClose={setIsOpen} >
                <Stories stories={storiesMocked} />
            </CustomModal>
        </div>
    );
}
