import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { translate } from '../i18n';

const PageNotFound: FC = () => {
  return (
    <div className="page-404">
      <div className="container">
        <h1>404</h1>
        <p>{translate("pageNotFound", language)}</p>
        <p>
          <Link to="/">{translate("returnToHomepage", language)}</Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;