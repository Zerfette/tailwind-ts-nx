import { Header } from 'library/components'
import { H } from 'library/typography'
import {
  TopBanner,
  Articles,
  Projects,
  Socials,
  Talks,
} from './sections'

const App = () => {
  return (
    <>
      <TopBanner />
      <div className="animate-fadein p-6 sm:p-12">
        <Header variant="simple">
          <H level="h1">Sarah Renfro</H>
          <H level="h2" className="my-6 max-w-lg">
            Elevating User Experience with Precision and
            Creativity
          </H>
        </Header>
        <Socials />
        <Projects />
        <Talks />
        <Articles />
      </div>
    </>
  )
}

export default App
