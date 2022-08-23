import CardTimeLine from '../components/CardTimeline'
import Heading from '../components/Heading'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const timeline = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  console.log(data)

  return (
    <>
      <Navigation />
      <IndexMain className="timeline">
        <Heading
          title="timeline"
          text="This is where I play. Curabitur odio pellentesque rhoncus dignissim dolor, morbi imperdiet. Pretium lectus sed a euismod nisl a tempus amet, ipsum."
        />
        {data.map((item: any) => {
          return (
            <CardTimeLine
              start={item.start}
              heading={item.title}
              desc={item.desc}
              date={item.date}
            />
          )
        })}
      </IndexMain>
    </>
  )
}

export default timeline

export async function getServerSideProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/timeline`)
  const dbs = await res.json()

  if (!dbs) {
    return {
      notfound: true,
    }
  }

  return {
    props: { dbs },
  }
}
