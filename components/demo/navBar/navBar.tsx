import React from 'react';
import icon from "../../../pictures/icon.png";
import NavButton from './navButton';

const NavBar = ({ router }: {router?: (x: any)=>void}) => {
  return (
    <div className="flex justify-between items-center bg-black">
      <div className="cursor-pointer">
        <img src={icon.src} alt="Tennora Logo" className="w-14 px-2" />
      </div>
      <NavButton onClick={()=>{if (router) {router("listings")}}}>LISTINGS</NavButton>
      <NavButton onClick={()=>{if (router) {router("leads")}}}>LEADS</NavButton>
      <NavButton onClick={()=>{if (router) {router("marketing")}}}>MARKETING</NavButton>
      <NavButton onClick={()=>{if (router) {router("scheduling")}}}>SCHEDULING</NavButton>
      <NavButton onClick={()=>{if (router) {router("documents")}}}>DOCUMENTS</NavButton>
      <NavButton>ACCOUNT</NavButton>
    </div>
  );
};

export default NavBar;
