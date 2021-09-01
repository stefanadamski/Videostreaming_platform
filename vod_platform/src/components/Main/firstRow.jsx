import React from "react";
import Vimeo from '@u-wave/react-vimeo';

export const FirstRow = () => {

  const style = {
      width: '57px',
      height: '57px',
      fontSize: '60px',
      color: 'white',
      border: '1px solid var(--green)',
      borderRadius: '50%'
  }
  return (
    <div id='package'>
      <div className='container' style={{border: '2px solid white'}}>
        <div className='row'>
          <div className='col-md-6 packages'>
              <div className='propositions'>
                  <i className="fa fa-laptop" style={style}> </i>
                  <h4 className='green'> Wybierz </h4>
                  <h5> kanały </h5>
              </div>
              <div className='propositions'>
                  <i className="fa fa-align-left" style={style}> </i>
                <h4 className='green'> Wybierz </h4>
                <h5> prędkość </h5>
              </div>
              <div className='propositions'>
                  <i className="fa fa-phone" style={style}> </i>
                <h4 className='green'> Wybierz </h4>
                <h5> minuty </h5>
              </div>
              <div className='propositions'>
                  <i className="fa fa-mobile" style={style}> </i>
                <h4 className='green'> Wybierz </h4>
                <h5> Internet </h5>
              </div>
          </div>
          <div className='col-md-6'>
              <div className='trailers'>
                  <Vimeo
                      video="251907717"
                      autoplay
                      width='480px'
                      height='300px'
                  />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
