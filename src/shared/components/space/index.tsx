import Image from 'next/image'
import { Col, Row } from 'reactstrap'

export const Space = () => {
  return (
    <Row className="space">
      <Col xxl="6" xl="6" lg="12" md="12" sm="12" xs="12">
        <div>
          <Image src="/img/beauty.jpg" alt="beauty" width={660} height={279} />
        </div>
      </Col>
      <Col xxl="6" xl="6" lg="12" md="12" sm="12" xs="12">
        <div>
          <Image src="/img/beauty2.jpg" alt="beauty" width={660} height={279} />
        </div>
      </Col>
    </Row>
  )
}

export const Space2 = () => {
  return (
    <Row className="space2">
      <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
        <div>
          <Image alt="beauty" src="/img/wide.png" width={1272} height={451} />
        </div>
      </Col>
    </Row>
  )
}

// how to set width and height of an image to fixed ratio
// that always contain the whole parent space?
// because for now i just set the overflow to hidden
