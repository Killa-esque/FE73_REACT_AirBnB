import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { PhongViewModel } from '../../models/PhongViewModel';
// import '../../assets/css/ecommerce-category-product.css'

type Props = {
  item: PhongViewModel,
}

const RoomCard = ({ item }: Props) => {
  return (
    <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom hover-overlay"
            >
              <MDBCardImage
                src={item.hinhAnh}
                height={150}
                width={290}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol md="6">
            <h5>{item.tenPhong}</h5>
            <div className="d-flex flex-row">
              <div className="text-danger mb-1 me-2">
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
              </div>
              <span>310</span>
            </div>
            <div className="mt-1 mb-0 text-muted small">
              <span>100% cotton</span>
              <span className="text-primary"> • </span>
              <span>Light weight</span>
              <span className="text-primary"> • </span>
              <span>
                Best finish
                <br />
              </span>
            </div>
            <div className="mb-2 text-muted small">
              <span>Unique design</span>
              <span className="text-primary"> • </span>
              <span>For men</span>
              <span className="text-primary"> • </span>
              <span>
                Casual
                <br />
              </span>
            </div>
            <p className="text-truncate mb-4 mb-md-0">
              {item.moTa}
            </p>
          </MDBCol>
          <MDBCol
            md="6"
            lg="3"
            className="border-sm-start-none border-start"
          >
            <div className="d-flex flex-row align-items-center mb-1">
              <h4 className="mb-1 me-1">${item.giaTien}</h4>
            </div>
            <h6 className="text-success">{item.wifi ? 'Free Wifi' : 'No Wifi'}</h6>
            <div className="d-flex flex-column mt-4">
              <MDBBtn size="sm" style={{ backgroundColor: '#f31260' }}>
                Details
              </MDBBtn>
              <MDBBtn outline size="sm" className="mt-2">
                Add to wish list
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  )
}

export default RoomCard
