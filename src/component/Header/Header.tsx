import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import NvidiaLogo from "../../svg/NvidiaLogo";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
/*-----------------------------------------*/
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import ShoppingCart from "../../svg/ShoppingCart";
/*-----------------------------------------*/
const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
  /*-----------------------------------------*/
  const shoppingCartLength = useAppSelector(
    (state) => state.shoppingCartProductReducer.shoppingCartProducts
  );
  /*-----------------------------------------*/
  let header = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setIsMobile(false);
    }
    if (header.current) {
      setHeaderHeight(header.current.offsetHeight);
    }
  }, []);
  /*-----------------------------------------*/
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });
  const handleEventNvidia = () => {
    setBurgerActive(false);
  };
  /*-----------------------------------------*/
  return (
    <div className="header" ref={header}>
      <div className="header-container">
        <Link
          to="/nvidia"
          className="header-container-img"
          onClick={handleEventNvidia}
        >
          <NvidiaLogo />
        </Link>
        {isMobile ? (
          <div className="header-container-icon">
            <Link
              to="/shopping"
              className="header-container-shopping-cart"
              onClick={handleEventNvidia}
            >
              <ShoppingCart />
              {shoppingCartLength.length >= 1 && (
                <p>{shoppingCartLength.length}</p>
              )}
            </Link>
            <HeaderBurger
              headerHeight={headerHeight}
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
            />
          </div>
        ) : (
          <HeaderLinks />
        )}
      </div>
    </div>
  );
};

export default Header;
