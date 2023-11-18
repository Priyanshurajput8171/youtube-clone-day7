import React from 'react'
import {BiSolidMicrophone} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {GoSearch} from 'react-icons/go'
import {AiOutlineMenu} from 'react-icons/ai'
function Header() {
  return (
    <div>
        <div id="bigsc">
        <div id="lfsc">
            
            <button class="b1"><AiOutlineMenu /></button>
           
            <div id="b2">
                <img className="sc" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"/>
            </div>
        </div>
        <div id="misc">
            <input type="text" id="m1" placeholder="Search"/>
            <div id="search">
              <button id="mag"><GoSearch/></button>
              </div>
            
            <div id="m2">
            <button id="mic"><BiSolidMicrophone/></button>
            </div>
        </div>
        <button id="risc">
          <CgProfile/> 
          <span class="signup">
            <b>Sign up</b>
          </span>
        </button>
        </div>
    </div>
  )
}

export default Header
