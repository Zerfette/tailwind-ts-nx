import { z } from 'zod'
import { HTMLAttributes } from 'react'

const variants: [string, ...string[]] = ['base']
export const Variant = z.enum(variants)

export const Props = z.object({ variant: Variant })
export type Props = HTMLAttributes<HTMLDivElement> &
  z.infer<typeof Props>
