import cn from 'classnames'
import { ReactFC } from '../../types'
import classes from './style.module.css'
import { Card } from '../Card'

export const ButtonGroup: ReactFC<{}> = ({
  children,
  className,
}) => {
  return (
    <Card
      variant="with-outline"
      className={cn(classes.base, className)}
    >
      {children}
    </Card>
  )
}
