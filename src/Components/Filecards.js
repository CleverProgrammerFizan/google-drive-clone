import React from 'react'
import './Filecards.css'
import Folders from './Folders'

function Filecards() {
    return (
        <div className='filecards'>
            
           <div className="cards">
               <img className="file__icon" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85" alt="" />
               <h1>DEMO FILE 1</h1>
            </div>

           <div className="cards">
               <img className="file__icon" src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
               <h1>DEMO FILE 2</h1>
            </div>
            <div className="cards">
               <img className="file__icon" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
               <h1>DEMO FILE 3</h1>
            </div>

           <div className="cards">
               <img className="file__icon" src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
               <h1>DEMO FILE 4</h1>
            </div>    
            
        </div>
    )
}

export default Filecards
