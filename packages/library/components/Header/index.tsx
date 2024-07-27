import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { ReactFC } from '../../types'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

export const Header: ReactFC<Props>  = ({
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
