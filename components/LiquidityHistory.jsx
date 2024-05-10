import React, {useState, useEffect} from "react";

//internal import 
import { shortenAddress } from "../Utils";
//import { network } from "hardhat";

const LiquidityHistory = ({GET_ALL_LIQUIDITY}) => {
  const [liquidity, setLiquidity] = useState([]);

  useEffect(()=> {
    try {
      GET_ALL_LIQUIDITY().then((item)=> {
        setLiquidity(item?.reverse());
      });
    } catch (error) {
      console.log("Please reload browser")
    }
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row medium-padding120">
          <div className="col-lg-12 col-md-12
          col-sm-12 colxs-12">
            <div className="mCustomScrollbar
            scrollable-responsive-table overflow-y"
            data-mcs-theme="dark"
            >
              <table
                className="pricing-table-wrap-table-blurring">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Token A</th>
                      <th>Token B</th>
                      <th>Address A</th>
                      <th>Address B</th>
                      <th>PoolAddress</th>
                      <th>Created</th>
                      <th>TransactionHash</th>
                    </tr>
                  </thead>

                  <tbody>
                    {liquidity?.map((liqudity,index) =>(
                        <tr
                          key ={index + 1}
                          className="crumina-module
                          crumina-pricing-table
                          pricing-table--style-table-blurring
                          c-brown"
                          >
                            <td>{index+1}</td>
                            <td >
                              <div className="pricing-thumb">
                              <img src={liqudity?.network
                              =="80001" 
                              ? "img/80001.png"
                              : liqudity?.network == "157" 
                              ? "img/80001.png"
                              :liqudity?.network
                              == "1" 
                              ? "img/1.png"  
                              :liqudity?.network == "5" ?
                              "img/1.png" : liqudity?.
                              network == "11155111" ? 
                              "img/1.png" : "img/logo-primary.png"
                              } alt="" 
                              className="woox-icon"
                              />
                              <h6 className="pricing-title">{liqudity?.tokenA}
                              <span>
                              {liqudity?.network
                              =="80001" 
                              ? "Mumbai"
                              : liqudity?.network == "157" 
                              ? "Polygon"
                              :liqudity?.network
                              == "1" 
                              ? "Etherium"  
                              :liqudity?.network == "5" ?
                              "Georila" : liqudity?.
                              network == "11155111" ? 
                              "Sepolia" : "woox"
                              } 
                              </span>
                              </h6>
                              </div>
                            </td>

                            <td>
                              <div className="currency-details-item">
                                <div className="value">{liqudity?.tokenB}</div>
                              </div>
                            </td>
                            <td>
                              <div className="currency-details-item">
                                <div
                                  onClick={() => 
                                  navigator.clipboard.writeText(
                                    liqudity?.tokenA_Address
                                  )
                                }
                                className="value c-primary"
                                >
                                  {shortenAddress(liqudity?.tokenA_Address)}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="currency-details-item">
                                <div
                                  onClick={() => 
                                  navigator.clipboard.writeText(
                                    liqudity?.tokenB_Address
                                  )
                                }
                                className={`value ${index % 2 === 0 ? "c-green-success" : "c-red-light"} `}
                                >
                                  {shortenAddress(liqudity?.tokenB_Address)}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="currency-details-item">
                                <div
                                  onClick={() => 
                                  navigator.clipboard.writeText(
                                    liqudity?.poolAddress
                                  )
                                }
                                className={`value  `}
                                >
                                  {shortenAddress(liqudity?.poolAddress)}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="currency-details-item">
                                <div
                                  className={`value`}
                                >
                                  {
                                    new Date(liqudity?.timeCreated * 1000)
                                    .toDateString()
                                  }
                                  
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href={
                                liqudity?.network
                                =="80001" 
                                ? `https://mumbai.polygonscan.com/tx/${liqudity?.
                                transactionHash}`
                                : liqudity?.network == "157" 
                                ? `https://polygonscan.com/tx/${liqudity?.
                                transactionHash}`
                                :liqudity?.network
                                == "1" 
                                ? `https://etherscan.io/tx/${liqudity?.
                                transactionHash}`  
                                :liqudity?.network == "5" 
                                
                                ?`https://goerli.etherscan.io/tx/${liqudity?.
                                transactionHash}`
                                : liqudity?.
                                network == "11155111"  
                                ?`https://sepolia.etherscan.io/tx/${liqudity?.
                                transactionHash}`
                                : `https://mumbai.polygonscan.com/tx/${liqudity?.
                                transactionHash}`
                              }
                              target="_blank"
                              className="btn btn--small btn--green-light"
                              >
                                Hash
                                </a> 
                              
                            </td>
                          </tr>
                      ))
                    }
                  </tbody>

                  <tfoot>
                    <tr>
                      <td colSpan={"8"}>
                        Lorem ipsum siy fghrt
                        fgjhr ghjy Dyegs jio ki lkef getua 
                        kitas monki lopwa hfif 
                        jsd efn uea effhefb loery
                        afedf efyh ytie 
                        a 
                        fea ffhir ijf efah 
                        fsefse , fsfs losfm.
                        MLksd Sdh ksdifsfs dfsf.
                      </td>
                    </tr>
                  </tfoot>
                </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default LiquidityHistory;
