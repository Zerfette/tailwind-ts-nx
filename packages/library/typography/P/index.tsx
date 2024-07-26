import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { Variant, type Props } from './schema'
import classes from './style.module.css'
import { useVariants } from 'core/hooks'

type P = FC<PropsWithChildren<Props>>
export const P: P = ({
  children,
  className,
  variant,
}) => {
  const variants = useVariants(classes, Variant, variant)
  return (
    <p className={cn(className, variants)}>
      {children}
    </p>
  )
}
