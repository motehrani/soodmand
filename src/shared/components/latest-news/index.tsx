import { Row } from 'reactstrap'
import { LatestNews } from './component'

export const TheNews = () => {
  return (
    <div className="the-news">
      <Row className="title-row">
        <h1>آخرین اخبار</h1>
      </Row>
      <Row className="news-row">
        <LatestNews />
        <LatestNews />
        <LatestNews />
        <LatestNews />
      </Row>
    </div>
  )
}
