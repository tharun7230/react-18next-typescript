import React, {FC}  from 'react';

import Header from '../containers/Header';
import { translate } from '../i18n';

const HomePage: FC = () => {

  return(
  
      <Header fixed transparent />
      <section className="intro">
        <div className="intro__overlay"></div>
        <div className="intro__body">
          <h1>Car Garage</h1>
          <p>{translate('introText', language)}</p>
        </div>
      </section>
   );
}

export default HomePage;