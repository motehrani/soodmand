import { CatCard } from './component'
import { Row, Col } from 'reactstrap'

export const CatCards = () => {
  return (
    <div className="cat-cards">
      <Row>
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
      </Row>
    </div>
  )
}
