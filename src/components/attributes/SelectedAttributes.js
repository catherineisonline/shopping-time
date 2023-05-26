import React from "react";

export default class SelectedAttributes extends React.Component {
  constructor() {
    super();
    this.state = {
      existingAttributes: [],
      selectedAttributes: [],
    };
  }
  existingAttr = async () => {
    await this.props.attribute.items.map((item) => {
      return this.setState({ existingAttributes: item.value });
    });
  };
  userSelectedAttr = async () => {
    await this.props.userSelectedAttributes.map((item) => {
      return this.setState({ selectedAttributes: item.attributeValue });
    });
  };

  FindTragetAttr = async () => {
    await this.props.attribute.items.forEach((existingAttribute) => {
      // eslint-disable-next-line array-callback-return
      this.props.userSelectedAttributes.map((selectedAttribute) => {
        //INSERT USER SELECTED VALUE INTO EXISTING ATTRS
        if (this.props.attribute.id === selectedAttribute.attributeId) {
          existingAttribute.selectedValue = selectedAttribute.attributeValue;
        }
        //COMPARE INSERTED/SELECTED VALUE OF EXISTING ATTRS
        if (existingAttribute.selectedValue === existingAttribute.value) {
          existingAttribute.isSelected = true;
        }
      });
    });
  };

  componentDidMount() {
    this.userSelectedAttr();
    this.existingAttr();
    this.FindTragetAttr();
  }
  render() {
    const { attribute, className } = this.props;
    return (
      <section className={className}>
        <h3>{attribute.id}:</h3>
        <section className="buttons">
          {attribute?.items?.map((item) => (
            <section
              key={item.id}
              className={
                attribute.id === "Color" && item.isSelected
                  ? "selected-color-box-section"
                  : "unselected-color-box-section"
              }
            >
              {attribute.id === "Color" ? (
                <button
                  className={
                    item.isSelected
                      ? "selected-color-box"
                      : "unselected-color-box"
                  }
                  style={{ backgroundColor: `${item.value}` }}
                ></button>
              ) : (
                <button
                  className={
                    item.isSelected
                      ? "selected-attr-box"
                      : "unselected-attr-box"
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
