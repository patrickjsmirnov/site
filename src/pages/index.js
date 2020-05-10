import React from "react"
import mainStyles from "./index.module.css"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <div className={mainStyles.main}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Smirnov Dmitriy - frontend engineer</title>
    </Helmet>

    <img className={mainStyles.photo} src="/images/ava.jpg"  alt=""/>
    <h1 className={mainStyles.title}>
      Smirnov Dmitriy
      {/*<Link to="/cv" className={mainStyles.cvLink}>CV</Link>*/}
    </h1>
    <p className={mainStyles.desc}>
      Hello! 👋 <br/>
      I am a Frontend engineer from
      Saint-Petersburg, Russia. <br/>
      I'm passionate about learning new things and traveling.
    </p>

    <ul className={mainStyles.contactList}>
      <li className={mainStyles.contactItem}>
        <a target="_blank" href="mailto: patrickjsmirnov@gmail.com">Email</a>
      </li>
      <li className={mainStyles.contactItem}>
        <a target="_blank" href="https://github.com/patrickjsmirnov">Github</a>
      </li>
      <li className={mainStyles.contactItem}>
        <a target="_blank" href="https://twitter.com/patrickjsmirnov">Twitter</a>
      </li>
      <li className={mainStyles.contactItem}>
        <a target="_blank" href="https://t.me/smirnovds">Telegram</a>
      </li>
    </ul>
  </div>
)

