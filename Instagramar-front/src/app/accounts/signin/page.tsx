import "../auth.scss"

import { Button, Paper } from '@mui/material';

import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';
import Link from "next/link";
import SignInForm from '../components/SignInForm';
import instagramar from "../../../../public/images/Instagramar.png";

export interface ISignInProps {
}

export function generateMetadata() {
    return {
        title: "Instagramar | Sign In",
    }
}

export default function SignIn(props: ISignInProps) {
    return (
        <div className="w-1/2 h-full flex justify-center flex-col form-container">
            <div className="form">
                <Paper className='signin-frame w-1/2 py-3 flex justify-center flex-col items-center frame' elevation={2}>
                    <div className=" w-4/5 h-[100px] mb-5">
                        <Image src={instagramar} alt="" className='w-full h-full object-cover' />
                    </div>

                    {/* SIGN IN FORM */}
                    <SignInForm />

                    <Divider className='w-4/5 text-xs'> HOẶC </Divider>

                    <Button className='text-[14px] font-semibold flex items-center my-4 capitalize'><FacebookIcon className='mr-2' /> Đăng nhập bằng Facebook </Button>

                    <Link href="/accounts/reset" className='text-blue-900 text-xs'>Quên mật khẩu</Link>
                </Paper>

                <Paper className='signup-frame w-[50%] flex mt-[10px] p-4 justify-center frame' elevation={2}>
                    <p className='text-xs' >Bạn chưa có tài khoản ư? <Link className='font-semibold text-blue-400' href="/accounts/signup">Đăng Ký</Link></p>
                </Paper>
            </div>
        </div>
    );
}
