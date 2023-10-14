import { InputHTMLAttributes } from 'react';
import style from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const InputT = ({...rest}: InputProps ) => {
  return(
    <input className={style.InputT} {...rest} placeholder={rest.title}/>
    //<input type="text" name={props.name} placeholder={props.title} />
  )
}
