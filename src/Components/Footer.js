import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5 pr-0'>
              <div className='footer-top-data d-flex gap-15 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'></img>
                <h2 className='text-white mb-0'>Subscribe to newsletter!</h2>
              </div>
            </div>
            <div className='col-7'>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon3" />
                <span class="input-group-text" id="basic-addon3">SUBSCRIBE</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-8 d-flex'>
              <div className='col-3 text-white mb-4'>
                <h5 className='mb-4'>
                  Contact Us
                </h5>
                <div >
                  <p className='mb-2'>1800-266-0123</p>
                  <p className='mb-2'>customercare@nmit.ac.in</p>
                  <p className='mb-2'>FAQ</p>
                </div>
              </div>
              <div className='col-3 text-white mb-4'>
                <h5 className='mb-4'>
                  Customer Service
                </h5>
                <div>
                  <p className='mb-2'>Payment Options</p>
                  <p className='mb-2'>Track Order</p>
                  <p className='mb-2'>Encircle Program</p>
                </div>
              </div>
              <div className='col-3 text-white mb-4'>
                <h5 className='mb-4'>
                  Policies
                </h5>
                <div>
                  <p className='mb-2'>Returns & Exchanges</p>
                  <p className='mb-2'>Cancellation</p>
                  <p className='mb-2'>Shipping</p>
                  <p className='mb-2'>Delivery Information</p>
                </div>
              </div>
              <div className='col-3 text-white mb-4'>
                <h5 className='mb-4'>
                  About Us
                </h5>
                <div>
                  <p className='mb-2'>Payment Options</p>
                  <p className='mb-2'>Track Order</p>
                </div>
              </div>
            </div>
            <div className='col-4 text-white'>
              <h6 className='mb-3'>DOWNLOAD OUR APP</h6>
              <div className='text-white'>
                <img src='/images/google-play.png' alt='google-play' width={125} />
                <div className='container-fluid px-0'>
                  <div className='row align-items-center'>
                    <div className='col-6'>
                  <p className='mt-3'>FOLLOW US WITH</p>
                    </div>
                    <div className='col-6 gap-15 d-flex'>
                <a href='a'><BsGithub className='social'/></a>
                <a href='a'><BsLinkedin className='social'/></a>
                <a href='a'><BsInstagram className='social'/></a>
                <a href='a'><BsGithub className='social'/></a>
                    </div>
                <p>Want Help? <b>Click Here</b> to chat with us</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-left mb-0 text-white'>
                &copy; {new Date().getFullYear()} Powered by PRIY4NSHU
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer