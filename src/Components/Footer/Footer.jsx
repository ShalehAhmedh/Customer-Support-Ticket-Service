import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral p-10 mt-10">
  <nav className='pl-14'>
    <h6 className="font-bold text-white text-2xl">CS — Ticket System</h6>
    <p>The CS — Ticket System is a specialized customer <br/> support management platform designed to stream <br /> line the lifecycle of service requests from initial <br /> submission to final resolution.</p>
  </nav>
  <nav>
    <h6 className="font-bold text-white text-xl">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="font-bold text-white text-xl">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download App</a>
  </nav>
  
  <nav>
    <h6 className="font-bold text-white text-xl">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="font-bold text-white text-xl">Social Links</h6>
    <a className="link link-hover">X @CS — Ticket System</a>
    <a className="link link-hover">In @CS — Ticket System</a>
    <a className="link link-hover">f @CS — Ticket System</a>
    <a className="link link-hover">suport@cst.com</a>
  </nav>
</footer>
    );
};

export default Footer;