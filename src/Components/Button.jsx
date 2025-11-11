import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="animated-button" >
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">{text}</span>
        <span className="circle" />
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 28px; 
    border: none;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 30px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    min-width: 90px;
  }

  .animated-button svg {
    position: absolute;
    width: 18px;
    fill: #fff;
    z-index: 2;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 8px;
  }

  .animated-button .arr-2 {
    left: -20%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
  }

  .animated-button .text {
    position: relative;
    z-index: 3;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    
     border:2px;
        box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 12px;
  }

  .animated-button:hover .text {
    transform: translateX(8px);
  }
 .animated-button:hover svg {
    fill: #212121;
  }
  .animated-button:hover .circle {
    width: 100px;
    height: 100px;
    opacity: 1;
  }

  .animated-button:active {
    transform: scale(0.95);
  }
`;

export default Button;
