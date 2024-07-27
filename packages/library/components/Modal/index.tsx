import cn from 'classnames'
import { useVariants } from 'core/hooks'
import { IO } from 'fp-ts/IO'
import { useEffect, useRef } from 'react'
import { ReactFC } from '../../types'
import { inBounds } from './model'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

export type Dialog = HTMLDialogElement & {
  showModal: IO<void>
  close: IO<void>
}

export const Modal: ReactFC<Props> = ({ children, disclosure, className, variant }) => {
  let modal = useRef<Dialog>((<></>) as unknown as Dialog)
  const variants = useVariants(classes, Variant, variant)
  const close = () => {
    modal.current.close()
    disclosure.onClose()
    document.body.style.position = ''
    document.body.style.overflowY = ''
  }

  const open = () => {
    modal.current.showModal()
    document.body.style.position = 'fixed'
    document.body.style.overflowY = 'scroll'
  }

  const clickOffListener = (event: React.MouseEvent) => {
    var rect = modal.current.getBoundingClientRect()
    if (!inBounds(rect)(event)) close()
  }

  useEffect(
    () => (disclosure.isOpen ? open() : close()),
    [disclosure.isOpen]
  )

  return (
    <dialog
      ref={modal}
      className={cn(className, variants)}
      onClick={clickOffListener}
    >
      {children}
    </dialog>
  )
}
