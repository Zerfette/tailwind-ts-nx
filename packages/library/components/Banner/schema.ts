import { z } from 'zod'

export const variants: [string, ...string[]] = [
  'dark',
  'glow',
  'transparent',
]
export const Variant = z.enum(variants)
export type Variant = z.infer<typeof Variant>
export type Props = { variant: Variant }
