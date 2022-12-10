import Image from 'next/image'

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="join">
          <li>عضویت در خبرنامه</li>
          <h6>برای اطلاع از تخفیفات و اخبار روز، عضو خبرنامه ما شوید</h6>
          <div className="input">
            <span className="material-icons">contact_mail</span>
            <input type="text" placeholder="ایمیل را وارد نمایید" />
          </div>
          <li>شبکه های اجتماعی</li>
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

        <div className="contact">
          <li>اطلاعات تماس</li>
          <span className="material-icons">place</span>
          <h6>ایران، خراسان رضوی، مشهد</h6>
          <span className="material-icons">phone_enabled</span>
          <h5>0936 780 0701</h5>
          <span className="material-icons">alternate_email</span>
          <h5>choqok@gmail.com</h5>
        </div>

        <div className="quick-access">
          <li>منوی سریع</li>
          <h6>فروشگاه</h6>
          <h6>پرداخت</h6>
          <h6>سبد خرید</h6>
          <h6>درباره ما</h6>
          <h6>تماس با ما</h6>
        </div>
        <div className="license">
          <li>مجوز ها</li>
          <Image
            alt="license"
            src="/img/license.png"
            width={150}
            height={150}
          ></Image>
        </div>
      </div>
    </footer>
  )
}
