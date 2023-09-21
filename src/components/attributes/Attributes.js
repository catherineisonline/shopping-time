import React, { useState } from "react";
import "./attributes.css"

const Attributes = ({ attribute, handleSelectedAttributes, className }) => {
  const [selectedAttribute, setSelectedAttribute] = useState("");

  return (
    <section className={className}>
      <section className="buttons">
        <h3>{attribute.id}:</h3>
        {attribute?.items?.map((item) => (
          <section
            style={
              selectedAttribute === item.value && attribute.id === "Color"
                ? { border: "2px solid  rgb(240, 97, 97)" }
                : null}
            key={item.id}
            onClick={() => handleSelectedAttributes(attribute.id, item.value)}>
            {attribute.id === "Color" ? (
              <button
                className="attribute-button color-attribute"
                onClick={() => setSelectedAttribute(item.value)}
                style={{
                  backgroundColor: `${item.value}`,
                  border: `1px solid ${item.value}`
                }}>C</button>
            ) : (
              <button
                className="attribute-button"
                onClick={() => setSelectedAttribute(item.value)}
                style={selectedAttribute === item.value || item.isSelected === true
                  ? {
                    background: "black",
                    color: "white"
                  }
                  : null
                }>{item.value}</button>
            )}
          </section>
        ))}
      </section>
    </section>
  );
}

export default Attributes;
