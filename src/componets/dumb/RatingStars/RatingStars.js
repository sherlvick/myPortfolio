import React from "react";


import starOff from "../../../assets/Images/star_off.png";
import starOn from "../../../assets/Images/star_on.png";

const RatingStars = (props) => {
    let countOfStarOff = 0;
    let countOfStarOn = 0;

    if(props.max && props.score){
        countOfStarOff = props.max-props.score;
        countOfStarOn = props.score;
    }

    let starElemArr = [];
    let i = 0;
    while(i<countOfStarOn){
        i++;
        starElemArr.push(<img src={starOn}/>);
    }
    i = 0;
    while(i<countOfStarOff){
        i++;
        starElemArr.push(<img src={starOff}/>);
    }
  return (
      <div>
          {starElemArr}
      </div>
    
  );
};

export default RatingStars;
