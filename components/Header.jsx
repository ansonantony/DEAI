
import React from "react";

import {HeaderICON} from "./index";
import { shortenAddress } from "../Utils";

const Header = ({setOpenAddPool, setOpenAllLiquidity, connect,
   address}) => {
  return (
    <header className="header" id="site-header">
      <div className="container">
        <div className="header-content-wrapper">
          <nav id="primary-menu" className="primary-menu">
            
            <ul className="primary-menu-menu">
              <li onClick={() => setOpenAddPool(true)}
              className="menu-item-has-children">
                <a>Add Pool</a>
              </li>
              <li onClick={() => setOpenAllLiquidity(true)}
              className="menu-item-has-children">
                <a>Add Liquidity</a>
              </li>
              <li  className="menu-item-has-children">
                <a>Coin Market</a>
              </li>
              <li style={{marginRight:"400px"}} className="menu-item-has-children">
                <a href="#tokenBuy"> Buy Dupe Token</a>
              </li>
              
              {
                address ? (
                  <a onClick={() => navigator.clipboard
                    .writeText(address)}
                    className="btn btn--large btn--primary
                    btn--transparent">
                    {shortenAddress(address)}
                  </a>
                ) : (
                  <a 
                    onClick={() => connect() }
                    className="btn btn--large btn--primary
                    btn--transparent">
                      Connect
                    </a>
                )
              }

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
