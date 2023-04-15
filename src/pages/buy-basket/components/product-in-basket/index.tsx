import { Increase } from '../increase'

export const ProductInBasket = () => {
  return (
    <div>
      <div className="number-of-product">
        <div className="product">
          <div className="picture">
            <img src="/img/product.jpg" alt="" />
          </div>
          <div className="detail">
            <div className="name-and-id">
              <h2 className="name">شیرآلات نقره ای خم دار</h2>
              <h2 className="id">(کد محصول B7DFH239)</h2>
            </div>
            <div className="color-size-weight">
              <div className="color">
                <h2 className="title">رنگ:</h2>
                <h2 className="description"></h2>
              </div>
              <div className="size">
                <h2 className="title">سایز:</h2>
                <h2 className="description"></h2>
              </div>
              <div className="weight">
                <h2 className="title">وزن:</h2>
                <h2 className="description">250 گرم</h2>
              </div>
            </div>
            <div className="price">
              <h2>420.000 تومان</h2>
            </div>
          </div>
        </div>
        <div className="delete-number">
          <Increase />
          <div className="delete">
            <span className="material-icons">delete_forever</span>
            <span className="material-icons fav">favorite</span>
          </div>
        </div>
      </div>
    </div>
  )
}
