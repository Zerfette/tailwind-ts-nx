import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { Variant, type Props } from './schema'
import classes from './style.module.css'
import { P } from '../../typography/P'
import { ReactFC } from '../../types'

export const Badge: ReactFC<Props> = ({
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
