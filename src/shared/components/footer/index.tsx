import Image from 'next/image'
import { Col, Row, Container } from 'reactstrap'

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <div className="footer">
            <Col xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
              <div className="contact">
                <li>اطلاعات تماس</li>
                <div className="address">
                  <span className="material-icons">place</span>
                  <h2>ایران، خراسان رضوی، مشهد</h2>
                </div>
                <div className="phone">
                  <span className="material-icons">phone_enabled</span>
                  <h1>0936 780 0701</h1>
                </div>
                <div className="mail">
                  <span className="material-icons">alternate_email</span>
                  <h1>choqok@gmail.com</h1>
                </div>
              </div>
            </Col>
            <Col xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
              <div className="join">
                <li>شبکه های اجتماعی</li>
                <div className="sm">
                  <Image
                    alt="telegram"
                    src="/svg/sm/telegram.svg"
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    alt="telegram"
                    src="/svg/sm/instagram.svg"
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    alt="telegram"
                    src="/svg/sm/twitter.svg"
                    width={25}
                    height={25}
                  ></Image>
                  <Image
                    alt="telegram"
                    src="/svg/sm/facebook.svg"
                    width={25}
                    height={25}
                  ></Image>
                </div>
              </div>
            </Col>
            <Col xxl="3" xl="3" lg="3" md="3" sm="3" xs="3">
              <div className="license">
                <li>مجوز ها</li>
                <Image
                  alt="license"
                  src="/img/license.png"
                  width={150}
                  height={150}
                ></Image>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
