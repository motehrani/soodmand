import { Row } from 'reactstrap'
import { LatestNews } from './component'

export const TheNews = () => {
  return (
    <div className="the-news">
      <Row className="title-row">
        <h2>آخرین اخبار</h2>
        <div className="line"></div>
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
