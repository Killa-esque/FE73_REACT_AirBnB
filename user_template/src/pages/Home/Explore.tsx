import { Image } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { ViTriViewModel } from '../../models/ViTriModel';
import { Pagination as AntdPagination } from 'antd';

type Props = {
  posPagination: ViTriViewModel[],
  setPageNumber: React.Dispatch<React.SetStateAction<any>>,
  pageNumber: number,
  productPerPage: number,
  totalLength: number,
  handleFilter: (desProvince: string) => void
}

const Explore = ({ posPagination, pageNumber, productPerPage, totalLength, setPageNumber, handleFilter }: Props) => {
  return (
    <ExploreSection>
      <h2>Explore nearby</h2>
      <div className="items mb-3">
        {posPagination.map((item, index) => (
          <div key={index} className="item" onClick={() => handleFilter(item.tinhThanh)}>
            <div className="img">
              <Image
                width={64}
                height={64}
                alt={item.tinhThanh}
                src={item.hinhAnh}
                className="shadow"
              />
              <Image
                width={128}
                height={128}
                alt={item.tinhThanh}
                src={item.hinhAnh}
              />
            </div>
            <span>
              <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: '600', fontSize: '1.2rem' }}>{item.tinhThanh}</h3>
              <p>3-hour drive</p>
            </span>
          </div>
        ))}
      </div>
      <AntdPagination defaultCurrent={pageNumber} size="small" pageSize={productPerPage} total={totalLength} onChange={(value) => {
        setPageNumber(value)
      }} />
    </ExploreSection>
  )
}

export default Explore


const ExploreSection = styled.section`
  .items {
    font-family: 'Nunito', sans-serif;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(239px, 1fr));
    gap: 3.5rem;
    margin-bottom: -1.5rem;
    padding: 1.5rem 0;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
  }
  .item {
    display: flex;
    align-items: center;
    border-radius: 1rem;
    transition: all 0.2s;
    cursor: pointer;
    span {
      padding: 0 1.5rem;
      white-space: nowrap;
      transition: padding 0.2s;
      letter-spacing: 2px;
      h3{
        text-transform: capitalize;
      }
    }
    .img {
      position: relative;
      width: 90%;
      height: 90%;
      object-fit: contain;
      img {
        border-radius: 1rem;
        transition: transform 0.2s;
        width: 90%;
      }
      & > div:first-child {
        position: absolute !important;
        overflow: visible !important;
      }
      & > div {
        width: 100%;
      }
      img.shadow {
        filter: blur(0.5rem) brightness(80%);
        transform: translateY(0.25rem) scaleX(0.9);
        z-index: -1;
        opacity: 0.6;
      }
    }
    &:hover {
      background: var(--white);
      box-shadow: 0 0.25rem 0.5rem #48484810;

      img.shadow {
        transform: translateY(0) scale(0);
      }
      img {
        transform: scale(0.8);
      }
      span {
        padding: 0 2.5rem 0 0.5rem;
      }
    }
  }
  @media (max-width: 36rem) {
    .items {
      grid-template-columns: repeat(4, 1fr);
      overflow: scroll;
      margin: 0 -1.5rem -1.5rem -1.5rem;
      padding: 1.5rem;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 1.5rem;
    }
    .item {
      scroll-snap-align: start;
    }
    .item:last-of-type {
      margin-right: 10rem;
    }
  }
`;

