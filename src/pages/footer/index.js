import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="max-width">
          <div className="footer-basic">
            <footer>
              <div className="social">
                <a href="https://www.instagram.com/?hl=id">
                  <i className="icon ion-social-instagram"></i>
                </a>
                <a href="https://www.snapchat.com/id-ID">
                  <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="icon ion-social-twitter"></i>
                </a>
                <a href="https://id-id.facebook.com/">
                  <i className="icon ion-social-facebook"></i>
                </a>
              </div>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#home">Home</a>
                </li>
                <li className="list-inline-item">
                  <a href="#video">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#team">Profil</a>
                </li>
              </ul>
              <p className="copyright">@Duarr 2022</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
