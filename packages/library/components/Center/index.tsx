import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { type Props } from './schema'
import classes from './style.module.css'

type Center = FC<PropsWithChildren<Props>>
export const Center: Center = ({
  children,
  className,
}) => {
  return (
    <div className={cn(className, classes.center)}>
      {children}
    </div>
  )
}
