import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'



import './porfolio.css'

const SecondPage = () => (
  <div className="portfolio">
    <Helmet
      title="Portfolio || Sai gowtham"
      meta={[
        { name: 'description', content: 'portfolio site' },
        { name: 'keywords', content: 'web developer, portfolio' },
      ]}
    />
    <div className="item">
      <div className="heading">
        <h2>
          Weather App <span className="heading-span">(vuejs)</span>
        </h2>
      </div>

      <div className="contentlinks">
        <a
          href="http://com.weather.vue.s3-website.ap-south-1.amazonaws.com/"
          className="a-port"
        >
          Demo
        </a>
        <a
          href="https://github.com/saigowthamr/WeatherApp-vuejs"
          className="a-port"
        >
          Source Code
        </a>
      </div>
    </div>
    <div className="item">
      <div className="heading">
        <h2>
          Roll & Dice Game <span className="heading-span">(vuejs)</span>
        </h2>
      </div>
      <div className="contentlinks">
        <a href="#" className="a-port dis">
          Demo
        </a>
        <a
          href="https://github.com/saigowthamr/Roll-and-Dice-game"
          className="a-port"
        >
          Source Code
        </a>
      </div>
    </div>
    <div className="item">
      <div className="heading">
        <h2>
          Simple Youtube search <span className="heading-span">(reactjs)</span>
        </h2>
      </div>
      <div className="contentlinks">
        <a href="#" className="a-port dis">
          Demo
        </a>
        <a
          href="https://github.com/saigowthamr/Youtube-Search"
          className="a-port"
        >
          Source Code
        </a>
      </div>
    </div>
    <div className="item">
      <div className="heading">
        <h2>Simple Page using Grid layout</h2>
      </div>
      <div className="contentlinks">
        <a
          href="https://saigowthamr.github.io/Html-Css-grid/"
          className="a-port"
        >
          Demo
        </a>
        <a
          href="https://github.com/saigowthamr/Html-Css-grid"
          className="a-port"
        >
          Source Code
        </a>
      </div>
    </div>
    <div className="item">
      <div className="heading">
        <h2>
          React Auth <span className="heading-span">(reactjs)</span>
        </h2>
      </div>
      <div className="contentlinks">
        <a href="#" className="a-port dis">
          Demo
        </a>
        <a
          href="https://github.com/saigowthamr/React-Authentication"
          className="a-port"
        >
          Source Code
        </a>
      </div>
    </div>
    <div
      className="item"
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'capitalize',
        backgroundColor: 'white',
        fontSize: '2rem',
      }}
    >
      Jwt auth tokens Using Nodejs
      <div className="contentlinks">
        <a href="#" className="a-port dis">
          Demo
        </a>
        <a
          href="https://github.com/saigowthamr/Jwt-Authentication-Nodejs-"
          className="a-port"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
)

export default SecondPage

{
  /* <Link to="/">Go back to the homepage</Link> */
}
