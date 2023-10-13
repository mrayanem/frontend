import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const Input = ({...rest}: InputProps ) => {
  return(
    <input {...rest} className={'form-control'}  style={{padding: "0.55rem"}}/>
  )
}
