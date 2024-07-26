import { HTMLAttributes } from 'react'
import { z } from 'zod'

export const variants: [string, ...string[]] = ['with-shadow', 'with-outline']

export const Variant = z.enum(variants)
type Variant = typeof Variant

export const Props = z.object({ variant: Variant })
export type Props = HTMLAttributes<HTMLDivElement> &
  z.infer<typeof Props>
