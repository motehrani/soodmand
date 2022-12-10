import Image from 'next/image'

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div>
        <div className="offers">
          <span className="material-icons">expand_more</span>
          <h5>پیشنهاد شگفت انگیز</h5>
          <Image src="/svg/discount2.svg" alt="%" width={25} height={25} />
        </div>

        <div className="search-box">
          <span className="material-icons">search</span>
          <input type="text" name="" placeholder="جستجوی محصولات..." />
        </div>

        <div className="grouping">
          <span className="material-icons">expand_more</span>
          <h5>دسته بندی</h5>
          <span className="material-icons">list</span>
        </div>
      </div>
    </div>
  )
}
