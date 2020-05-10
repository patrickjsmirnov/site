import React from "react"
import cvStyles from "./cv.module.css"
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Smirnov Dmitriy - CV</title>
    </Helmet>

    <div className={cvStyles.main}>
      <div className={cvStyles.left}>
        <h1>Smirnov Dmitriy</h1>

        <p>Several words about me...</p>

        <h2 className={cvStyles.sectionTitle}>Employment History</h2>

        <div>
          <h3>Frontend engineer at <a href="#">Apptica</a></h3>
          <p>Jule 2018 to present</p>
          <p>Description description description  description  description  description
            Description description description  description  description  description
            Description description description  description  description  description
            Description description description  description  description  description
          </p>
        </div>

        <div>
          <h3>Frontend engineer at <a href="#">Mygento</a></h3>
          <p>June 2017 - Jule 2018</p>
          <p>Description description description  description  description  description
            Description description description  description  description  description
            Description description description  description  description  description
            Description description description  description  description  description
          </p>
        </div>

        <div>
          <h3>Web developer at Freelance</h3>
          <p>2015 - 2017</p>
          <p>Description description description  description  description  description
            Description description description  description  description  description
            Description description description  description  description  description
            Description description description  description  description  description
          </p>
        </div>
      </div>

      <div className={cvStyles.right}>
        <div className={cvStyles.skillsSection}>
          <h2 className={cvStyles.sectionTitle}>My Skills</h2>
          <h3>Frontend</h3>
          <ul className={cvStyles.skillsList}>
            <li className={cvStyles.skillItem}>Html</li>
            <li className={cvStyles.skillItem}>CSS</li>
            <li className={cvStyles.skillItem}>JavaScript</li>
            <li className={cvStyles.skillItem}>React</li>
            <li className={cvStyles.skillItem}>Web Accessibility</li>
          </ul>

          <h3>Backend</h3>
          <ul className={cvStyles.skillsList}>
            <li className={cvStyles.skillItem}>Node</li>
            <li className={cvStyles.skillItem}>SQL</li>
            <li className={cvStyles.skillItem}>Python</li>
          </ul>

          <h3>Other</h3>
          <ul className={cvStyles.skillsList}>
            <li className={cvStyles.skillItem}>Git</li>
            <li className={cvStyles.skillItem}>Bash</li>
          </ul>
        </div>

        <div>
          <h2 className={cvStyles.sectionTitle}>Education</h2>
          <h3>Saint-Petersburg State University</h3>
          <p>Postgraduate student of Applied Mathematics & Computer Science, unfinished, 2017-2020</p>
          <p>Master's degree of Applied Mathematics & Computer Science, 2015-2017</p>
          <p>Bachelor of Applied Mathematics & Computer Science, 2011-2015</p>
        </div>
      </div>

    </div>
  </div>
)

