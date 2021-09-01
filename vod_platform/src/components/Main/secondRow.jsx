import React from "react";

export const SecondRow = () => {
  return (
    <div id='second'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='two_gb'>
              <h2 className='app_title'> Pakiet 20 GB LTE</h2>
              <p className='green'> Promocja </p>
              <div>
                <div>
                  <ul className='list_elements'>
                    <li className='one_element'><i className="fa fa-arrow-right green"> </i> oglądaj filmy w sieci</li>
                    <li className='one_element'><i className="fa fa-arrow-right green"> </i> ściągaj duże pliki</li>
                    <li className='one_element'><i className="fa fa-arrow-right green"> </i> korzystaj z poczty</li>
                    <li className='one_element'><i className="fa fa-arrow-right green"> </i> surfuj swobodnie</li>
                  </ul>
                </div>
              </div>
              <button className='btn-custom'> Kup </button>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='film_expert'>
              <h2 className='app_title'> Nasz support </h2>
              <p className='green'> Propozycje naszego TV maniaka na weekend</p>
              <div className='maniac'>
                <div className='avatar'> </div>
                <div className='proposition_one'> Zobacz co ciekawego znalazł Tomasz
                  <i className="fa fa-chevron-right critic_icons"> </i>
                </div>
                <div className='proposition_two'>
                  <div> Podyskutuj z nim o filmach
                    <i className="fa fa-comments critic_icons" > </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='application_download'>
              <h2 className='app_title'> Aplikacja </h2>
              <p className='green'> Pobierz naszą bezpłatną aplikację </p>
              <i className="fa fa-apple app_icon"> </i>
              <i className="fa fa-windows app_icon"> </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
