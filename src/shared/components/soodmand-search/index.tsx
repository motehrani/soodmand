import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { Container, Row, Col, Modal, ModalBody, ModalFooter } from 'reactstrap'

import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { FavLines, BuyBasket } from './components'

export const SoodmandSearch = () => {
  const { theme, setTheme } = useTheme()

  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    if (checked === false) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [nestedModal, setNestedModal] = useState(false)
  const [closeAll, setCloseAll] = useState(false)
  const unmountOnClose = true
  const toggle = () => setModal(!modal)
  const toggle1 = () => setModal1(!modal1)
  const toggle2 = () => setModal2(!modal2)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal)
    setCloseAll(true)
  }

  return (
    <div className="search-bar">
      <Container>
        <Row>
          <Col xxl="10" xl="10" lg="10" md="10" sm="10" xs="10">
            <div className="soodmand-search">
              <Link href="/" className="logo">
                <Image
                  src="/svg/logo.svg"
                  draggable="false"
                  alt="LOGO"
                  width={100}
                  height={50}
                />
              </Link>
              <div className="theme">
                <DarkModeSwitch
                  style={{ marginBottom: '2rem' }}
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={40}
                />
              </div>
              <div className="search-box">
                <span className="material-icons">search</span>
                <input type="text" name="" placeholder="جستجوی محصولات..." />
              </div>
            </div>
          </Col>
          <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
            <div className="icon">
              <Image
                src="/svg/book.svg"
                alt="LOGO"
                width={30}
                height={30}
                onClick={toggle2}
              />
              <Modal
                isOpen={modal2}
                toggle={toggle2}
                unmountOnClose={unmountOnClose}
                className="modal-basket"
              >
                <ModalBody>
                  <BuyBasket />
                  <BuyBasket />
                </ModalBody>
                <ModalFooter>
                  <button>برو به صفحه پرداخت</button>
                </ModalFooter>
              </Modal>
              <Image
                src="/svg/heart.svg"
                alt="LOGO"
                width={30}
                height={30}
                onClick={toggle1}
              />
              <Modal
                isOpen={modal1}
                toggle={toggle1}
                unmountOnClose={unmountOnClose}
                className="modal-fav"
              >
                <ModalBody>
                  <FavLines />
                  <FavLines />
                  <FavLines />
                </ModalBody>
                <ModalFooter>
                  <button>باز کردن هر کدام از محصولات در صفحه مجزا</button>
                </ModalFooter>
              </Modal>
              <Image
                src="/svg/person.svg"
                alt="LOGO"
                width={30}
                height={30}
                onClick={toggle}
              />
              <Modal
                isOpen={modal}
                toggle={toggle}
                unmountOnClose={unmountOnClose}
                className="sign"
              >
                <ModalBody>
                  <div className="hdr">
                    <div></div>
                    <div className="logo">
                      <img src="/svg/logo.svg" alt="" />
                    </div>
                    <div className="back">
                      <img src="/svg/test/arrow/left.svg" alt="" />
                    </div>
                  </div>
                  <h2 className="sign-in">ورود | ثبت نام</h2>

                  <h2 className="inter">
                    لطفا شماره تلفن یا ایمیل خود وارد کنید
                  </h2>
                  <div className="input">
                    <input type="text" />
                  </div>
                  <div className="continue">
                    <button onClick={toggleNested}>ادامه</button>
                  </div>
                  <Modal
                    isOpen={nestedModal}
                    toggle={toggleNested}
                    onClosed={closeAll ? toggle : undefined}
                    unmountOnClose={unmountOnClose}
                    className="verification"
                  >
                    <ModalBody>
                      <h2 className="inter">
                        کد تایید 6 رقمی که به شماره یا ایمیلتان ارسال شده را
                        وارد کنید.
                      </h2>
                      <div className="input">
                        <input type="text" />
                      </div>
                      <div className="continue">
                        <button onClick={toggleAll}>ادامه</button>
                        <button className="change" onClick={toggleNested}>
                          ویرایش شماره یا ایمیل
                        </button>
                      </div>
                    </ModalBody>
                  </Modal>
                </ModalBody>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
