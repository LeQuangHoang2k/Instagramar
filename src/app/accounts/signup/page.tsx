import "../auth.scss"

import { Button, Paper } from '@mui/material';

import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';
import Link from "next/link";
import SignUpForm from "../components/SignUpForm";
import instagramar from "../../../../public/images/Instagramar.png";

export default function SignUp() {
    return (
        <div className="w-1/2 h-full flex justify-center flex-col form-container">
            <Paper className='signin-frame w-1/2 py-3 flex justify-center flex-col items-center frame' elevation={2}>
                <div className=" w-4/5 h-[80px] mb-5flex justify-center items-center">
                    <Image src={instagramar} alt="" className='w-full h-full object-cover' />
                </div>

                <p className="w-4/5 font-semibold text-sm text-gray-600 text-center">Đăng ký để xem ảnh và video từ bạn bè.</p>

                <Button className='text-[14px] font-semibold flex items-center my-2 capitalize'><FacebookIcon className='mr-2' /> Đăng nhập bằng Facebook </Button>

                <Divider className='w-4/5 text-xs mb-2'> HOẶC </Divider>

                <SignUpForm />

            </Paper>

            <Paper className='signup-frame w-[50%] flex mt-[10px] p-4 justify-center frame' elevation={2}>
                <p className='text-xs' >Bạn có tài khoản? <Link className='font-semibold text-blue-400' href="/accounts/signin">Đăng Nhập</Link></p>
            </Paper>

        </div>


    );
}
