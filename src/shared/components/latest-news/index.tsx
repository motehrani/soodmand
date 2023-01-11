import { Row } from 'reactstrap'
import { LatestNews } from './component'

export const TheNews = () => {
  return (
    <Row>
      <div className="the-news">
        <LatestNews />
        <LatestNews />
        <LatestNews />
      </div>
    </Row>
  )
}
