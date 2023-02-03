import React, { Component } from 'react';
import '../../css/style.css';
import { tabbing } from './pages';
import klik from './tabbing';
import pop from './modal';


class Team extends Component {
  render() {
    return (
      <section className="team" id="team">
        <div className="max-width">
          <h2 className="heading-h2">Manusia Kelompok 2</h2>
          <div className="tab-container" onLoad={klik}>
            <div className="tab-filter-container">
              <li className="filter-btn active" data-tab="ahmad">
                Anggota 1
              </li>
              <li className="filter-btn" data-tab="ibra">
                Anggota 2
              </li>
              <li className="filter-btn" data-tab="arum">
                Anggota 3
              </li>
              <li className="filter-btn" data-tab="destia">
                Anggota 4
              </li>
            </div>
            <div className="tab-filter-item-container">
              {tabbing.map((item, index) => {
                return (
                  <div className={item.cName} key={index}>
                    <div className="tab-content-left">
                      <img src={item.img} alt={item.alt} className="tab-img" />
                    </div>
                    <div className="tab-content-right">
                      <h1 className="tab-heading">{item.Name}</h1>
                      <p className="paragraph">
                        {item.bio}
                      </p>
                      <div className="wrapper">
                        <button className="main_btn btn-more" onClick={pop}>
                          Fun Fact
                        </button>
                        <div className="project_wrap">
                          <div className="shadow close_btn"></div>
                          <div className="project">
                            <div className="header">
                              <div className="title">Fun Fact!</div>
                            </div>
                            <div className="container">
                              <div className="body">
                                <div className="project_name_wrap">
                                  <p className="label_title">
                                    Makanan Favorit : <span>{item.makanan}</span> 
                                  </p>
                                  <p className="label_title">
                                    Minuman Favorit : <span>{item.minuman}</span> 
                                  </p>
                                  <p className="label_title">
                                    Warna Favorit : <span>{item.warna}</span> 
                                  </p>
                                </div>
                              </div>
                              <div className="footer">
                                <div className="btn_wrap">
                                  <button className="cancel_btn close_btn">Cancel</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
