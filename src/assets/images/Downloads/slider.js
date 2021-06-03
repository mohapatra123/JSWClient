import React from 'react';
import ImageGallery from 'react-image-gallery';
import img1 from '../images/image1.png'
import img1l from '../images/image1l.png'
import img2 from '../images/image2.png'
import img2l from '../images/image2l.png'
import img3 from '../images/image3.png'
import img3l from '../images/image3l.png'


function Slider() {

  const images = [
    {
      original: img1l,
      thumbnail: img1,
    },
    {
      original: img2l,
      thumbnail: img2,
    },
    {
      original: img3l,
      thumbnail: img3,
    },
    {
      original: img1l,
      thumbnail: img1,
    },
    {
      original: img2l,
      thumbnail: img2,
    },
    {
      original: img3l,
      thumbnail: img3,
    },
    {
      original: img1l,
      thumbnail: img1,
    },
    {
      original: img2l,
      thumbnail: img2,
    },
    {
      original: img3l,
      thumbnail: img3,
    },
    {
      original: img1l,
      thumbnail: img1,
    },
    {
      original: img2l,
      thumbnail: img2,
    },
    {
      original: img3l,
      thumbnail: img3,
    },

  ];


 const renderFullscreenButton = (onClick, isFullscreen) => {
    return (
      <button
        type='button'
        className={
          `image-gallery-fullscreen-button${isFullscreen ? ' active' : ''}`}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div className="container">
        <h2>Slider</h2>
        <div className="gallerySlider">
          <ImageGallery items={images} thumbnailPosition="right" showNav={false}  lazyLoad={true} />
        </div>
      </div>
    </>
  );
}
export default Slider;