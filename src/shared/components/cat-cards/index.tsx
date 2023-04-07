import { CatCard } from './component'
import { Row, Col } from 'reactstrap'

export const CatCards = () => {
  return (
    <Row className="cat-cards-row">
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
    </Row>
  )
}
