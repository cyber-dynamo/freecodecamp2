import React from 'react';
import '../App.css';

function Card(props) {
  let badgeText
  if (props.item.defeated ===true){
    badgeText="DEFEATED"
  }
  else {badgeText="Active"}
    return(
    <div className="card">
       {badgeText && <div className="card-badge"> {badgeText}</div>}
        <img src={props.item.img} alt="champion img" className="character-img"/>
        <div className="cardstats">
          <p>Champion: {props.item.champion}</p>
          <p>Home: {props.item.home}</p>
        </div>
        
    </div>
    )
}

export default Card;
