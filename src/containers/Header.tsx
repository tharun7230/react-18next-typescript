import React from 'react';


import { setLanguage } from '../store/actions/langActions';
import { translate } from '../i18n';

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  

  if(fixed) {
    headerClass += ' header--fixed';
  }

  if(transparent) {
    headerClass += ' header--transparent';
  }


    if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(false);
    }
  

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }



export default Header;