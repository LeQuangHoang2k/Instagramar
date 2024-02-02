import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/models';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { TextField } from '@mui/material';
import { images } from '@/constants';

export interface IPostItemProps {
    post?: Post
}

export default function PostItem({ post }: IPostItemProps) {
    return (
        <div className="post-item w-4/5 h-[830px] mx-auto">
            {/* POST HEADER */}
            <div className="post-header flex items-center pb-3">
                <div className=" w-10 h-10">
                    <Image src={images.avatar} alt='avatar' className='w-full h-full object-cover rounded-full' />
                </div>

                <div className='text-sm font-semibold mx-2'>
                    khongphaiech
                </div>

                <div className="text-sm text-gray-500 flex items-center">
                    <span className='font-semibold text-2xl pb-3 mr-1'>.</span>
                    13 giờ
                </div>
            </div>

            {/* POST'S IMAGES */}
            <div className="post-images w-full h-[580px]">
                <Image src={images.postTest} alt='image' className='w-full h-full object-cover rounded-xl' />
            </div>

            <div className="post-info text-sm my-1">
                {/* INTERACT */}
                <div className="post-interact w-full h-10 flex justify-between items-center ">
                    <div className="">
                        <span className='cursor-pointer'>
                            <FavoriteBorderRoundedIcon className='text-2xl' />
                        </span>
                        <span className='mx-3 cursor-pointer'>
                            <ChatBubbleOutlineOutlinedIcon className='text-2xl' />
                        </span>
                        <span className='cursor-pointer'>
                            <SendOutlinedIcon className='text-2xl' />
                        </span>
                    </div>

                    <div className="">
                        <span className='cursor-pointer'>
                            <BookmarkBorderOutlinedIcon className='text-2xl' />
                        </span>
                    </div>
                </div>

                {/* LIKED */}
                <div className="flex w-full my-1">
                    <span className='font-semibold mr-1'>
                        <Link href="/" >khongphaiech</Link>
                    </span>
                    và
                    <span className='font-semibold mx-1'>
                        <Link href="/">những người khác</Link>
                    </span>
                    đã thích
                </div>

                {/* CAPTION */}
                <div className="flex w-full my-1">
                    <Link className='font-semibold' href="/">khongphaiech</Link>

                    <span className='mx-1'>Random things</span>
                </div>

                {/* SEE COMMENT */}
                <div className='text-gray-500 my-1'>
                    <Link href="/">Xem tất cả 17 bình luận</Link>
                </div>

                {/* COMMENT */}
                <div>
                    <TextField InputProps={{ color: "primary" }} fullWidth id="standard-basic" label="Thêm bình luận" variant="standard" />
                </div>
            </div>
        </div>
    );
}
