import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Health from './Health'
import Business from './Business'
import Sport from './Sport'
import Entertainment from './Entertainment'
import Science from './Science'
import Tech from './Tech'
import Top from './top'

export default class Germany extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Top/>
          </div>
          <div>
            <Health />
          </div>
          <div>
            <Business />
          </div>
          <div>
            <Sport />
          </div>
          <div>
            <Entertainment />
          </div>
          <div>
            <Science />
          </div>
          <div>
            <Tech />
          </div>
        </Slider>
      </div>
    );
  }
}
