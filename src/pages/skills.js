import React from 'react';
import Helmet from 'react-helmet';

import './skills.css'

const Skills = () => (
  <div className="main">
    <Helmet
      title="Skills || Sai gowtham"
      meta={[
        { name: 'description', content: 'portfolio site' },
        { name: 'keywords', content: 'web developer, portfolio' },
      ]}
    />
    <div className="start">
      <div className="row-1">
        <ul className="ul-1">
          <li className="li-1 li--1">Html5</li>
          <li className="li-1 li--2">Css3</li>
          <li className="li-1 li--3">JavaScript</li>
        </ul>
      </div>
      <div className="row-2">
        <ul>
          <li className="li-1 li--4">React</li>
          <li className="li-1 li--5">Angular</li>
          <li className="li-1 li--6">Vuejs</li>
          <li className="li-1 li--7">Nodejs</li>
          <li className="li-1">Rest apis</li>
          <li className="li-1 li--8">Aws</li>
        </ul>
      </div>
      <div className="row-2">
        <ul>
          <li className="li-1 li--9">Firebase</li>
          <li className="li-1 li--10">Mongodb</li>
          <li className="li-1 li--11">Stenciljs</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Skills
