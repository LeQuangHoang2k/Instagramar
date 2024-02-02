"use client"

import * as React from 'react';

import { Button, Icon } from '@mui/material';

import { signIn } from 'next-auth/react';

export interface ISocialSigninProps {
}

export default function SocialSignin(props: ISocialSigninProps) {
    return (
        <>
            <Button className='text-[14px] font-semibold flex items-center my-4 capitalize'
                variant="outlined"
                onClick={() => signIn("google")}>
                <Icon>google</Icon> Sign In With Google
            </Button>

            <Button className='text-[14px] font-semibold flex items-center my-4 capitalize'
                variant="outlined"
                onClick={() => signIn("facebook")}>
                <Icon>facebook</Icon> Sign In With Facebook
            </Button>
        </>
    );
}
