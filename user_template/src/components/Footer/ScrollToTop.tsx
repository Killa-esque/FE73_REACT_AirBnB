import React, { useEffect, useState } from 'react'
import { CaretUpOutlined } from '@ant-design/icons';

type Props = {}

const ScrollToTop = (props: Props) => {

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <CaretUpOutlined
          className="icon-position icon-style"
          onClick={goToTop}
        />
      )}{" "}
    </div>
  )
}

export default ScrollToTop
