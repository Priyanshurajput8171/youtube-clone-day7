import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header'
import {AiOutlineRight} from 'react-icons/ai'
import {GoHomeFill} from 'react-icons/go'
import {FiPlayCircle} from 'react-icons/fi'
import {BsCollectionPlay} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlinePlaySquare} from 'react-icons/ai'
import { HiSignal } from "react-icons/hi2";
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiSolidLike} from 'react-icons/bi'
import videosJson from './my images/useful-data-main/videos.json'
import { Link } from 'react-router-dom'
function Videogrid(props){
    let myvideo=props.myvideo
    return(
      <div className="a">
        <div>
          {/* <img className='tbn' src={myvideo.thumbnail.url} /> */}
          <Link to={`/Video?id=${myvideo.id}`}><img className='tbn' src={myvideo.thumbnail.url} /></Link>
          </div>
          <div className="tittle">
            <div>
              <img src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" height={'60px'} width={'60px'}></img>
            </div>
            <div>
              <h3 id="vid-name">
              {myvideo.title}
              </h3>
              <p class="pg">{myvideo.channelName}</p>
              <p class="pg">375k views • {myvideo.uploadedAt} ago</p>
            </div>
          </div>
      </div>
    )
  }
function Home() {
    return (
      <div className="App">
          <Header />
      <div id="dsc">
        <div id="homesc">
        <button class="side-btn"><GoHomeFill />
          <span class="side-btn-lable">
            <b>Home</b>
          </span>
        </button>
        <button class="side-btn"><FiPlayCircle />
          <span class="side-btn-lable">
            <b>Shorts</b>
          </span>
        </button>
        <button class="side-btn"><BsCollectionPlay />
          <span class="side-btn-lable">
            <b>Subscription</b>
          </span>
        </button>
        <hr />
        <button class="side-btn">
          <span class="you">
            <b>You</b>
          </span>
          <AiOutlineRight />
        </button>
        <button class="side-btn"><RxAvatar />
          <span class="side-btn-lable">
            <b>Your channel</b>
          </span>
        </button>
        <button class="side-btn"><AiOutlinePlaySquare />
          <span class="side-btn-lable">
            <b>Your videos</b>
          </span>
        </button>
        <button class="side-btn"><AiOutlineClockCircle />
          <span class="side-btn-lable">
            <b>Watch Later</b>
          </span>
        </button>
        <button class="side-btn"><BiSolidLike />
          <span class="side-btn-lable">
            <b>Liked videos</b>
          </span>
        </button>
        <hr/>
        <h5 className='sub'>Subscriptions</h5>
        <button class="side-btn" ><span class="side-btn-lable">
            <b>Triggered insaan</b>
          </span><span className='subscription'><HiSignal/></span>
          </button>
        <button class="side-btn">
        <span class="side-btn-lable">
            <b>Zee news</b>
          </span>
        <span className='subscription'><HiSignal/></span>
        </button>
        <button class="side-btn">
        <span class="side-btn-lable">
            <b>Exploin...</b>
          </span>
        <span className='subscription'><HiSignal/></span>
        </button>
        <button class="side-btn">
        <span class="side-btn-lable">
            <b>business</b>
          </span> 
        <span className='subscription'><HiSignal/></span>
        </button>
        </div>
        <div id="secsc">
          <div id="upper-tags">
            <button class="upper-tags">All</button>
            <button class="upper-tags">Triggered Insaan</button>
            <button class="upper-tags">Grand thief auto 5</button>
            <button class="upper-tags">live</button>
            <button class="upper-tags">Chess Openings</button>
            <button class="upper-tags">Movies</button>
            <button class="upper-tags">Music</button>
            <button class="upper-tags">Sports</button>
            <button class="upper-tags">BGMI</button> 
            <button class="upper-tags">Valorent</button>
            <button class="upper-tags">Explorin</button>
            <button class="upper-tags">More...</button>
          </div>
          
           {videosJson.map((video)=>{
            return <Videogrid myvideo={video} />
           })}
        </div>
      </div>
      </div>
    )
  }
export default Home