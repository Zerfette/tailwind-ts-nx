import { map } from 'fp-ts/lib/Array'
import {
  Card,
  Center,
  Divide,
  Link,
  SectionHeading,
} from 'library/components'
import { H } from 'library/typography'
import { articles } from './model'
import classes from './style.module.css'
import { Article } from './types'

const toArticle = ({ title, link, imgSrc }: Article) => (
  <li key={title} className="m-6">
    <Card variant="with-shadow">
      <Divide variant="y">
        <img src={imgSrc} className="w-full" />
        <H
          level="h3"
          className="text-center p-2 sm:p-4 h-16 sm:h-24"
        >
          <Link target="_blank" href={link} variant="basic">
            <Center>{title}</Center>
          </Link>
        </H>
      </Divide>
    </Card>
  </li>
)

export const Articles = () => (
  <>
    <SectionHeading
      variant="simple"
      className="mt-12"
      id="articles"
    >
      <H level="h3">Articles</H>
    </SectionHeading>
    <ul role="list" className={classes.list}>
      {map(toArticle)(articles)}
    </ul>
  </>
)
