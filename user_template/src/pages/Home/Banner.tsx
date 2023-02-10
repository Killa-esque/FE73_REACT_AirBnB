import React from 'react'
import styled from 'styled-components';

type Props = {}

const Banner = (props: Props) => {
  return (
    <BannerSection>
      <span>
        <h2>Not sure where to go? Perfect.</h2>
        <a href="#" className="btn btn-dark">
          {"I'm flexible"}
        </a>
      </span>
    </BannerSection>
  )
}

export default Banner


const BannerSection = styled.section`
  padding: 6rem var(--sidePadding);
  background: url('https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg');
  background-size: contain;
  border-radius: 1rem;
  color: #fff;
  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: var(--maxWidth);
  }
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  .btn.btn-dark {
    --bgcolor: var(--brown);
    color: #fff;
  }

  @media (max-width: 36rem) {
    aspect-ratio: 0.75;
    background: url('https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg');
    background-size: contain;
    background-position: center center;
    span {
      align-items: center;
      text-align: center;
    }
  }
`;
