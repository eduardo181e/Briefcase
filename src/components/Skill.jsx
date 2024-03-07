import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/header.css'
function Skill() {
    const [t, i18n] = useTranslation('global')
  return (
    <div className='titleSkils' id='skills'>
        <h1 className='a-right'>{t("skill.tools")}</h1>
        <h2 className='a-right'  style={{marginBottom: '-10px'}}>{t("skill.tools.1")}</h2>
        <h3 className='a-right'  style={{marginBottom: '10px'}}>{t("skill.tools.2")}</h3>
        <div className='tool'>
            <ul>
                <li>
                    <img src="../../public/skills/typescript-icon.png" alt="" />
                    <p>Typescript</p>
                </li>
                <li>
                    <img src="../../public/skills/JavaScript-logo.png" alt="" />
                    <p>Javascript</p>
                </li>
                <li>
                    <img src="../../public/skills/nodejs.png" alt="" />
                    <p>Node.js</p>
                </li>
                <li>
                    <img src="../../public/skills/express.png" alt="" />
                    <p>Express.js</p>
                </li>
                <li>
                    <img src="../../public/skills/passport.svg" alt="" />
                    <p>Passport.js</p>
                </li>
                <li>
                    <img src="../../public/skills/jwt.png" alt="" />
                    <p>Jasonwebtoken</p>
                </li>
                <li>
                    <img src="../../public/skills/mysql.png" alt="" />
                    <p>Mysql</p>
                </li>
                <li>
                    <img src="../../public/skills/mongodb.png" alt="" />
                    <p>MongoDB</p>
                </li>
                <li>
                    <img src="../../public/skills/angular.png" alt="" />
                    <p>Angular</p>
                </li>
                <li>
                    <img src="../../public/skills/react.webp" alt="" />
                    <p>React</p>
                </li>
                <li>
                    <img src="../../public/skills/karma.png" alt="" />
                    <p>Karma</p>
                </li>
                <li>
                    <img src="../../public/skills/cmd.png" alt="" />
                    <p>Cmd</p>
                </li>
                <li>
                    <img src="../../public/skills/css.png" alt="" />
                    <p>CSS</p>
                </li>
                <li>
                    <img src="../../public/skills/responsive.png" alt="" />
                    <p>Responsive Web Design</p>
                </li>
                <li>
                    <img src="../../public/skills/flexbox.png" alt="" />
                    <p>Flexbox</p>
                </li>
                <li>
                    <img src="../../public/skills/grid.webp" alt="" />
                    <p>GRID LAYOUT</p>
                </li>
                <li>
                    <img src="../../public/skills/less.webp" alt="" />
                    <p>LESS</p>
                </li>
                <li>
                    <img src="../../public/skills/sass.png" alt="" />
                    <p>SASS</p>
                </li>
                <li>
                    <img src="../../public/skills/bootsrap.png" alt="" />
                    <p>BOOTSTRAP</p>
                </li>
                <li>
                    <img src="../../public/skills/jquery.png" alt="" />
                    <p>JQuey</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Skill