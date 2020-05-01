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
    <h1 className={mainStyles.title}>Smirnov Dmitriy</h1>
    <p>Frontend engineer.</p>

    <p><strong>Working with:</strong> HTML, CSS, JS, TS, React, Node, Python</p>

    <ul className={mainStyles.contactList}>
      <li className={mainStyles.contactItem}>
        <a target="_blank" href="mailto: patrickjsmirnov@gmail.com">Email</a>
      </li>
      <li className={mainStyles.contactItem}>
        <a target="_blank" href="https://github.com/patrickjsmirnov">Github</a>
      </li>
      <li className={mainStyles.contactItem}>
        <a target="_blank" href="https://twitter.com/smirnovds93">Twitter</a>
      </li>
    </ul>
  </div>
)

