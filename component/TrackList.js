import React from 'react';
import { BsVolumeUpFill,BsMusicNoteList, BsFillVolumeUpFill } from 'react-icons/bs';
import { FaDesktop } from 'react-icons/fa';
import Track from "../img/track.png";
function TrackList() {
  return (
    <div className='trackList'>
      <div className='top'>
        <img src= {Track} alt=''/>
        <p className='trackName'>
            Sample Name <span className='trackSpam'>Article</span>
        </p>
      </div>
      <div className='bottom'>
            <i>
            <BsFillVolumeUpFill/>
            </i>
            <input type='range'/>
            <i>
                <BsMusicNoteList/>
            </i>
            <i>
                <FaDesktop/>
            </i>
      </div>
    </div>
  );
}

export default TrackList;
