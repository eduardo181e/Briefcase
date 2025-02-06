import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/header.css';

function Skill() {
  const [t] = useTranslation('global');
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={skillRef} className="titleSkils" id="skills">
      <h1 className="a-right" style={{ width: '90%' }}>{t("skill.tools")}</h1>
      <h2 className="a-right" style={{ marginBottom: '-10px', width: '90%' }}>{t("skill.tools.1")}</h2>
      <h3 className="a-right" style={{ marginBottom: '10px', width: '80%' }}>{t("skill.tools.2")}</h3>

      {isVisible && (
        <motion.div 
          className="tool" 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
        >
          <ul>
            {[
              { img: "./skills/typescript-icon.png", name: "Typescript" },
              { img: "./skills/JavaScript-logo.png", name: "Javascript" },
              { img: "./skills/nodejs.png", name: "Node.js" },
              { img: "./skills/express.png", name: "Express.js" },
              { img: "./skills/passport.svg", name: "Passport.js" },
              { img: "./skills/jwt.png", name: "Jasonwebtoken" },
              { img: "./skills/mysql.png", name: "Mysql" },
              { img: "./skills/mongodb.png", name: "MongoDB" },
              { img: "./skills/angular.png", name: "Angular" },
              { img: "./skills/react.webp", name: "React" },
              { img: "./skills/karma.png", name: "Karma" },
              { img: "./skills/cmd.png", name: "Cmd" },
              { img: "./skills/css.png", name: "CSS" },
              { img: "./skills/responsive.png", name: "Responsive Web Design" },
              { img: "./skills/flexbox.png", name: "Flexbox" },
              { img: "./skills/grid.webp", name: "GRID LAYOUT" },
              { img: "./skills/less.webp", name: "LESS" },
              { img: "./skills/sass.png", name: "SASS" },
              { img: "./skills/bootsrap.png", name: "BOOTSTRAP" },
              { img: "./skills/jquery.png", name: "JQuery" },
              { img: "./skills/mobile.png", name: "Mobile development" },
              { img: "./skills/android.png", name: "Android" },
              { img: "./skills/Kotlin.png", name: "Kotlin" },
              { img: "./skills/react.webp", name: "React Native" },
            ].map((skill, index) => (
              <motion.li key={index} variants={itemVariants}>
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Skill;
