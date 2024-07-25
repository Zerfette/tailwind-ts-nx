import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { Level, type Props } from './schema'
import classes from './style.module.css'

type Heading = FC<PropsWithChildren<Props>>
export const Heading: Heading = ({
  children,
  className,
  level,
}) => {
  Level.parse(level)

  switch (level) {
    case Level.Values.h1:
      return (
        <h1
          className={cn(className, classes.h, classes.h1)}
        >
          {children}
        </h1>
      )

    case Level.Values.h2:
      return (
        <h2
          className={cn(className, classes.h, classes.h2)}
        >
          {children}
        </h2>
      )

    case Level.Values.h3:
      return (
        <h3
          className={cn(className, classes.h, classes.h3)}
        >
          {children}
        </h3>
      )

    case Level.Values.h4:
      return (
        <h4
          className={cn(className, classes.h, classes.h4)}
        >
          {children}
        </h4>
      )

    case Level.Values.h5:
      return (
        <h5
          className={cn(className, classes.h, classes.h5)}
        >
          {children}
        </h5>
      )

    case Level.Values.h6:
      return (
        <h6
          className={cn(className, classes.h, classes.h6)}
        >
          {children}
        </h6>
      )
  }
}
