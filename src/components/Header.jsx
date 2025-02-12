import React, { useState, useEffect } from 'react';
import '../styles/header.css'; // Asegúrate de tener los estilos adecuados
import { useTranslation } from 'react-i18next'

  // Generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const TypingAnimation = ({ words }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [letterIndex, setLetterIndex] = useState(0);
    const [textColor, setTextColor] = useState(getRandomColor());
    const [emojiV, setEmojiV] = useState(false);
  
    const emojis = ['😊', '🎨', '🎯', '🤝', '🚀', '⚡', '🌱'];
  
    useEffect(() => {
      let typingTimeout;

      if (!isDeleting) {
        if (letterIndex < words[currentWordIndex].length) {
          typingTimeout = setTimeout(() => {
            setDisplayedText(prev => prev + words[currentWordIndex].charAt(letterIndex));
            setLetterIndex(prev => prev + 1);
          }, 150);
        } else {
          if (!emojiV) {
            setTimeout(() => setEmojiV(true), 150);
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        }
      } else {
        if (emojiV) {
          setTimeout(() => setEmojiV(false), 100);
        } else {
          if (letterIndex > 0) {
            typingTimeout = setTimeout(() => {
              setDisplayedText(prev => prev.slice(0, -1));
              setLetterIndex(prev => prev - 1);
            }, 100);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            setTextColor(getRandomColor());
          }
        }
      }
  
      return () => clearTimeout(typingTimeout);
    }, [letterIndex, isDeleting, words, currentWordIndex, emojiV]);
  
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, 500);
  
      return () => clearInterval(cursorInterval);
    }, []);
  
    return (
      <div className="typing-container">
        <span className="text" style={{ color: textColor }}>
          {displayedText}
          <span style={{ display: emojiV ? 'inline' : 'none' }}>
            {emojis[currentWordIndex % emojis.length]}
          </span>
        </span>
        <span className="cursor" style={{ visibility: cursorVisible ? 'visible' : 'hidden' }}>
          _
        </span>
      </div>
    );
  };
function Header() {
  const [t, i18n] = useTranslation('global')
  return (
    <div>
      <h1 className={`presentacion ${i18n.language === "es" ? "spanish-class" : ""}`}>{t("precentacion")}<TypingAnimation words={[t("header.1"), t("header.2"), t("header.3"), t("header.4"), t("header.5"), t("header.6"), t("header.7")]} /></h1>
      
    </div>
  );
}

export default Header;