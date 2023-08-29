import React from "react";
import "./attributes.css"

export default class Attributes extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedAttribute: "",
    };
  }

  render() {
    const { attribute, handleSelectedAttributes, className } = this.props;
    const { selectedAttribute } = this.state;

    return (
      <section className={className}>
        <section className="buttons">
          <h3>{attribute.id}:</h3>
          {attribute?.items?.map((item) => (
            <section
              style={
                selectedAttribute === item.value && attribute.id === "Color"
                  ? {
                    border: "2px solid  rgb(240, 97, 97)"
                  }
                  : null
              }
              key={item.id}
              onClick={() => handleSelectedAttributes(attribute.id, item.value)}
            >
              {attribute.id === "Color" ? (
                <button
                  className="attribute-button color-attribute"
                  onClick={() =>
                    this.setState({
                      selectedAttribute: item.value,
                    })
                  }
                  style={{
                    backgroundColor: `${item.value}`,
                    border: `1px solid ${item.value}`
                  }}
                >C</button>
              ) : (
                <button
                  className="attribute-button"
                  onClick={() =>
                    this.setState({
                      selectedAttribute: item.value,
                    })
                  }
                  style={
                    selectedAttribute === item.value || item.isSelected === true
                      ? {
                        background: "black",
                        color: "white"
                      }
                      : null
                  }
                >
                  {item.value}
                </button>
              )}
            </section>
          ))}
        </section>
      </section>
    );
  }
}
