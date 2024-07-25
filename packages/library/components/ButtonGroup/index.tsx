import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { type Props } from './schema'
import { Card } from '../Card'

type ButtonGroup = FC<PropsWithChildren<Props>>
export const ButtonGroup: ButtonGroup = ({
  children,
  className,
}) => {
  return (
    <Card
      variant="outline"
      className={cn('w-fit', className)}
    >
      {children}
    </Card>
  )
}
