import { z } from 'zod'

export const variants: [string, ...string[]] = [
  'with-shadow',
  'with-outline',
]
export const Variant = z.enum(variants)
export type Variant = z.infer<typeof Variant>
export type Props = { variant: Variant }
