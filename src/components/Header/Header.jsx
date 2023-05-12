import React from 'react'

export const Header = () => {
  return (
    <header>
    <div class="container"> 
      <h1>Harry Potter</h1>
      <p>View all characters from the Harry Potter universe</p>
      <form class="searching">
        <div class="imput" >
            <p style="color: #818182;" >Name</p>
            <input  type="searchName" placeholder="Search Name"/>
        </div>
        <div class="select" >
            <p style="color: #818182;">School</p>
           <select>
              <option class="optionDefolt" value="">Choose one</option>
           </select>
        </div>
      </form>
    </div>
  </header>
  )
}
