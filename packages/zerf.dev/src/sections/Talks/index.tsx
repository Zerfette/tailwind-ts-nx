import { map } from 'fp-ts/lib/Array'
import {
  Center,
  Card,
  Divide,
  Link,
  SectionHeading,
} from 'library/components'
import { H, P } from 'library/typography'
import { talks } from './model'
import classes from './style.module.css'
import { Talk } from './types'

const toTalk = ({ title, description, video }: Talk) => (
  <li key={title}>
    <Card variant="with-shadow" className="m-6">
      {video ? (
        <Divide variant="y">
          <Center className="group flex-col sm:flex-row p-2">
            <Link
              target="_blank"
              href={video}
              variant="basic"
            >
              <H level="h3" className="text-center m-2">
                {title}
              </H>
            </Link>
            <img
              alt={title}
              src="youtube.svg"
              className="group-hover:animate-bounce m-2 h-8"
            />
          </Center>
          <P variant="base" className="p-8">
            {description}
          </P>
        </Divide>
      ) : (
        <Divide variant="y">
          <H level="h3" className="text-center m-2 sm:m-4">
            {title}
          </H>
          <P variant="base" className="p-8">
            {description}
          </P>
        </Divide>
      )}
    </Card>
  </li>
)

export const Talks = () => (
  <>
    <SectionHeading
      variant="simple"
      className="mt-12"
      id="talks"
    >
      <H level="h3">Talks</H>
    </SectionHeading>
    <ul role="list" className={classes.list}>
      {map(toTalk)(talks)}
    </ul>
  </>
)
