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
                <NavLink to={"/"}><p className='text-white'>AmazeKart</p></NavLink>
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
                    <NavLink to={"/compare"}><p className='mb-0 text-white'>Compare<br />Products</p></NavLink>
                  </Link>
                </div>
                <div>
                  <Link className='align-items-center gap-10 d-flex text-white px-1'>
                    <img src='/images/wishlist.svg' alt='wishlist' />
                    <NavLink to={"/wishlist"}><p className='mb-0 text-white'>Favorite<br />Products</p></NavLink>
                  </Link>
                </div>
                <div>
                  <Link className='align-items-center gap-10 d-flex text-white px-1'>
                    <img src='/images/user.svg' alt='user' />
                    <NavLink to={"/login"}><p className='mb-0 text-white'>My Account</p></NavLink>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className='align-items-center gap-10 d-flex text-white px-1'>
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
                      <li><a className="dropdown-item text-white" href="./about">Mobile & Tablets</a></li>
                      <li><a className="dropdown-item text-white" href="./about">Electronics</a></li>
                      <li><a className="dropdown-item text-white" href="./about">TVs & Appliances</a></li>
                      <li><a className="dropdown-item text-white" href="./about">Fashion</a></li>
                      <li><a className="dropdown-item text-white" href="./about">Home & Kitchen</a></li>
                      <li><a className="dropdown-item text-white" href="./about">Furniture</a></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex gap-15'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/store"}>Store</NavLink>
                    <NavLink to={""}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink to={"/policy"}>Policies</NavLink>
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