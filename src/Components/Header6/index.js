import React, { useState } from "react";
import {
  Header,
  HeaderBottom,
  HeaderCenter,
  HeaderLeft,
  HeaderMain,
  HeaderNav,
  HeaderRight,
} from "./header.styles";

export default function Header6() {
  const [clicked, setClicked] = useState(true);

  return (
    <Header
      className={clicked ? "activate" : ""}
      style={{
        backgroundImage: `url("./Image.png")`,
      }}
    >
      <HeaderNav>
        <HeaderLeft>
          <button onClick={() => setClicked((clicked) => !clicked)}>
            {clicked ? (
              <img src="/IconsClose.png" alt="menu" className="menu-icon" />
            ) : (
              <img src="/IconsGrid.png" alt="menu" className="menu-icon" />
            )}
          </button>
          {clicked ? (
            <img src="/Logo.png" alt="menu" className="logo-icon" />
          ) : (
            <img src="/LogoWhite.png" alt="menu" className="logo-icon" />
          )}
        </HeaderLeft>

        <HeaderCenter className={clicked ? "activate" : ""}>
          <div>
            <a href="https://google.com">Fb</a>
            <div className="separator"></div>
            <a href="https://google.com">Tw</a>
            <div className="separator"></div>
            <a href="https://google.com">In</a>
          </div>
        </HeaderCenter>

        <HeaderRight className={clicked ? "activate" : ""}>
          <button className="btn btn-prim">LOGIN</button>
          <button className="btn btn-secn"> GET STARTED</button>
        </HeaderRight>
      </HeaderNav>

      <HeaderMain className={clicked ? "activate" : ""}>
        <>
          <div className="item">
            <h1 className="item-name">Beoplay H9i</h1>
            <button className="item-btn">Buy Now</button>
          </div>
          <div className="annonce">
            Out Now <div className="line"></div>
          </div>
        </>

        <div className="mainHidden">
          <div className="mainHidden__left">
            <div className="socials">
              <a href="https://google.com">
                <img src="/IconsSocialsFacebook.png" alt="facebook icon" />
              </a>
              <a href="https://google.com">
                <img src="/IconsSocialsTwitter.png" alt="twitter icon" />
              </a>
              <a href="https://google.com">
                <img src="/IconsSocialsFacebook.png" alt="intagram icon" />
              </a>
            </div>

            <div className="address">
              <p className="city">Los Angeles</p>
              <p className="ref">
                248 N Rodeo DR, Beverly Hills,
                <br />
                CA 902010
              </p>
            </div>

            <div className="address">
              <p className="city">San Francisco</p>
              <p className="ref">
                156 Geary St, San Francisco,
                <br />
                CA 90108
              </p>
            </div>
          </div>

          <div className="mainHidden__right">
            <ul>
              <li>
                <a href="http://google.com">About</a>
              </li>
              <li>
                <a href="http://google.com">Portfolio</a>
              </li>
              <li>
                <a href="http://google.com">Blog</a>
              </li>
              <li>
                <a href="http://google.com">Careers</a>
              </li>
              <li>
                <a href="http://google.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </HeaderMain>

      <HeaderBottom className={clicked ? "activate" : ""}>
        <button className="video">
          <img src="/Play.png" alt="video" />
          Play Video
        </button>

        <div className="slide-buttons">
          <button>
            <img src="ArrowLeft.png" alt="left arrow" />
          </button>
          <button>
            <img src="ArrowRight.png" alt="right arrow" />
          </button>
        </div>
      </HeaderBottom>
    </Header>
  );
}
