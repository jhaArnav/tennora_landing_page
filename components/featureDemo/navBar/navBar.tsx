import React from 'react';
import icon from "../../../pictures/icon.png";
import NavButton from './navButton';

import ListingsPage from '../listingsPage/body';
import LeadsPage from '../leadsPage/body';

const NavBar = ({ router }: {router?: (x: any)=>void}) => {
  return (
    <div className="flex justify-between items-center bg-black">
      <div className="cursor-pointer">
        <img src={icon.src} alt="Tennora Logo" className="w-14 px-2" />
      </div>
      <NavButton>LISTINGS</NavButton>
      <NavButton>LEADS</NavButton>
      <NavButton>MARKETING</NavButton>
      <NavButton>SCHEDULING</NavButton>
      <NavButton>DOCUMENTS</NavButton>
      <NavButton>ACCOUNT</NavButton>
    </div>
  );
};

export default NavBar;
