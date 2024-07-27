import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { ReactFC } from '../../types'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

export const Link: ReactFC<Props> = ({
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
      className={cn(className, classes.base, variants)}
    >
      {children}
    </a>
  )
}
