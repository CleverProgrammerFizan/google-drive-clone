import { Folder } from '@material-ui/icons'
import React from 'react'
import './Folders.css'


function Folders() {
    return (
        <div className='Folders'>
            <div className="folder__cards">
                <Folder className="folder__icon" />
                <h2>DEMO FOLDER 1</h2>
            </div>
            <div className="folder__cards">
                <Folder className="folder__icon" />
                <h2>DEMO FOLDER 2</h2>
            </div>
            <div className="folder__cards">
                <Folder className="folder__icon" />
                <h2>DEMO FOLDER 3</h2>
            </div>
            <div className="folder__cards">
                <Folder className="folder__icon" />
                <h2>DEMO FOLDER 4</h2>
            </div>
            <div className="folder__cards">
                <Folder className="folder__icon" />
                <h2>DEMO FOLDER 5</h2>
            </div>
            <div className="folder__cards">
                <Folder className="folder__icon" />
                <h2>DEMO FOLDER 6</h2>
            </div>
        </div>
    )
}

export default Folders
