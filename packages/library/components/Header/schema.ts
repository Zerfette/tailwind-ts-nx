import z from 'zod'
import { HTMLAttributes } from 'react'

export const Variant = z.enum(['simple'])

export const Props = z.object({ variant: Variant })
export type Props = HTMLAttributes<HTMLDivElement> &
  z.infer<typeof Props>
