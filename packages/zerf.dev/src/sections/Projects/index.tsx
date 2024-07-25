import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { map } from 'fp-ts/lib/Array'
import {
  Card,
  Center,
  Divide,
  Link,
  SectionHeading,
} from 'library/components'
import { Heading } from 'library/typography'
import { projects } from './model'
import classes from './style.module.css'
import { Project } from './types'

const toProject = ({
  title,
  imgSrc,
  github,
  website,
}: Project) => (
  <li key={title}>
    <Card variant="basic" className="m-6">
      <Divide variant="y">
        <Center className="flex flex-row-reverse sm:flex-col">
          <img
            alt={title}
            src={imgSrc}
            className="m-4 h-8 sm:mx-auto sm:h-24"
          />
          <Heading level="h3" className="text-center m-4">
            {title}
          </Heading>
        </Center>
        <Divide variant="x">
          <Link
            href={github}
            target="_blank"
            variant="button"
            className="flex-grow p-2"
          >
            <Center>
              <img
                src="github-mark.svg"
                className="w-4 sm:w-5 mr-2"
              />
              <Heading level="h4">GitHub</Heading>
            </Center>
          </Link>
          <Link
            href={website}
            target="_blank"
            variant="button"
            className="flex-grow p-2"
          >
            <Center>
              <FontAwesomeIcon
                icon={faGlobe}
                className="mr-2 w-4 sm:w-5"
              />
              <Heading level="h4" className="mr-2">
                Website
              </Heading>
            </Center>
          </Link>
        </Divide>
      </Divide>
    </Card>
  </li>
)

export const Projects = () => (
  <>
    <SectionHeading
      variant="simple"
      className="mt-12"
      id="projects"
    >
      <Heading level="h3">Projects</Heading>
    </SectionHeading>
    <ul role="list" className={classes.list}>
      {map(toProject)(projects)}
    </ul>
  </>
)