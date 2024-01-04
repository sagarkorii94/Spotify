import React, {useEffect} from 'react';
import "../Styles/RightMenu.css";
import Banner from "../Components/Banner";
import { FaUsers } from 'react-icons/fa';
import AudioList from "./AudioList";
function RightMenu() {

  useEffect = (() => {
    const allLi = document.querySelector('.rightList').querySelectorAll('li');

     function changeMenuActive ()
     {
      allLi.forEach((n)=>n.classList.remove("active"));
      this.classList.add("active");
     }
    allLi.forEach((n) => n.addEventListner('click',changeMenuActive))
  },[]);
  
  return (
    <div className= "rightMenu">
      <Banner/>
      <div className='rightList'>
        <ul>
          <li>
            <a href=''>Popular</a>
          </li>
          <li>
            <a href=''>Albums</a>
          </li>
          <li>
            <a href=''>Songs</a>
          </li>
          <li>
            <a href=''>Fans</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
        </ul>

        <p><i><FaUsers/></i>15.6M <span>Followers</span></p>
      </div>
      <AudioList/>
    </div>
  )
}

export default RightMenu;
