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
import { H } from 'library/typography'
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
    <Card variant="with-shadow" className="group m-6" >
      <Divide variant="y">
        <Center className="flex flex-row sm:flex-col">
          <img
            alt={title}
            src={imgSrc}
            className="m-4 h-8 sm:mx-auto sm:h-24 group-hover:animate-spin"
          />
          <H level="h3" className="text-center m-4">
            {title}
          </H>
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
              <H level="h4">Repo</H>
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
              <H level="h4" className="mr-2">
                Site
              </H>
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
      <H level="h3">Projects</H>
    </SectionHeading>
    <ul role="list" className={classes.list}>
      {map(toProject)(projects)}
    </ul>
  </>
)
