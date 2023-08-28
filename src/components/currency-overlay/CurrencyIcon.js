import React, { useEffect, useRef, useState } from "react";
import CurrencyOverlay from "./CurrencyOverlay.js";
import "./currency-overlay.css"

const CurrencyIcon = ({
  selectedCurrency,
  allCurrencies,
  changeCurrency }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const currencyIcon = useRef(null);

  const toggleCurrencyMenu = () => {
    setDropdownMenu(!dropdownMenu)
  };
  const handleOutsideClick = (e) => {
    if (currencyIcon.current && !currencyIcon.current.contains(e.target)) {
      setDropdownMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <section
      onClick={toggleCurrencyMenu}
      className="initial-currency"
      ref={currencyIcon}
    >
      <p>
        {selectedCurrency}{" "}
        <span
          style={
            dropdownMenu === false ? null : { transform: "rotate(180deg)" }
          }
          className="arrow-icon"
        >
          ⌄
        </span>
      </p>
      {dropdownMenu && (
        <CurrencyOverlay
          allCurrencies={allCurrencies}
          changeCurrency={changeCurrency}
          dropdownMenu={dropdownMenu}
          toggleCurrencyMenu={toggleCurrencyMenu}
        />
      )}
    </section>
  );
}


export default CurrencyIcon;