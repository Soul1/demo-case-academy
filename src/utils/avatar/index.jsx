import React from 'react';
import './index.scss';

const Avatar = ({src, setSrc, icon, initials}) => {
  const readURL = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setSrc(e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <div className='avatar'>
      <label className='upload-button' htmlFor='avatar-upload'>
        {src
          ? <img className='profile-pic' src={src} alt='avatar'/>
          : <div className='initials'>{initials}</div>}
        <div className='add-photo' style={icon && {backgroundImage: `url(${icon})`}}/>
      </label>
      <input className='file-upload' id='avatar-upload' type='file' accept='image/*' onChange={readURL}/>
    </div>
  );
};

export default Avatar;
