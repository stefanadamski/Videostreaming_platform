import React from 'react';
import {Link} from 'react-router-dom';

export const StartPage = (props) => {
  return (
      <div className="app">
        <header className="appHeader">
          <Link to="/home" className='startLink'>
            <div>
              <span>V.O.DEMAND</span>
            </div>
          </Link>
        </header>
      </div>
  )
}

export default StartPage;