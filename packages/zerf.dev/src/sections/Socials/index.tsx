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

const toButton = ({ href, imgSrc, title }: Social) => (
  <Link
    key={title}
    variant="button"
    target="_blank"
    href={href}
    className="group w-1/3 md:w-48"
  >
    <Center className="p-1 flex-row sm:flex-col">
      <img
        alt={title}
        src={imgSrc}
        className="size-4 sm:size-8 mt-0 sm:mt-1 mr-1 sm:mr-0 group-hover:scale-110"
      />
      <H level="h5" className="mt-0 sm:mt-1">
        {title}
      </H>
    </Center>
  </Link>
)

export const Socials = () => (
  <ButtonGroup className="w-full md:w-fit">
    <Divide variant="x">{map(toButton)(socials)}</Divide>
  </ButtonGroup>
)
