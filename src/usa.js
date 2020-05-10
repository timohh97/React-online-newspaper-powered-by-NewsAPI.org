import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Health from './usa/Health'
import Business from './usa/Business'
import Sport from './usa/Sport'
import Entertainment from './usa/Entertainment'
import Science from './usa/Science'
import Tech from './usa/Tech'
import Top from './usa/top'

export default class Usa extends Component {
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
