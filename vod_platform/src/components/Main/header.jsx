import React from "react";
import ImageSlider from 'ac-react-simple-image-slider';

export const Header = () => {
  const imageData = [
    {
      src: 'http://www.cozadzien.pl/img/zdjecia/depp_1.jpg?1486022503504?1486022503504',
      title: 'Image 1'
    },
    {
      src: 'https://www.wzrost-waga.pl/wp-content/uploads/2019/10/jack-nicholson.jpg',
      title: 'Image 2'
    },
    {
      src: 'https://bi.im-g.pl/im/f1/de/16/z23980529AMP,Al-Pacino.jpg',
      title: 'Image 3'
    }
  ];
  return (
    <header id='header'>
      <div className='intro'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 brad'>
                <div className='header_icons'>
                  <i className="fa fa-wifi header_image"> </i> <i className="fa fa-plus header_image_green"> </i>
                  <i className="fa fa-gift header_image"> </i>
                </div>
                <h1 className='brad_title'> Zyskaj więcej </h1>
                <span className='description'>Kup internet, a <span className='green'> HBO<span className='bold green'>GO</span> </span>
                  dostaniesz za jedyne <span
                      style={{color: "#675191", fontSize:"50px", fontWeight: 'bold', fontFamily: '\'Special Elite\', cursive'}}
                  >  1 Zł  </span></span>
              </div>
              <div className='col-md-4 slider'>
                <ImageSlider height='550px'
                             width='390px'
                             data={imageData}
                             showArrows={false}
                             showDots={false}
                             style={{margin: '0px'}}
                             duration={5}
                />
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}
