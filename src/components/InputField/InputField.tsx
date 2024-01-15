import * as React from 'react';

import { Controller, useForm } from 'react-hook-form';

import { TextField } from '@mui/material';

export interface IAppProps {
}

export default function App(props: IAppProps) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })

    return (
        <>

        </>
    );
}
