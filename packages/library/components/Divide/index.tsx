import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { FC, PropsWithChildren } from 'react'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

type Divide = FC<PropsWithChildren<Props>>
export const Divide: Divide = ({
  children,
  className,
  variant,
}) => {
  const variants = useVariants(classes, Variant, variant)
  return (
    <div
      className={cn(className, classes.banner, variants)}
    >
      {children}
    </div>
  )
}
