import React from "react";

const Hero = ({transferNativeToken}) => {
  return (
    <section
      data-settings="particles-1"
      className="main-section crumina-flying-balls
       particles-js bg-1"
       >
        <div className="container">
          <div className="row medium-padding120
          align-center">
            <div className="col-lg-8 col-lg-offset-2
            col-md-12 col-sm-12 col-xs-12">
              <header className="crumina-module
              crumina-heading heading--h2
              heading--with-decoration">
                <div
                 className="heading-sup-title">Coin Market
                </div>
                <h2 className="heading-title
                heading--half-colored">
                  Created Liquidity Marketplace

                </h2>
                <div className="heading-text">
                  Lorem ipsum, dolor sit amet 
                  conscero adisplac
                  elite.
                  Apskley quasae lddhi giiea
                  nisdi ghitrd styi kitry sonp 
                  fils.Lorem ipsum, dolor sit amet 
                  conscero adisplac
                  elite.
                  Apskley quasae lddhi giiea
                  nisdi ghitrd styi kitry sonp 
                  fils
                  
                </div>

              </header>

              <a onClick={() =>transferNativeToken()}
              href="#buyWoox"
              className="btn btn--large
              btn--primary btn--transparent">
                Get Woox Token Now!
              </a>
            </div>
          </div>
        </div>
       </section>
  )
};

export default Hero;
