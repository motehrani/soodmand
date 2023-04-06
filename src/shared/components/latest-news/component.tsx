import { Col } from 'reactstrap'

export const LatestNews = () => {
  return (
    <Col className="latest-news" xxl="3" xl="3" lg="6" md="6" sm="6" xs="6">
      <div className="news">
        <div className="news-picture">
          <button>اخبار الکترونیک</button>
        </div>
        <div className="detail-news">
          <div className="writer">
            <span className="material-icons">person</span>
            <h2>توسط</h2>
            <h2 className="via">ادمین</h2>
          </div>
          <div className="time">
            <span className="material-icons">date_range</span>
            <h2> جولای 9 و 2022</h2>
          </div>
        </div>
        <h2>بزرگترین حراجی سال 2022</h2>
        <h2 className="description">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از شرو ور
        </h2>
      </div>
    </Col>
  )
}
