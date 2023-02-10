import React from 'react'
import { PhongViewModel } from '../../models/PhongViewModel'
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ViTriViewModel } from '../../models/ViTriModel';
import '../../assets/css/home.css'

type Props = {
  position: ViTriViewModel;
}


const { Meta } = Card;

const CardHotel = ({ position }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      size='small'
      hoverable
      style={{
        width: 200,
        height: 50,
        backgroundImage: `
        linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${position.hinhAnh})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#fff',
        backgroundPosition: 'top',
        position: 'relative',
        borderRadius: '15px',
        border: 'none'

      }}
      cover={
        <div className='text-center h-100' style={{ whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h4 className='fw-bold' style={{ fontSize: '18px', color: '#3498db', fontWeight: '300', margin: '0', textTransform: 'capitalize' }}>{position.tenViTri.length > 10 ? position.tenViTri.substring(0, 10) + '...' : position.tenViTri}</h4>
          <h5 className='' style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4.5px' }}>{position.tinhThanh.length > 10 ? position.tinhThanh.substring(0, 10) + '...' : position.tinhThanh}</h5>
        </div >
      }
    >
    </Card >

  )
}

export default CardHotel
