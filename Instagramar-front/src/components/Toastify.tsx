"use client"

import * as React from 'react';

import { ToastContainer } from 'react-toastify';

export interface IToastifyProviderProps {
    children: React.ReactNode;
}

export default function ToastifyProvider({ children }: IToastifyProviderProps) {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
}
