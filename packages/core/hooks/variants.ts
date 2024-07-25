import { map } from 'fp-ts/lib/Array'
import { concatAll } from 'fp-ts/lib/Monoid'
import { getMonoid } from 'fp-ts/lib/Record'
import { Eq } from 'fp-ts/lib/string'
import { pipe } from 'fp-ts/lib/function'
import { Predicate } from 'fp-ts/lib/Predicate'
import { z } from 'zod'

type isVariant = (variant: string) => Predicate<string>
export const isVariant: isVariant = (variant) => (x) =>
  Eq.equals(x, variant)

const keyPairMonoid = getMonoid({
  concat: (x: boolean) => x,
})

type toKeyPair = (
  classes: Record<string, string>,
  variant: string
) => (option: string) => Record<string, boolean>
const toKeyPair: toKeyPair =
  (classes, variant) => (option) => ({
    [classes[option]]: isVariant(option)(variant),
  })

type useVariants = (
  classes: Record<string, string>,
  schema: z.ZodEnum<[string, ...string[]]>,
  variant: string
) => Record<string, boolean>
export const useVariants: useVariants = (
  classes,
  schema,
  variant
) => {
  schema.parse(variant)
  return pipe(
    schema.options,
    map(toKeyPair(classes, variant)),
    concatAll(keyPairMonoid)
  )
}
