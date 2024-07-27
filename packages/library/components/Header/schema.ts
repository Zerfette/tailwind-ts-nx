import { z } from 'zod'

export const Variant = z.enum(['simple'])
export type Variant = z.infer<typeof Variant>
export type  Props = { variant: Variant }
