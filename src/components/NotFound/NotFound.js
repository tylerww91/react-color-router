import React from 'react';
import background from '../../bobross.png';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-container" style={{ backgroundImage: `url(${background})` }}>
      <p className="not-found-message">
        Select one of these three colors, or enter a valid rgb into the URL
      </p>
    </div>
  );
}
