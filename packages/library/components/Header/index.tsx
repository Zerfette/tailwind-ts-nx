import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { FC, PropsWithChildren } from 'react'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

type Header = FC<PropsWithChildren<Props>>
export const Header: Header = ({
  children,
  className,
  variant,
}) => {
  const variants = useVariants(classes, Variant, variant)
  return (
    <div className={cn(className, variants)}>
      {children}
    </div>
  )
}
