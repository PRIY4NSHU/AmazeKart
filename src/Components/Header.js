import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsCart3 } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white'>Free Shipping over Rs 5000</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white'>
                Contact us: <a href="1800-266-0123">1800-266-0123 (TollFree)</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-2'>
        <div className='container'>
          <div className='row '>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>AmazeKart</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search Product..." aria-label="Search Product..." aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2"><BsSearch /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center gap-30'>
                <div>
                  <Link className='align-items-center gap-10 d-flex text-white px-1'>
                    <img src='/images/compare.svg' alt='compare' />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width={'35px'} height={'35px'} viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg> */}
                    <p className='mb-0'>Compare<br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='align-items-center gap-10 d-flex text-white px-1'>
                    <img src='/images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>Favorite<br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='align-items-center gap-10 d-flex text-white px-1'>
                    <img src='/images/user.svg' alt='user' />
                    <p className='mb-0'>My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='align-items-center gap-10 d-flex text-white px-1'>
                    {/* <img className='' src='/images/cart.svg' alt='cart' /> */}
                    <BsCart3 id='cart'/>
                    <div>
                      <div className='align-items-right d-flex'>
                        <span className='badge px-1'>0</span>
                        <span className='badge px-1'>items</span>
                      </div>
                      <p className='mb-0 px-2'>Cart</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div class="dropdown">
                    {/* <div><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></div> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={'25px'} fill="#ffffff"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    <button class="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {/* <img src='images/menu.svg' /> */}
                      <span>Categories</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item text-white" href="./about">Action</a></li>
                      <li><a className="dropdown-item text-white" href="./about">Another action</a></li>
                      <li><a className="dropdown-item text-white" href="./about">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex gap-15'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/store"}>Store</NavLink>
                    <NavLink to={"/"}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header