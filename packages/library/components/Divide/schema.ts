import { z } from 'zod'

export const variants: [string, ...string[]] = ['x', 'y']
export const Variant = z.enum(variants)
type Variant = z.infer<typeof Variant>
export type Props = { variant: Variant }
