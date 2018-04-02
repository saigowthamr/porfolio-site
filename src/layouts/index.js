import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="row">
    <Helmet
      title="Home || Sai gowtham"
      meta={[
        { name: 'description', content: 'portfolio site' },
        { name: 'keywords', content: 'web developer, portfolio' },
      ]}
    />
    <div className="col-1">
      <Header />
    </div>

    <div className="col-2">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
