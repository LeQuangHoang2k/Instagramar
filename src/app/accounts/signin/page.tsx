import "./signin.scss";

import Image from 'next/image';
import SignInForm from './components/SignInForm';
import ipMockup from "../../../../public/images/iphone-mockup.png";
import screenshot1 from "../../../../public/images/screenshot1.png";
import screenshot3 from "../../../../public/images/screenshot3.png";

export interface ISignInProps {
}

export function generateMetadata() {
    return {
        title: "Instagramar | Sign In",
    }
}

export default function SignIn(props: ISignInProps) {

    return (
        <section className='w-full flex h-screen'>
            {/* IMAGES */}
            <div className="w-1/2 h-full relative flex images">
                <div className="flex w-96 h-4/5 absolute top-16 right-0 justify-center z-10">
                    <Image src={ipMockup} alt="" className="w-[270px] h-[545px] " />
                    <Image src={screenshot1} alt="" className="w-[240px] h-[520px] absolute top-3" />
                </div>

                <div className="flex w-96 h-4/5 absolute top-10 right-32 justify-center">
                    <Image src={ipMockup} alt="" className="w-[270px] h-[545px] " />
                    <Image src={screenshot3} alt="" className="w-[240px] h-[520px] absolute top-3" />
                </div>
            </div>

            {/* SIGN IN FORM */}
            <SignInForm />
        </section>
    );
}