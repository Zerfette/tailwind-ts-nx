import cn from 'classnames'
import { ReactFC } from '../../types'
import classes from './style.module.css'

export const Center: ReactFC<{}> = ({
  children,
  className,
}) => (
  <div className={cn(classes.base, className)}>
    {children}
  </div>
)
