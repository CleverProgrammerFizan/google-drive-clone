import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';



function Sidebar() {

   


    return (
        <div className='sidebar'>
            <div className="content">
                <a className="link" href="https://drive.google.com/drive/">
                    <button className="upload__button"><AddIcon className="upload__icon" fontSize='large'></AddIcon><a className="upload__link" href="https://drive.google.com/drive/">New</a></button>
                </a>

                <div className="sidebar__buttons">

                    <button><InsertDriveFileOutlinedIcon className="sidebar__icons"></InsertDriveFileOutlinedIcon><a href="https://drive.google.com/drive/my-drive">My Drive</a> </button>
                    <button><DevicesOutlinedIcon className="sidebar__icons"></DevicesOutlinedIcon><a href="https://drive.google.com/drive/computers">Computers</a></button>
                    <button><PeopleAltOutlinedIcon className="sidebar__icons"></PeopleAltOutlinedIcon><a href="https://drive.google.com/drive/shared-with-me">Shared with me</a></button>
                    <button><QueryBuilderOutlinedIcon className="sidebar__icons"></QueryBuilderOutlinedIcon><a href="https://drive.google.com/drive/recent">Recent</a></button>
                    <button><StarBorderOutlinedIcon className="sidebar__icons"></StarBorderOutlinedIcon><a href="https://drive.google.com/drive/starred">Starred</a></button>
                    <button><DeleteOutlinedIcon className="sidebar__icons"></DeleteOutlinedIcon><a href="https://drive.google.com/drive/trash">Bin</a></button>


                </div>
            </div>
                <button className="storage"><CloudOutlinedIcon className="sidebar__icon"></CloudOutlinedIcon><a href="https://drive.google.com/drive/u/0/quota">Storage</a></button>
                <button className="buy__storage"><a href="https://one.google.com/storage?i=m&utm_source=drive&utm_medium=web&utm_campaign=g1_widget_eighty#upgrade">Buy storage</a></button>
                
        </div>
    )
}

export default Sidebar
