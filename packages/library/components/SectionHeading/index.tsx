import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { FC, PropsWithChildren } from 'react'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

type SectionHeading = FC<PropsWithChildren<Props>>
export const SectionHeading: SectionHeading = ({
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
