import React from 'react';

import './about.css'
import Helmet from 'react-helmet';

const About = () => (
  <div className="about">
    <Helmet
      title="About me || Sai gowtham"
      meta={[
        { name: 'description', content: 'about page  site' },
        { name: 'keywords', content: 'web developer, portfolio,self taught,reactjs,vuejs' },
      ]}
    />
    <div className="about-start">
      <h1 className="abth1">About me</h1>
      <p className="abtbody">
        I'm a self taught javascript developer who understands hard things
        faster.I started to learn code initially by watching tutorials.One day i
        recognized that coding needs we need to think like computer and first we
        need to know how compiler recognized these code we write.In coding
        mostly don't taught how browser really works.Learning how browser render
        these code makes me better understand the hard concepts.
      </p>
    </div>

    <div className="social">
      <div className="social-start">
        <a
          href="https://medium.com/@saigowthamr"
          target="blank"
          className="icon"
        />
        <a
          href="https://twitter.com/saigowthamr"
          target="blank"
          className="icon"
        />

        <a
          className="icon"
          href="https://github.com/saigowthamr/"
          target="blank"
        />
        <a className="icon" href="mailto:saigowthamr@gmail.com" />
      </div>
    </div>
  </div>
)

export default About
