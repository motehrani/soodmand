import { Facility, Slider } from './components'
import { Row } from 'reactstrap'

export const Opening = () => {
  return (
    <div className="opening">
      <Row>
        <Slider
          slides={[
            {
              image: '/img/slider/a.jpg',
              title: 'dastan chie 1',
              description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            },
            {
              image: '/img/slider/b.jpg',
              title: 'dastan chie 2',
              description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            },
            {
              image: '/img/slider/c.jpg',
              title: 'dastan chie 3',
              description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            },
            {
              image: '/img/slider/d.jpg',
              title: 'dastan chie 4',
              description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            },
            {
              image: '/img/slider/e.jpg',
              title: 'dastan chie 5',
              description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            },
          ]}
        />
      </Row>

      <Row>
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
      </Row>
    </div>
  )
}
