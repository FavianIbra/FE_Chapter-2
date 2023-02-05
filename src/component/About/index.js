import React, { Component } from 'react';
import video from '../asset/video.mp4';

class About extends Component {
  render() {
    return (
      <section className="video" id='about'>
        <div className="max-width">
          <div className="video-content">
            <div className="column left">
              <video width="480" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="column right">
              <div className="text">
                <span>Intro dulu dong</span>
              </div>
              <p>Halo sobat duar! Selamat datang di website kami cieelah. Disini sobat duar bakal nemuin funfact dan biodata diri kami dari Kelompok 2.</p>
              <a href="#video">Dilihat ya!</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
