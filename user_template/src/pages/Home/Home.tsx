import React, { useEffect, useRef, useState } from 'react'

// import required modules
import { Swiper as SwiperType, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import "../../assets/css/swiper-style.css";
import '../../assets/css/home.css'


import { DispatchType, RootState } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosition, getPosiTionPaginate } from '../../redux/reducers/positionReducer';
import Carousel from './CarouselImport';

// Antd
import { Pagination as AntdPagination } from 'antd';

// Home Component
import Explore from './Explore';
import Banner from './Banner';
import Cards from './Cards';
import { PhongViewModel } from '../../models/PhongViewModel';
import { ViTriViewModel } from '../../models/ViTriModel';


const swipeStyles: React.CSSProperties = {
  alignItems: 'center',
  borderBottom: '2px solid transparent',
  color: '#8f8989',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '18px',
  justifyContent: 'center',
  padding: '10px',
  textAlign: 'center',
  transition: 'all .3s',
}
const allSwiper: React.CSSProperties = {
  width: 'calc(100% / 9)'
}


type Props = {}

const Home = (props: Props) => {

  const swiperRef = useRef<SwiperType>();

  // Init dispatch instance
  const dispatch: DispatchType = useDispatch();

  // Get from redux
  const { allPosition, posPagination } = useSelector((state: RootState) => state.positionReducer)
  // State components
  const [pos, setPos] = useState<ViTriViewModel[]>(allPosition)

  // Trang hiện tại 
  const [pageNumber, setPageNumber] = useState<number>(2)

  // Số lượng dữ liệu ở mỗi page
  const productPerPage = 8;

  // Page Count
  const pageCount = Math.ceil(allPosition.length / productPerPage);
  console.log('pageCount', pageCount)

  const handleFilter = (desProvince: string) => {
    const renderPosById = allPosition.filter(item => item.tinhThanh.toLowerCase().includes(desProvince.toLowerCase()))
    setPos(renderPosById)
  }

  const handleShowAll = () => {
    setPos(allPosition);
  }

  useEffect(() => {
    dispatch(getPosiTionPaginate(pageNumber, productPerPage));
  }, [pageNumber]);

  useEffect(() => {
    dispatch(getAllPosition());
  }, []);


  return (
    <div className='w-100'>
      <section className="carousel" style={{ margin: 0, padding: 0, width: '100%' }}>
        <div className="overlay"></div>
        <Carousel />
      </section>

      {/* Icon */}
      <section className=''>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Nice Viewing</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Hostel</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Homestay</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Lanscaping</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Nice Viewing</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Nice Viewing</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Nice Viewing</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" style={{ objectFit: 'contain', width: '50px' }} />
            <span>Nice Viewing</span>
          </SwiperSlide>
          <SwiperSlide className='d-flex flex-column' style={swipeStyles}>
            <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" style={{ objectFit: 'cover', width: '50px' }} />
            <span>Nice Viewing</span>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Nearby */}
      <section>
        <Explore posPagination={posPagination} setPageNumber={setPageNumber} pageNumber={pageNumber} productPerPage={productPerPage} totalLength={allPosition.length} handleFilter={handleFilter} />
      </section>

      {/* Banner */}
      <section>
        <Banner />
      </section>

      {/* Anywhere */}
      <section>
        <Cards data={pos} title={'live anywhere'} handleShowAll={handleShowAll} />
      </section>
    </div >
  )
}

export default Home


