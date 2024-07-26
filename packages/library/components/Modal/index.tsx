import { type Disclosure } from 'core/hooks'
import { IO } from 'fp-ts/IO'
import { Predicate } from 'fp-ts/Predicate'
import {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react'

export type Dialog = HTMLDialogElement & {
  showModal: IO<void>
  close: IO<void>
}

type targets = (
  target: HTMLDialogElement | Dialog
) => Predicate<React.MouseEvent>
export const targets: targets = (target) => (event) =>
  event.target === target

type Modal = FC<PropsWithChildren<Disclosure>>
export const Modal: Modal = ({
  children,
  isOpen,
  onClose,
}) => {
  let modal = useRef<Dialog>((<></>) as unknown as Dialog)
  const close = () => {
    modal.current.close()
    onClose()
  }

  useEffect(
    () => (isOpen ? modal.current.showModal() : close()),
    [isOpen]
  )

  const onClick = (event: React.MouseEvent) =>
    targets(modal.current)(event) ? close() : null

  return (
    <dialog ref={modal} onClick={onClick}>
      {children}
    </dialog>
  )
}
