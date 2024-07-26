import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Banner, Center, Link } from 'library/components'
import { H } from 'library/typography'

export const TopBanner = () => {
  return (
    <Banner variant="glow" className="h-20">
      <Link
        target="_blank"
        href="https://github.com/Zerfette/tailwind-ts-nx/tree/main/packages/zerf.dev"
        variant="basic"
      >
        <Center>
          <H level="h4" className="mr-2">
            Check out this site on GitHub.
          </H>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
          />
        </Center>
      </Link>
    </Banner>
  )
}
