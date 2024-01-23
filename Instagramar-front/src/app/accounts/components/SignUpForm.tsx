"use client"

import * as yup from "yup";

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@mui/material';
import InputField from "./InputField";
import { SignIn } from '@/models';
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignUpFormProps {
}

type Inputs = {
    account: string
    fullname: string
    username: string
    password: string
}

export default function SignUpForm(props: ISignUpFormProps) {
    const schema = yup.object({
        account: yup.string()
            .required('This field is required')
            .test(
                'email-or-phone-',
                'Invalid account. Enter a valid email, phone number, or username',
                (value) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    const phoneRegex = /^\d{10}$/;

                    return emailRegex.test(value) || phoneRegex.test(value) || typeof value === 'string';
                }
            ),

        fullname: yup.string().required("This field is required!!"),

        username: yup.string().required("This field is required!!"),

        password: yup.string().required("This field is required!!")
    })

    const methods = useForm<Inputs>({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<Inputs> = async ({ account, password }: SignIn) => {

        await fetch('http://localhost:3000/api/signin', {
            method: "POST",
            body: JSON.stringify({ account, password })
        })

        methods.reset()
    }
    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col w-4/5 mb-4 '>

                <InputField field="account" type="text" placeholder="Email, điện thoại hoặc tên người dùng" />

                <InputField field="fullname" type="text" placeholder="Tên đầy đủ" />

                <InputField field="username" type="text" placeholder="Tên người dùng" />

                <InputField field="password" type="password" placeholder="Mật khẩu" />

                <Button variant='contained' className='bg-blue-500 text-[14px] font-semibold flex items-center my-4 capitalize'> Đăng ký </Button>
            </form>
        </FormProvider>
    );
}
