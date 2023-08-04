import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import ProductCard from "../Components/ProductCard"
import SpecialProduct from "../Components/SpecialProduct";
import { TbTruckDelivery, TbDiscount2 } from 'react-icons/tb'
import { GiReturnArrow } from 'react-icons/gi'
import { MdOutlineCheckCircleOutline, MdPayment } from 'react-icons/md'
import Container from "../Components/Container"

const Home = () => {
  return (
    <>
      {/* <section className='home-wrapper-1 py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner d-flex positon-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main-banner' />
                <div className='main-banner-content position-absolute'>
                  <h3>Listen your heart out</h3>
                  <h4>Goat Shockerz pro</h4>
                  <p>Starting from Rs 999 only</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center gap-15'>
                <div className='small-banner d-flex position-relative'>
                  <img src="images/catbanner-01.jpg" className='fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h3>For Pros</h3>
                    <h4>iPad S13+ Pro.</h4>
                    <p>Starting from just $999.00</p>
                    <Link className="button-small">BUY</Link>
                  </div>
                </div>
                <div className='small-banner d-flex position-relative'>
                  <img src="images/catbanner-02.jpg" className='fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h3>Best seller</h3>
                    <h4>Samsung Smart</h4>
                    <p>From $999.00</p>
                    <Link className="button-small">BUY</Link>
                  </div>
                </div>
                <div className='small-banner d-flex position-relative'>
                  <img src="images/catbanner-03.jpg" className='fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h3>Best seller</h3>
                    <h4>Samsung Smart</h4>
                    <p>From $999.00</p>
                    <Link className="button-small">BUY</Link>
                  </div>
                </div>
                <div className='small-banner d-flex position-relative'>
                  <img src="images/catbanner-04.jpg" className='fluid rounded-3' alt="main-banner" />
                  <div className='small-banner-content position-absolute'>
                    <h3>Best seller</h3>
                    <h4>Samsung Smart</h4>
                    <p>From $999.00</p>
                    <Link className="button-small">BUY</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Listen your heart out</h4>
                <h5>Boat Shockerz pro</h5>
                <p>Starting from Rs 599 only</p>
                <Link to="/store" className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Seller</h4>
                  <h5>Samsung Smart</h5>
                  <p>
                    From Rs 999.00 <br /> or Rs 40/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Lenovo ThinkPad</h5>
                  <p>
                    From Rs 35999.00 
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From Rs 99999.00 <br /> or Rs 2549/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>JBL Nirvana</h5>
                  <p>
                    From Rs 5999.00 <br /> or 549/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section className='home-wrapper-2 py-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                  <TbTruckDelivery className='services-icons' />
                  <div>
                    <h4>Superfast <br />Delivery</h4>
                    <p>24 hours or money back</p>
                  </div>
                </div>
                <div className='d-flex'>
                  <GiReturnArrow className='services-icons' />
                  <div>
                    <h4>Easy <br /> Returns</h4>
                    <p>Within 30 days of purchase</p>
                  </div>
                </div>
                <div className='d-flex'>
                  <TbDiscount2 className='services-icons' />
                  <div>
                    <h4>Great <br />Discounts</h4>
                    <p>Get amazing offers everyday</p>
                  </div>
                </div>
                <div className='d-flex'>
                  <MdOutlineCheckCircleOutline className='services-icons' />
                  <div>
                    <h4>Authentic <br />Products</h4>
                    <p>Quality assurance</p>
                  </div>
                </div>
                <div className='d-flex'>
                  <MdPayment className='services-icons' />
                  <div>
                    <h4>Secure <br />Payments</h4>
                    <p>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marquee-wrapper py-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex" gradient='true'>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Card-wrapper py-3 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <div class1="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home