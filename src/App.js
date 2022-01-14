import { useState } from "react";
import React from "react";
import linkOut from "./icon-link-out.svg";

// patternType, companyType, platformType, deviceType

function App({ props }) {
  // Setting state hooks for each of the 4 counters

  const [pattern, setPattern] = useState(0);
  const [company, setCompany] = useState(0);
  const [platform, setPlatform] = useState(0);
  const [device, setDevice] = useState(0);

  // Setting each constract's random

  const handlePattern = () => {
    let randomPatternType = Math.floor(Math.random() * 20);

    setPattern(randomPatternType);

    console.log(randomPatternType, pattern);

    return pattern;
  };
  const handleCompany = () => {
    let randomCompanyType = Math.floor(Math.random() * 12);

    setCompany(randomCompanyType);

    console.log(randomCompanyType);

    return company;
  };
  const handlePlatform = () => {
    let randomPlatformType = Math.floor(Math.random() * 12);

    setPlatform(randomPlatformType);

    console.log(randomPlatformType, platform);

    return platform;
  };

  const handleDevice = () => {
    let randomDeviceType = Math.floor(Math.random() * 4);

    setDevice(randomDeviceType);

    console.log(randomDeviceType);

    return device;
  };

  const handleRandom = () => {
    handlePattern();
    handleCompany();
    handlePlatform();
    handleDevice();
  };

  // Below is the return values for the App component

  return (
    <div className="site-wrapper-1">
      <div className="section-container-1">
        <h1 className="header-title-1">UI Mission</h1>
      </div>

      <div className="explanation-container-1">
        <p className="body-paragraph-1">
          A site where you can select UI design missions with{" "}
            randomized combinations of constraints.
        </p>
      </div>

      <div className=" brief-container-1">
        <p className="brief-header-1">The Brief</p>
        <div className="mission-container-1">
          <p className="">
            Design a{" "}
            <span className="constraint-highlight-1">
              {props.pattern[pattern]}
            </span>{" "}
            for a{" "}
            <span className="constraint-highlight-1">
              {props.company[company]}
            </span>{" "}
            on the{" "}
            <span className="constraint-highlight-1">
              {props.device[device].name}
            </span> using{" "}            <span className="constraint-highlight-1">
              {props.device[device].resource}
            </span> 
            .
          </p>
        </div>

        <div className="brief-spacer-1"></div>
        <div className="brief-spacer-1"></div>

        <p className="brief-header-1">Helpful Links to get started</p>
        <a className="brief-link-2" href={props.device[device].link} target="_blank" rel="noreferrer"><div className="mission-container-1">
        <p className="brief-links-1">{props.device[device].resource}</p>
          <img src={linkOut} alt={"something"} className="linkOut-1" />
        </div></a>

        <div className="brief-spacer-1"></div>

        <a className="brief-link-2" href="https://designvault.io/" target="_blank" rel="noreferrer"><div className="mission-container-1">
        <p className="brief-links-1">Design Vault</p>
          <img src={linkOut} alt={"something"} className="linkOut-1" />
        </div></a>

        <div className="brief-spacer-1"></div>

        <a className="brief-link-2" href="https://www.nngroup.com/articles/" target="_blank" rel="noreferrer"><div className="mission-container-1">
          <p className="brief-links-1">Nielsen & Norman Group Articles</p>
          <img src={linkOut} alt={"something"} className="linkOut-1" />
        </div></a>

        <div className="brief-spacer-1"></div>

        <a className="brief-link-2" href="https://articles.uie.com/" target="_blank" rel="noreferrer"><div className="mission-container-1">
          <p className="brief-links-1">Usability Interface Engineering</p>
          <img src={linkOut} alt={"something"} className="linkOut-1" />
        </div></a>

        <div className="brief-spacer-1"></div>

        <p className="footer-container-1">Courtesy of UI-mission.com</p>
      </div>

      <div className="section-container-1">
        <button className="randomize-button-1" onClick={handleRandom}>
          Click here to randomize your mission
        </button>
      </div>

      <div className="brief-spacer-1"></div>
      <div className="brief-spacer-1"></div>
      <div className="brief-spacer-1"></div>

      {/* <p className="footer-container-1">UI-Mission.com</p> */}
    </div>
  );
}

export default App;
