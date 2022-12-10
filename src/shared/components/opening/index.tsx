import Link from 'next/link'
import Image from 'next/image'

import { Facilities } from './components'

export const Opening = () => {
  return (
    <div className="opening">
      <div>
        <Link href="/">
          <Image
            alt="opening"
            src="/img/opening.jpg"
            width={1366}
            height={653}
          />
        </Link>
      </div>
      <div className="facilities">
        <Facilities
          title="ارسال رایگان"
          description="برای سفارشات بالای 100 تومان"
          image="/svg/truck.svg"
        />
        <Facilities
          title="پشتیبانی 7/24"
          description="خرید با متخصص"
          image="/svg/hours.svg"
        />
        <Facilities
          title="بازگشت وجه"
          description="مرجوع رایگان بالای 200 تومان"
          image="/svg/refund.svg"
        />
        <Facilities
          title="پرداخت امن"
          description="محافظت شده توسط پی پل"
          image="/svg/payment.svg"
        />
      </div>
    </div>
  )
}
