import React, { useRef, useState } from 'react'
// import required modules
import { Carousel } from 'antd';
import styled from 'styled-components';

type Props = {}

const contentStyle: React.CSSProperties = {
  height: '60vh',
  color: '#fff',
  lineHeight: '60vh',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'

};

const CarouselImport = (props: Props) => {

  const videoRef = useRef(null);

  const video = require("../../assets/video/carousel.webm")
  return (
    <Carousel autoplay style={{ width: '100%' }}>
      <Video autoPlay muted loop src={video} ref={videoRef} />
    </Carousel>
  )
}

export default CarouselImport


const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 800px;
`;
