import React from "react";

export const Contact = () => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='contacts'>
              <div className='app_download' style={{cursor: 'pointer'}}>
                <i className="fa fa-download green" style={{marginRight: '5px'}}> </i>
                  Pobierz aplikację mobilną!
              </div>
              <div className='app_download'>
                <i className='fa fa-phone green' style={{marginRight: '5px'}}> </i>
                <i className="fa fa-mobile green" style={{marginRight: '5px'}}> </i>
                  Skontaktuj się z nami!<span className='green'> 800 060 800  </span>
              </div>
            </div>
            <div className='row green_list'>
              <div> O nas </div>
              <div> Kontakt </div>
              <div> Kariera </div>
              <div> Dla mediów </div>
            </div>
            <div className='social'>
              <ul>
                <li>
                  <a href='https://www.facebook.com'>
                    <i className='fa fa-facebook'> </i>
                  </a>
                </li>
                <li>
                  <a href='https://www.twitter.com'>
                    <i className='fa fa-twitter'> </i>
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com'>
                    <i className='fa fa-youtube'> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 V.O.DEMAND
          </p>
        </div>
      </div>
    </div>
  )
}



