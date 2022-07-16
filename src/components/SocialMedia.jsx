import React from 'react';
import {FaLinkedin, FaYoutube} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a 
    href="https://www.linkedin.com/in/muqtadir-ahmed-82a95b231/"
    target= "_blank"
    >
      <div>  
        <FaLinkedin/>  
      </div>
    </a>
    <a 
    href="https://www.youtube.com/channel/UClg5Pikgcbzu7RKCHxMkZ_A"
    target= "_blank"
    >
      <div>  
        <FaYoutube/>  
      </div>
    </a>
    
    
  </div>
);

export default SocialMedia;