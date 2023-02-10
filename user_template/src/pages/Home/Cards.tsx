import { Image } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { ViTriViewModel } from '../../models/ViTriModel'
import { motion } from 'framer-motion'

type Props = {
  data: ViTriViewModel[],
  title: string,
  handleShowAll: () => void
}

export interface styleProps {
  length: number
}

const Cards = ({ title, data, handleShowAll }: Props) => {
  return (
    <CardsSection length={data.length}>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
        <motion.button whileHover={{ scale: 0.9 }} onClick={handleShowAll} className="title btn">Show All</motion.button>
      </div>
      <div className="cards justify-content-center">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="img">
              <Image
                width={128}
                height={128}
                src={item.hinhAnh}
                style={{ objectFit: 'cover' }}
                className="shadow"
              />
              <Image
                width={256}
                height={256}
                src={item.hinhAnh}
              />
            </div>
            <span>
              <h3 className='text-center' style={{ fontFamily: "'Nunito', sans-serif", fontWeight: '700', fontSize: '1.2rem', padding: '0', margin: 0 }}>{item.tinhThanh}</h3>
            </span>
            <span style={{ padding: 0, margin: 0 }}>
              <h3 className='text-center' style={{ fontFamily: "'Nunito', sans-serif", fontWeight: '600', fontSize: '0.8rem', padding: '0', margin: 0 }}>{item.tenViTri}</h3>
            </span>
          </div>
        ))}
      </div>
    </CardsSection>
  )
}

export default Cards
// grid-template-columns: repeat(${(props: styleProps) => props.length}, 1fr);
const CardsSection = styled.section`
  .cards {
    font-family: 'Nunito', sans-serif !important;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    margin-bottom: -1.5rem;
    padding: 1.5rem 0;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background: transparent;
    span {
      margin-top: 0.75rem;

      h3 {
        font-size: 1.25rem;
        font-family: Nunito Sans,sans-serif;
        color: #2e2e48;
        line-height: 1.5;
        -webkit-tap-highlight-color: transparent;
        font-size: 1rem;
        text-transform : capitalize;
      }
    }
    img {
      border-radius: 1rem;
      width: 100%;
      transition: all 0.2s;
    }
    &:hover img {
      transform: scale(0.95);
      border-radius: 1rem;

    }

    .img {
      position: relative;
      & > div:first-child {
        position: absolute !important;
        overflow: visible !important;
        width: 100%;
      }
      & > div {
        width: 100%;
      }
    }
    .shadow {
      border-radius: 1rem;
      position: absolute;
      filter: blur(1rem) brightness(80%);
      transform: translateY(0.5rem) scaleX(0.9);
      z-index: -1;
      opacity: 0.6;
    }
  }

  @media (max-width: 36rem) {
    .cards {
      grid-template-columns: repeat(${(props: styleProps) => props.length}, 80%);
      grid-template-rows: 1fr;
      overflow: scroll;
      margin: 0 -1.5rem -1.5rem -1.5rem;
      padding: 1.5rem;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 1.5rem;
    }
    .card {
      scroll-snap-align: start;

      span {
        margin-top: 0.5rem;
        h3 {
          line-height: 1.3;
          color: var(--dark);
        }
      }
    }
    .card:last-of-type {
      margin-right: 10rem;
    }
    .card:last-of-type {
      border-right: 1.5rem solid transparent;
      width: calc(100% + 1.5rem);
    }
  }
  .ant-image-mask{
    border-radius: 1rem;
  }
`;
