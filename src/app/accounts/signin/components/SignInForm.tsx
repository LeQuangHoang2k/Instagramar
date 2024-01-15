"use client"

import { Button, Paper, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { BREAK_POINTS_NUMBER } from "@/constants/breakpoints";
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';
import Link from "next/link";
import { SignIn } from '@/models';
import instagramar from "../../../../../public/images/Instagramar.png";

type Inputs = {
    account: string
    password: string
}
export default function SignInForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = async ({ account, password }: SignIn) => {

        await fetch('http://localhost:3000/api/signin', {
            method: "POST",
            body: JSON.stringify({ account, password })
        })

        reset()
    }

    return (
        <div className="w-1/2 h-full flex justify-center flex-col signin-container">
            <Paper className='signin-frame w-1/2 py-3 flex justify-center flex-col items-center' elevation={2}>
                <div className=" w-4/5 h-[100px] mb-5">
                    <Image src={instagramar} alt="" className='w-full h-full object-cover' />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-4/5 mb-4'>

                    <TextField
                        id="outlined-basic"
                        fullWidth
                        className='mb-2'
                        placeholder="Phone number, username or email"
                        {...register("account", { required: true })}
                    />

                    {errors.account && <span className='text-red-400 font-semibold'>This field is required!!</span>}

                    <TextField
                        id="outlined-basic"
                        fullWidth
                        className='mb-2'
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />

                    {errors.password && <span className='text-red-400 font-semibold'>This field is required!!</span>}


                    <Button style={{ background: "#0095f6", color: "#fff", textTransform: "capitalize", height: "2rem" }} variant='contained' type='submit'>Đăng nhập</Button>
                </form>

                <Divider className='w-4/5 text-xs'> HOẶC </Divider>

                <Button className='text-[14px] font-semibold flex items-center my-4 capitalize'><FacebookIcon className='mr-2' /> Đăng nhập bằng Facebook </Button>

                <Link href="/accounts/forget" className='text-blue-900 text-xs'>Quên mật khẩu</Link>
            </Paper>

            <Paper className='signup-frame w-[50%] flex mt-[10px] p-4 justify-center' elevation={2}>
                <p className='text-xs' >Bạn chưa có tài khoản ư? <Link className='font-semibold text-blue-400' href="/accounts/signup">Đăng Ký</Link></p>
            </Paper>
        </div>


    );
}
