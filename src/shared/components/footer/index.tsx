import Image from 'next/image'
import { Col, Row, Container } from 'reactstrap'

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <div className="footer">
            <Col xxl="4" xl="4" lg="4" md="4" sm="4" xs="4">
              <div className="contact">
                <li>اطلاعات تماس</li>
                <div>
                  <span className="material-icons">place</span>
                  <h2>ایران، خراسان رضوی، مشهد</h2>
                </div>
                <div className="phone">
                  <h2>0936 780 0701</h2>
                  <span className="material-icons">phone_enabled</span>
                </div>
                <div className="mail">
                  <span className="material-icons">alternate_email</span>
                  <h2>choqok@gmail.com</h2>
                </div>
              </div>
            </Col>
            <Col xxl="4" xl="4" lg="4" md="4" sm="4" xs="4">
              <div className="join">
                <li>شبکه های اجتماعی</li>
                <div className="sm">
                  <Image
                    alt="telegram"
                    src="/svg/sm/telegram.svg"
                    width={20}
                    height={20}
                  ></Image>
                  <Image
                    alt="telegram"
                    src="/svg/sm/instagram.svg"
                    width={20}
                    height={20}
                  ></Image>
                  <Image
                    alt="telegram"
                    src="/svg/sm/twitter.svg"
                    width={20}
                    height={20}
                  ></Image>
                  <Image
                    alt="telegram"
                    src="/svg/sm/facebook.svg"
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </div>
            </Col>
            <Col xxl="4" xl="4" lg="4" md="4" sm="4" xs="4">
              <div className="license">
                <li>مجوز ها</li>
                <div className="license-images">
                  <Image
                    alt="license"
                    src="/img/license.png"
                    width={150}
                    height={150}
                  ></Image>
                  <Image
                    alt="license"
                    src="/svg/wizarding-world.svg"
                    width={150}
                    height={150}
                  ></Image>
                </div>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="policy-row">
          <div className="line"></div>
          <div className="privacy-policy">
            <h2>
              کلیه حقوق مادی و معنوی این سایت محفوظ میباشد و هر گونه کپی برداری،
              شامل پیگرد قانونی میباشد.
            </h2>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
