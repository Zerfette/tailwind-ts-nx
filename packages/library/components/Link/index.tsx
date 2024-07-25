import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { FC, PropsWithChildren } from 'react'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

type Link = FC<PropsWithChildren<Props>>
export const Link: Link = ({
  children,
  className,
  href,
  target,
  variant,
}) => {
  const variants = useVariants(classes, Variant, variant)

  return (
    <a
      href={href}
      target={target}
      className={cn(className, classes.link, variants)}
    >
      {children}
    </a>
  )
}
