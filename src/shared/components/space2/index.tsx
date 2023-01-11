import Image from 'next/image'
import { Row, Col } from 'reactstrap'

export const Space2 = () => {
  return (
    <Row className="space">
      <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
        <div>
          <Image
            alt="beauty"
            src="/img/wide-5120-1440.jpg"
            width={1366}
            height={485}
          />
        </div>
      </Col>
    </Row>
  )
}
