import { type Disclosure } from 'core/hooks'
import { z } from 'zod'

export const variants: [string, ...string[]] = [
  'backdrop',
  'rainbow',
  'transparent',
]
export const Variant = z.enum(variants)
export type Variant = z.infer<typeof Variant>
export type Props = {
  disclosure: Disclosure
  variant: Variant
}
