import {
  ButtonGroup,
  Center,
  Divide,
  Link,
} from 'library/components'
import { H } from 'library/typography'
import { map } from 'fp-ts/lib/Array'
import { socials } from './model'
import { type Social } from './types'

const toButton = ({ href, title }: Social) => (
  <Link
    key={title}
    variant="button"
    target="_blank"
    href={href}
    className="w-24 sm:w-36"
  >
    <Center className="p-2 sm:p-4">
      <H level="h4" className="mr-2">
        {title}
      </H>
    </Center>
  </Link>
)

export const Socials = () => (
  <ButtonGroup>
    <Divide variant="x">{map(toButton)(socials)}</Divide>
  </ButtonGroup>
)
