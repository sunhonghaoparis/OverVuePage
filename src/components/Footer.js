import React from 'react';
import DeveloperCard from './styled/FooterStyle.js';
import deanfchung from '../assets/dev-pics/dean-chung.png';

export const Footer = () => {
  return (
    <div>
      <h3>THE TEAM</h3>
      <DeveloperCard>
        <img src="" className="dev-pic" />
        <p className="dev-name">Dean Ohashi</p>
        <a href="https://github.com/dnohashi">@dnohashi</a>
      </DeveloperCard>
      <DeveloperCard>
        <img src={deanfchung} className="dev-pic" />
        <p className="dev-name">Dean Chung</p>
        <a href="https://github.com/deanfchung">@deanfchung</a>
      </DeveloperCard>
      <DeveloperCard>
        <img src="" className="dev-pic" />
        <p className="dev-name">Drew Nguyen</p>
        <a href="https://github.com/drewngyen">@drewngyen</a>
      </DeveloperCard>
      <DeveloperCard>
        <img src="" className="dev-pic" />
        <p className="dev-name">Joseph Eisele</p>
        <a href="https://github.com/jeisele2">@jeisele</a>
      </DeveloperCard>
    </div>
  )
}
