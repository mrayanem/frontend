
import { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const Input = ({...rest}: InputProps ) => {
  return(
    <>
      <Input {...rest} />
    </>
  )
}
