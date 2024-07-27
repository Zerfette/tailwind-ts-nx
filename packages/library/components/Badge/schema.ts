import { z } from 'zod'

export const variants: [string, ...string[]] = ['flat']
export const Variant = z.enum(variants)
export type Variant = z.infer<typeof Variant>
export type Props = { variant: Variant }
