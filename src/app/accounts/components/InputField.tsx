import * as React from 'react';

import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export interface IInputFieldProps {
  field: string
  placeholder: string

  type: "password" | "text"
}

export default function InputField({ field, type, placeholder }: IInputFieldProps) {

  const { register, formState: { errors } } = useFormContext()

  return (
    <div className='mb-2'>
      <TextField
        size="small"
        id="outlined-basic"
        fullWidth
        placeholder={placeholder}
        type={type}
        {...register(field, { required: true })}
      />

      {errors[field] && <span className='text-red-400 font-semibold text-sm'>This field is required!!</span>}
    </div>
  );
}
