import React from 'react';
import fb from './fb.png';
import x from './x.png';
import lin from './in.png';
import mail from './mail.png';

const Footer = () => {
  return (
    <div className="sm:footer-horizontal bg-neutral p-10 mt-10">
      <div className='flex justify-evenly mb-10'>
        <div className='pl-14'>
          <h6 className="font-medium text-white text-2xl">CS — Ticket System</h6>
          <p className=' mt-3'>The CS — Ticket System is a specialized customer <br /> support management platform designed to stream <br /> line the lifecycle of service requests from initial <br /> submission to final resolution.</p>
        </div>
        <div className=''>
          <h6 className="font-medium text-white text-xl">Company</h6>
          <div className='mt-3'><a className="link link-hover">About Us</a></div>
          <div className='mt-2'><a className="link link-hover">Our Mission</a></div>
          <div className='mt-2'><a className="link link-hover">Contact Saled</a></div>
        </div>
        <div className=''>
          <h6 className="font-medium text-white text-xl">Services</h6>
          <div className='mt-3'><a className="link link-hover">Products & Services</a></div>
          <div className='mt-2'> <a className="link link-hover">Customer Stories</a></div>
          <div className='mt-2'> <a className="link link-hover">Customer Stories</a></div>
          <div className='mt-2'><a className="link link-hover">Download App</a></div>
        </div>

        <div className=''>
          <h6 className="font-medium text-white text-xl">Information</h6>
          <div className='mt-3'><a className="link link-hover">Privacy Policy</a></div>
          <div className='mt-2'><a className="link link-hover">Terms & Conditions</a></div>
          <div className='mt-2'><a className="link link-hover">Join Us</a></div>
        </div>
        <div className=''>
          <h6 className="font-medium text-white text-xl">Social Links</h6>
          <div className='flex items-center gap-2 mt-3'><img className='h-5' src={x} alt="" /><a  className="link link-hover">@CS — Ticket System</a></div>
          <div className='flex items-center gap-2 mt-2'><img className='h-5' src={lin} alt="" /><a  className="link link-hover">@CS — Ticket System</a></div>
          <div className='flex items-center gap-2 mt-2'><img className='h-5' src={fb} alt="" /><a  className="link link-hover">@CS — Ticket System</a></div>          
          <div className='flex items-center gap-2 mt-2'><img className='h-5' src={mail} alt="" /><a  className="link link-hover">support@cst.com</a></div>          
          
        </div>
      </div>
      <div className='flex justify-center border-t border-white pt-10'>
        © 2026 CS — Ticket System. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;