import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
function Navbar() {
  return (
    <div>
      <div class="navbar">
          <div id="div1"> 
            <button id="nav1"><AiOutlineMenu/></button>
            <div id="nav2"></div>
          </div>
          <div id="div2"> 
            <div class='search'><input class="search-amazon" placeholder="   search"/>
            <button class='search-icon'><AiOutlineSearch/></button>
            </div>
            <button id="nav4"><BsFillMicFill/></button>
           </div> 
          <button id="div3"><span class='sign-logo'><CgProfile/></span><span class='sign'>Sign in</span></button>
         
        </div>
    </div>
  )
}

export default Navbar;
