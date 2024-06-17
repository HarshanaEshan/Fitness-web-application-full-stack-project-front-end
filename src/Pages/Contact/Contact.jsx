// ComponentB.js

import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Button,Input } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

import './Contact.css'

const handleType = (count: number) => {
  // access word count number
  console.log(count)
}

const handleDone = () => {
  console.log('Done after 5 loops!');
}

const Contact = () => {
    const [userData, setUserData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');
    if (encodedData) {
      const decodedData = decodeURIComponent(encodedData);
      const data = JSON.parse(decodedData);
      setUserData(data);
    }
  }, []);

  return (
    <div className='main-contact'>
      <div className="contact-title">
        <span className="contact-title-span">... C
        <Typewriter
                words={['ontact Us ...']}
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
                onLoopDone={handleDone}
                onType={handleType}
              />
        </span>
      </div>
      {userData && (
        <div className="contact-details">
          <form action="mailto:someone@example.com" method="post" enctype="text/plain" className="contact-details">
            <input type='text' value={userData.user} className="contact-input"/>
            <input type='text' value={userData.email} className="contact-input"/>
            <input type='text' placeholder='Subject' className="contact-input" />
            <input type='tel' placeholder='Phone No...' className="contact-input" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            <textarea placeholder='Message....' className="contact-input contact-message" required></textarea>
            {/* <Button type='submit' className="btn-contact-submit">Send</Button> */}
            <button type='submit' className="btn-contact-submit btn">Submit</button>
          </form>
        </div>
      )}

    
    </div>
  );
};

export default Contact;
