import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import style from './button.module.scss'


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  variant?: 'light' | 'primary'
}

export const Button: FC<IButtonProps> = ({ variant = 'light', children, ...props }) => {
  return (
    <button {...props} className={`${style.baseButton} ${style[variant]}`}>
      {children}
    </button>
  )
}
