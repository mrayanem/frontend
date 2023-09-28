
import { InputHTMLAttributes } from 'react';
import { TagInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const Input = ({...rest}: InputProps ) => {
  return(
    <>
      <TagInput {...rest} />
    </>

  )
}
