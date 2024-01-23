"use client"

import * as yup from "yup";

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@mui/material';
import InputField from "./InputField";
import { SignIn } from '@/models';
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
    account: string
    password: string
}
export default function SignInForm() {
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

        password: yup.string().required("This field is required!!")
    })

    const methods = useForm<Inputs>({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<Inputs> = async ({ account, password }: SignIn) => {
        console.log("🚀 ~ constonSubmit:SubmitHandler<Inputs>= ~ { account, password }:", { account, password })

        await fetch('http://localhost:3000/api/signin', {
            method: "POST",
            body: JSON.stringify({ account, password })
        })

        methods.reset()
    }

    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col w-4/5 mb-4'>

                <InputField field="account" type="text" placeholder="Account" />

                <InputField field="password" type="password" placeholder="Password" />

                <Button style={{ background: "#0095f6", color: "#fff", textTransform: "capitalize", height: "2rem" }} variant='contained' type='submit'>Đăng nhập</Button>
            </form>
        </FormProvider>




    );
}
