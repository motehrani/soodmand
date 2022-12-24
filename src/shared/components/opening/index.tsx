import Link from 'next/link'
import Image from 'next/image'

import { Facility } from './components'

export const Opening = () => {
  return (
    <div className="opening">
      <div>
        <Link href="/" id="opening">
          <Image
            alt="opening"
            src="/img/opening.jpg"
            width={1366}
            height={478}
          />
        </Link>
      </div>
      <div className="facilities">
        <Facility
          title="ارسال رایگان"
          description="برای سفارشات بالای 100 تومان"
          image="/svg/truck.svg"
        />
        <Facility
          title="بازگشت وجه"
          description="مرجوع رایگان بالای 200 تومان"
          image="/svg/refund.svg"
        />
        <Facility
          title="پشتیبانی 7/24"
          description="خرید با متخصص"
          image="/svg/hours.svg"
        />

        <Facility
          title="پرداخت امن"
          description="محافظت شده توسط پی پل"
          image="/svg/payment.svg"
        />
      </div>
    </div>
  )
}
