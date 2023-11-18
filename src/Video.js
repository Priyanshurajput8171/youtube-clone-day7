import React, { useEffect, useState } from 'react'
import Header from './Header'
import {LiaThumbsDown, LiaThumbsUp, LiaDownloadSolid} from 'react-icons/lia'
import {PiShareFatLight} from 'react-icons/pi'
function VideoInfo(props){
  const video = props.currVideo;
  console.log(props)
  return (
    <>
      <h5 className='video-title'>
        {video.title}
      </h5>
      <div className='video-details'>
        <div className='channel-info'>
          <img src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" height={'30px'} width={'30px'}/>
          <div className='channel-name'>
            <h6 className='margin-0'>Zee Music Company</h6>
            <p className='margin-0 subscribers'>467K subscribers</p>
          </div>
          <button className='subscribe'>Subscribe</button>
        </div>
        <div className='video-action-buttons'>
          <button>
            <LiaThumbsUp size={'1.4rem'} />{video.likes} | <LiaThumbsDown size={'1.4rem'} /></button>
          <button>
            <PiShareFatLight size={'1.4rem'}/>
            Share</button>
          <button>
            <LiaDownloadSolid size={'1.4rem'}/>
            Download</button>
        </div>
        
      </div>
      <div className='video-desc'>
          <p> <span className='view'>986M views &nbsp; 1 year ago</span> #charlieputh #LewisCapaldi #ShawnMendes</p>
          <p>“Memories” is out now:</p>
          <a href="https://smarturl.it/MemoriesMaroon5">https://smarturl.it/MemoriesMaroon5</a>
          <p>...more</p>
        </div>
        <h4 className='comments'> <span className='commentspan'>598,762 Comments</span></h4>
        <input type='text' placeholder='Add a comment...' className='addcomment'/>
        <hr/>
    </>
  );
}

function Video() {
  const [currVideoId, setCurrentVideoId] = useState("");
  const [currVideo, setCurrVideo] = useState({})
  const [videos, setVideos] = useState([]);

  const url = "http://localhost:5500/videos"

  const getVideos = async() => {
      try{
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setVideos(json.videos);

          let currId = (new URL(window.location)).searchParams.get('id');

          for(let i = 0; i < json.videos.length; i++){
            console.log(json.videos[i].videoId, " | ", currId)
            if(json.videos[i].videoId == currId){
              console.log("matched")
              setCurrVideo(json.videos[i]);
              break;
            }
          }

      }catch(error){
          console.log("Error", error)
      }
  };
  useEffect(()=>{
      let address = new URL(window.location);
      let queryParameters = address.searchParams;
      let currentVideoId = queryParameters.get("id");
      // for (let i=0;i<video.length)
      setCurrentVideoId(currentVideoId);

      getVideos();
  }, []);
  return (
    <div>
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
          <iframe className='iframe-video' src={`https://www.youtube.com/embed/${currVideoId}?si=8TyAKqTfvtCYcIdO?rel=0&mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <VideoInfo currVideo={currVideo} />
        </div>
        <div className='suggestions'>
          <p>Suggested Videos:</p>
          {videos.map((video) => {
              return <currVideoId video={video} 
              setVideoId={setCurrentVideoId} 
              setVideo={setCurrVideo}/>
          })}
          <div className='svdo'>
            <div className='svdobox1'>
            <div className='svdo1'>
            <a href="https://www.youtube.com/watch?v=AX6OrbgS8lI">
            <img src="https://i.ytimg.com/vi/AX6OrbgS8lI/mqdefault.jpg" alt="Description of the image" height={'100%'} width={'100%'}/>
            </a>
            </div>
            <div className='svdo1'>
            <a href="https://www.youtube.com/watch?v=TuUVVKVdZm4">
            <img src="https://i.ytimg.com/vi/TuUVVKVdZm4/maxresdefault.jpg" alt="Description of the image" height={'100%'} width={'100%'}/>
            </a>
            </div>
            <div className='svdo1'>
            <a href="https://www.youtube.com/watch?v=RBumgq5yVrA">
            <img src="https://i.ytimg.com/vi/RBumgq5yVrA/maxresdefault.jpg" alt="Description of the image" height={'100%'} width={'100%'}/>
            </a>
            </div>
            <div className='svdo1'>
            <a href="https://www.youtube.com/watch?v=jJPMnTXl63E">
            <img src="https://i.ytimg.com/vi/jJPMnTXl63E/maxresdefault.jpg" alt="Description of the image" height={'100%'} width={'100%'}/>
            </a>
            </div>
            <div className='svdo1'>
            <a href="https://www.youtube.com/watch?v=P6pQcjC2igs">
            <img src="https://i.ytimg.com/vi/VbG7LfdROOA/maxresdefault.jpg" alt="Description of the image" height={'100%'} width={'100%'}/>
            </a>
            </div>
            <div className='svdo1'>
            <a href="https://www.youtube.com/watch?v=SmaY7RfBga">
            <img src="https://i.ytimg.com/vi/SmaY7RfBgas/maxresdefault.jpg" alt="Description of the image" height={'100%'} width={'100%'}/>
            </a>
            </div>
            </div>
            <div className='svdobox2'>
            <div className='svdo2'>
              <h5>AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video)</h5>
              <p>AUR</p>
              <p>40M views . 10 Jun 2023</p>
            </div>
            <div className='svdo2'>
            <h5>Saiyyan - Kailash Kher| Paresh Kamath| Naresh Kamath | Jhoomo Re</h5>
            <p>SonyMusicIndiaVEVO</p>
            <p>113M views . 14 May 2013</p>
            </div>
            <div className='svdo2'>
            <h5>Passenger | Let Her Go (Official Video)</h5>
              <p>Passenger</p>
              <p>3.5B views . 26 Jul 2011</p>
            </div>
            <div className='svdo2'>
            <h5>Powfu - death bed (coffee for your head) (Official Video) ft. beabadoobee</h5>
              <p>Powfu</p>
              <p>657M views . 1 Apr 2020</p>
            </div>
            <div className='svdo2'>
            <h5>Timeless (Official Video) Raavi Gill | Gur Sidhu | Punjabi Song</h5>
              <p>Brown town Music</p>
              <p>56M views . 27 Jun 2021</p>
            </div>
            <div className='svdo2'>
            <h5>Anuv Jain - GUL (Studio)</h5>
              <p>Anuv Jain</p>
              <p>37M views . 15 Jul 2023</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
