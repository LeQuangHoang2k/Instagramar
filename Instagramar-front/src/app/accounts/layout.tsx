import "./auth.scss";

import * as React from 'react';

import Image from 'next/image';
import { images } from "@/constants";

export interface IAuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({
    children,
}: IAuthLayoutProps) {
    return (
        <section className='w-full flex h-screen'>
            {/* IMAGES */}
            <div className="w-1/2 h-full relative flex images">
                <div className="flex w-96 h-4/5 absolute top-16 right-0 justify-center z-10">
                    <Image src={images.ipMockup} alt="" className="w-[270px] h-[545px] " />
                    <Image src={images.screenshot1} alt="" className="w-[240px] h-[520px] absolute top-3" />
                </div>

                <div className="flex w-96 h-4/5 absolute top-10 right-32 justify-center">
                    <Image src={images.ipMockup} alt="" className="w-[270px] h-[545px] " />
                    <Image src={images.screenshot3} alt="" className="w-[240px] h-[520px] absolute top-3" />
                </div>
            </div>


            {/* FORM */}
            {children}
        </section>
    );
}
