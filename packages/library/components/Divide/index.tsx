import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { ReactFC } from '../../types'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

export const Divide: ReactFC<Props> = ({
  children,
  className,
  variant,
}) => {
  const variants = useVariants(classes, Variant, variant)
  return (
    <div className={cn(className, classes.base, variants)}>
      {children}
    </div>
  )
}
