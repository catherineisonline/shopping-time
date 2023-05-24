import React from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
  render() {
    const { changeCategory } = this.props;
    return (
      <main>
        <article className="landing-hero"></article>
        <article className="landing-grid">
          <section className="div1">
            <Link
              to={`/store/blouses`}
              className="custom-btn grid-button"
              onClick={() => {
                changeCategory("blouses");
              }}
            >
              <span>Blouses</span>
            </Link>
          </section>
          <section to="" className="div2">
            <Link
              to={`/store/jeans`}
              onClick={() => {
                changeCategory("jeans");
              }}
              className="custom-btn grid-button"
            >
              <span> Jeans</span>
            </Link>
          </section>
          <section to="" className="div3">
            <Link
              to={`/store/shoes`}
              onClick={() => {
                changeCategory("shoes");
              }}
              className=" custom-btn grid-button"
            >
              <span> Shoes</span>
            </Link>
          </section>
          <section to="" className="div4">
            <Link
              to={`/store/dresses`}
              onClick={() => {
                changeCategory("dresses");
              }}
              className="custom-btn grid-button"
            >
              <span>Dresses</span>
            </Link>
          </section>
          <section className="div5">
            <Link
              to={`/store/all`}
              onClick={() => {
                changeCategory("all");
              }}
              className="custom-btn grid-button"
            >
              <span>Store</span>
            </Link>
          </section>
        </article>
      </main>
    );
  }
}
