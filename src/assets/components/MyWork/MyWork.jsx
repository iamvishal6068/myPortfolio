import React from "react";
import "./MyWork.css";
import themePattern from "../../../assets/components/MyWork/theme_pattern.svg";
import arrowicon from "../../../assets/components/MyWork/arrow_icon.svg";
import Mywork_data from "../../../assets/components/MyWork/Mywork_data.js";

function MyWork() {
  return (
    <div id="work" className='mywork'>
        <div className="mywork-title"> 
            <h1>My Latest Work</h1>
            <img src={themePattern} alt=''/>
        </div>
      <div className="mywork-container">
        {Mywork_data.map((work, index)=>{
            return <img key={index} src={work.w_img} alt=''/>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowicon} alt=""/>
      </div>
    </div>
  )
}

export default MyWork
