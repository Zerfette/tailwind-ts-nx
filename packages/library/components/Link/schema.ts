import { HTMLAttributes } from 'react'
import { z } from 'zod'

export const variants: [string, ...string[]] = [
  'basic',
  'button',
]

export const Variant = z.enum(variants)
type Variant = typeof Variant

export const Props = z.object({ variant: Variant , href: z.string(), target: z.string()})
export type Props = HTMLAttributes<HTMLElement> &
  z.infer<typeof Props>
