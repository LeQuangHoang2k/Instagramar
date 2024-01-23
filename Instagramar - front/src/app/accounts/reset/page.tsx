import "../auth.scss"

import { Button, Divider, Paper } from '@mui/material';

import Link from "next/link";
import LockIcon from '@mui/icons-material/Lock';
import ResetForm from '../components/ResetForm';

export interface IResetPasswordProps {
}

export default function ResetPassword(props: IResetPasswordProps) {
    return (
        <div className="w-1/2 h-full flex justify-center flex-col form-container">

            <Paper className='signin-frame w-1/2 py-3 flex justify-center flex-col items-center frame' elevation={2}>
                <div className="bg-red-400 flex justify-center items-center w-[96px] h-[96px] mb-5 rounded-full border-solid border-1 border-black">
                    <LockIcon fontSize='large' />
                </div>

                <p className='text-sm text-gray-500 w-4/5'>
                    Nhập email, số điện thoại hoặc tên người dùng của bạn và chúng tôi sẽ gửi cho bạn một liên kết để truy cập lại vào tài khoản.
                </p>

                <ResetForm />

                <Divider className='w-4/5 text-xs'> HOẶC </Divider>

                <Button className='text-gray-500 text-[14px] font-semibold flex items-center my-4 capitalize'><Link href="/accounts/signup" >Tạo tài khoản mới
                </Link> </Button>

            </Paper>

            <Paper className='signup-frame w-[50%] flex mt-[10px] justify-center frame' elevation={2}>
                <Button className='text-gray-500 text-[14px] font-semibold flex items-center my-4 capitalize'><Link href="/accounts/signin" >Quay lại đăng nhập</Link> </Button>
            </Paper>

        </div>
    );
}
