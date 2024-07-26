import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import classes from './style.module.css'
import { type Props } from './schema'
import { Card } from '../Card'

type ButtonGroup = FC<PropsWithChildren<Props>>
export const ButtonGroup: ButtonGroup = ({
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
