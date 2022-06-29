import React from 'react';

import './AirCover.css';

const AirCover = ({ setShowModal }) => {
  return (
    <div className="openCover-container">
      <div className="g-header">
        <div className="topRowForm">
          <div className="xToClose" onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </div>
          <h2>opencover</h2>
          <div></div>
          <p>
            OpenCover is comprehensive protection included for free with every
            booking.
          </p>
        </div>
      </div>
      <div className="g-wrapper">
        <h3>Booking Protection Guarantee</h3>
        <p>
          In the unlikely event a Host needs to cancel your booking within 30
          days of check-in, we’ll find you a similar or better home, or we’ll
          refund you.
        </p>
      </div>
      <div className="g-wrapper">
        <h3>Check-In Guarantee</h3>
        <p>
          If you can’t check into your home and the Host cannot resolve the
          issue, we’ll find you a similar or better home for the length of your
          original stay, or we’ll refund you.
        </p>
      </div>
      <div className="g-wrapper">
        <h3>Get-What-You-Booked Guarantee</h3>
        <p>
          If at any time during your stay you find your listing isn't as
          advertised—for example, the refrigerator stops working and your Host
          can’t easily fix it, or it has fewer bedrooms than listed—you'll have
          three days to report it and we’ll find you a similar or better home,
          or we’ll refund you.
        </p>
      </div>
      <div className="g-wrapper">
        <h3>24-hour Safety Line</h3>
        <p>
          If you ever feel unsafe, you’ll get priority access to
          specially-trained safety agents, day or night.
        </p>
      </div>
      <p>
        Find complete details on how AirCover protects your booking in our Help
        Center
      </p>
    </div>
  );
};

export default AirCover;
