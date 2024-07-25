import { Header } from 'library/components'
import { Heading } from 'library/typography'
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
      <div className="p-6 sm:p-12">
        <Header variant="simple">
          <Heading level="h1">Sarah Renfro</Heading>
          <Heading level="h2" className="my-6 max-w-lg">
            Elevating User Experience with Precision and
            Creativity
          </Heading>
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
