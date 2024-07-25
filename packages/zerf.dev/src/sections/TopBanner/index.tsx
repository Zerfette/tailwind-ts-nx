import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Banner, Center, Link } from 'library/components'
import { Heading } from 'library/typography'

export const TopBanner = () => {
  return (
    <Banner variant="glow" className="h-20">
      <Link
        target="_blank"
        href="https://github.com/Zerfette/zerf.dev"
        variant="basic"
      >
        <Center>
          <Heading level="h4" className="mr-2">
            Check out this site on GitHub.
          </Heading>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
          />
        </Center>
      </Link>
    </Banner>
  )
}
