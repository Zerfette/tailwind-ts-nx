import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { FC, PropsWithChildren } from 'react'
import { Variant, type Props } from './schema'
import classes from './style.module.css'
import { P } from '../../typography/P'

type Badge = FC<PropsWithChildren<Props>>
export const Badge: Badge = ({
  children,
  className,
  variant,
}) => {
  const variants = useVariants(classes, Variant, variant)
  return (
    <span className={cn(className, classes.base, variants)}>
      <P variant="base">{children}</P>
    </span>
  )
}
