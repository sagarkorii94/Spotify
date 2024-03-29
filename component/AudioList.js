import React,{useState,useEffect}from 'react';
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';
import Songs  from './Songs';
import MusicPLayer from './MusicPLayer';
function AudioList() {
  const [songs,setSongs] = useState(Songs);
  const [song,setSong] = useState(Songs[0].song);
  const [img,setImage] = useState(Songs[0].imgSrc);
  
  useEffect = (() => {
    const songs = document.querySelectorAll('.songs');

     function changeMenuActive ()
     {
      songs.forEach((n)=>n.classList.remove("active"));
      this.classList.add("active");
     }
    songs.forEach((n) => n.addEventListner('click',changeMenuActive))
  },[]);
 
  
  const changeFavourite =(id)=>{
    Songs.forEach(song=>{
      if(song.id == id){
        song.favourite = !song.favourite;
      }
    });
    setSong([...Songs]);
  }

  const setMainSong =(songSrc,imgSrc)=>{
    setSong(songSrc);
    setImage(imgSrc);
  }

  return (
    <div className='audioList'>
      <h2 className='title'>
        The List <span>{`${Songs.length} songs`}</span>
      </h2>
      <div className='songsContainer'>
        
        {
            songs && songs.map((song,index)=>(
                <div className='songs' key={song?.id}
                onClick={()=>setMainSong(song?.song,song?.imgSrc
                )}>
                <div className='count'>{`#${index+1}`}</div>
                <div className='song'>
                  <div className='imgBox'>
                    <img src={song?.img} alt=''/>
                  </div>
                  <div className='section'>
                    <p className='songName'>
                         {song?.songName}
                        <span className='spanArtist'> {song?.artist}</span>
                    </p>
                    <div className='hits'>
                        <p className='hit'>
                            <i><FaHeadphones/> 95,500,102</i>
                        </p>
                        <p className='duratioon'>
                            <i><FaRegClock/> 3.05</i>
                        </p>
                        <div className="favourite"
                        onClick={()=>changeFavourite(song?.id)}>
                          {
                            song?.favourite?(
                            <i className='hm'><FaHeart/></i>
                            ):(<i><FaRegHeart/></i>)
                          }
                            
                            
                        </div>
                    </div>
                </div>  
                </div>
            </div>
            ))
        }
      </div>
      <MusicPLayer song={song} imgSrc={img}/>
    </div>
  )
}

export default AudioList;
