import React from "react";
import { useHistory } from "react-router-dom";

export const Navigation = (props) => {
  let history = useHistory();
  const handleService = () => {
    history.push("/service");
  }
  const handleSubscription = () => {
    history.push("/subscription");
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <div className='menuButton'> <i className="fa fa-bars green"> </i> </div>
          </button>
          <div>
            <a className='navbar-brand page-scroll'>
              <div className='nav_logo'>
                V.O.Demand
              </div>
            </a>
          </div>
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li onClick={handleService}>
              <a>
                Centrum Obsługi klienta <span className='green'> <i className='fa fa-phone'> </i>  800 060 800  </span>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-search green"> </i> Szukaj
              </a>
            </li>
            <li onClick={handleSubscription}>
              <a>
                <i className="fa fa-user green"> </i> Strefa Abonamenta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
