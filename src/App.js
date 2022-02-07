import { useState } from "react";
import Logo from "./logo.svg";
import NFT_Image from "./assets/img/nft.gif";
import ETH from "./assets/img/eth.png";

import Onboard from "bnc-onboard";
import Web3 from "web3";

const onboard = Onboard({
  dappId: process.env.REACT_APP_API_KEY, // [String] The API key created by step one above
  networkId: 4, // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: (wallet) => {
      new Web3(wallet.provider);
      // console.log(`${wallet.name} is connected!`);
    },
  },
});

async function login() {
  await onboard.walletSelect();
  await onboard.walletCheck();
}

function App() {
  const [counter, setcounter] = useState(1);

  const add = () => {
    setcounter(counter + 1);
  };

  const substract = () => {
    if (counter === 1) return;
    setcounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={Logo} height="32px" width="32px" alt="" />
          <span>Nft Offers</span>
        </div>
        <div className="links">
          <div className="link">About</div>
          <div className="link">Instagram</div>
          <div className="link">Facebook</div>
          <div className="link">Twitter</div>
        </div>
      </div>
      <div className="main">
        <div className="banner">
          <img className="nft_imge" src={NFT_Image} alt="" />
          <div className="sales">
            <p className="small_text">LIMITED SALE IS NOW LIVE</p>
            <p className="big_text">MINT YOUR NFT NOW</p>
            <p className="gray_text">5 MAX PER WALLET</p>
            <div className="eth_price">
              <img className="coin_img" src={ETH} alt="" />
              <p className="price">0.29 ETH</p>
            </div>
            <div className="counter">
              <button className="count_button" onClick={substract}>
                -
              </button>

              <p>{counter}</p>
              <button className="count_button" onClick={add}>
                +
              </button>
            </div>
            <p className="sales_count">777 / 999 MINTED</p>
            <button className="connect" onClick={login}>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
