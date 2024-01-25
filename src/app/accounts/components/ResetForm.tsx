"use client"

import * as yup from "yup";

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@mui/material';
import InputField from "./InputField";
import { SignIn } from "@/models";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
    account: string
}
export default function ResetForm() {

    const schema = yup.object({
        account: yup.string()
            .required('This field is required')
            .test(
                'email-or-phone-or-string',
                'Invalid account. Enter a valid email, phone number, or username',
                (value) => {
                    // Check for email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    // Check for phone number
                    const phoneRegex = /^\d{10}$/;

                    return emailRegex.test(value) || phoneRegex.test(value) || typeof value === 'string';
                }
            ),
    })

    const methods = useForm<Inputs>({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<Inputs> = async ({ account }: SignIn) => {

        await fetch('http://localhost:3000/api/signin', {
            method: "POST",
            body: JSON.stringify({ account })
        })

        methods.reset()
    }

    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col w-4/5 my-2'>

                <InputField field="account" type="text" placeholder="Email, điện thoại hoặc tên người dùng" />

                <Button style={{ background: "#0095f6", color: "#fff", textTransform: "capitalize", height: "2rem" }} variant='contained' type='submit'>Gửi liên kết đăng nhập</Button>
            </form>
        </FormProvider>
    );
}
