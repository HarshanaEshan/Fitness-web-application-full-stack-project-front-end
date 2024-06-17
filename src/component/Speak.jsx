import React,{useState,useEffect,useRef}  from 'react'
import "./Speack.css"

function Speak() {
    const divRef = useRef(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    handleContentChange(); // Initial content read when component mounts
    const observer = new MutationObserver(handleContentChange);
    observer.observe(divRef.current, { subtree: true, characterData: true, childList: true });
    return () => {
      observer.disconnect(); // Disconnect the observer when component unmounts
    };
  }, []);

  useEffect(() => {
    if (content) {
      speak(content);
    }
  }, [content]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleContentChange = () => {
    if (divRef.current) {
      const newContent = divRef.current.textContent;
      setContent(newContent);
    }
  };
  
  return (
    <div ref={divRef} contentEditable={false} onInput={handleContentChange} className='read' >
        Welcome to Gainer: Your Ultimate Destination for All Fitness Needs
        </div>
  )
}

export default Speak