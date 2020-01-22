import React from 'react';
import logo from './logo.svg';
import './App.css';
import './home.css';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand ' href='/'>
          Essentials By Em
        </a>
        <a className='navbar-brand btn btn-warning ' href='#products'>
          Products
        </a>
      </nav>
      <div className='backgroundImg '>
        <div className='backgroundText container'>
          <div className='row innerText1'>
            <h1 className='col-md-4 innerFont1'>
              You deserve to be treated right.
            </h1>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
          </div>
          <div className='row innerText2'>
            <h6 className='col-md-4 innerFont2'>
              Our fair and honest prices guarentees happiness.
            </h6>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
          </div>

          <div className='row'>
            <a className='col-md-4 btn btnContinue' href='#products'>
              Continue
            </a>
            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
          </div>
        </div>
      </div>
      <p className='ourProductsText'>Our Products</p>
      {/* <div className='container'> */}
      <div className='row secondCol' id='products'>
        {/* First Col */}

        <div className='col-lg-4 '>
          <div className='buyNowSection '>
            <h2 className='col1Text'>Essentials By Em</h2>
            <p className='col1secondText'>Fill your body up with essence.</p>
            <div className=' btn btnBuyNow'>Buy Now</div>
          </div>
        </div>

        {/* Second Col */}
        <div className='col-lg-8 '>
          {/* Row 1 */}
          <div className='row firstTextRow'>
            <div className='col-md-4 cardControl btn'>
              <div className='card-img-top lipBalm' alt='Lip Balm'></div>
              <div className='card-body'>
                <p className='card-text btn'>Lip Balm</p>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <div className='card-img-top mudMask' alt='Mud Mask'></div>
              <div className='card-body'>
                <p className='card-text btn'>Mud Mask</p>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <div
                className='card-img-top makeUpRemover'
                alt='Make Up Remover'
              ></div>
              <div className='card-body'>
                <p className='card-text btn'>Make Up Remover</p>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className='row secondTextRow'>
            <div className='col-md-4 btn'>
              <div
                className='card-img-top brownSugar'
                alt='Brown Sugar Foot Scrub'
              ></div>
              <div className='card-body'>
                <p className='card-text btn'>Brown Sugar Foot Scrub</p>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <div className='card-img-top bathBomb' alt='Bath Bomb'></div>
              <div className='card-body'>
                <p className='card-text btn'>Bath Bomb</p>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <div className='card-img-top beardOil' alt='...'></div>
              <div className='card-body'>
                <p className='card-text btn'>Beard Oil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <p className='backgroundImg2'></p>
    </div>
  );
}

export default App;
