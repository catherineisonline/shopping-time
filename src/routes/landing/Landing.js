import React from "react";
import { Link } from "react-router-dom";
import HeroVideo from '../../assets/images/landing-images/hero-video.mp4'
import "./landing.css"

export default class Landing extends React.Component {
  render() {
    const { changeCategory } = this.props;
    return (
      <main className="landing">
        <article className="hero">
          <h2>Building a better <span>you!</span></h2>
          <video autoPlay loop muted playsInline>
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </article>
        <article className="grid">
          <section className="grid-one">
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
          <section to="" className="grid-two">
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
          <section to="" className="grid-three">
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
          <section to="" className="grid-four">
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
          <section className="grid-five">
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
