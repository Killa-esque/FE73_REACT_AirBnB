import React, { useState } from 'react'
// import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';
import '../../assets/css/searchbar.css'
import HeaderComponent from './HeaderComponent';
import { Button, Col, Drawer, Radio, Row, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import type { RadioChangeEvent } from 'antd/es/radio';

type Props = {}

const SearchModal = (props: Props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  // const onChange = (e: RadioChangeEvent) => {
  //   setPlacement(e.target.value);
  // };

  const onClose = () => {
    setOpen(false);
  };
  // const { setVisible, bindings } = useModal();
  return (
    <section className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50 %, -50 %)' }}>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Drawer with extra actions"
        placement={'top'}
        width='100%'
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
      </Drawer>
    </section>
    // <div>
    //   <Button auto autoFocus ripple shadow rounded animated onPress={() => setVisible(true)} css={{ width: '250px', padding: '20px' }}>
    //     <div className="search position-absolute">
    //       <input className="search-txt" type="text" name="" placeholder="Choose location" />
    //       <NavLink className="search-btn" to={'/'} >
    //         <i className="fas fa-search"></i>
    //       </NavLink>
    //     </div>
    //   </Button>
    //   <Modal
    //     scroll={false}
    //     closeButton
    //     fullScreen
    //     autoMargin
    //     css={{ height: '70%', width: '100%' }}
    //     aria-labelledby="modal-title"
    //     aria-describedby="modal-description"
    //     {...bindings}
    //   >
    //     <Modal.Header>
    //       Booking Form
    //     </Modal.Header>
    //     <Modal.Body css={{}}>
    //       <HeaderComponent />
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button flat auto color="error" onPress={() => setVisible(false)}>
    //         Close
    //       </Button>
    //       <Button onPress={() => setVisible(false)}>Agree</Button>
    //     </Modal.Footer>
    //   </Modal>
    // </div >
  );
}

export default SearchModal
