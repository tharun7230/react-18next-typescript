import React, { FC } from 'react';

import Header from '../containers/Header';
import aboutImg from '../assets/about.jpg';
import { translate } from '../i18n';
import { RootState } from '../store';

const About: FC = () => {

  return(
    
      <Header />
      <section className="about">
        <div className="container">
          <h1>{translate('about', language)}</h1>
          <img src={aboutImg} alt="" />
          <p>{translate('aboutUsText', language)}</p>
        </div>
      </section>
  );
}

export default About;