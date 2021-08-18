import React from 'react'
import './Header.css'
import AppsIcon from '@material-ui/icons/Apps';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';




function Header() {

    return (
        <div className="header">
            <img className="header__logo" src="https://bit.ly/3kVSOpH" alt="header__logo" />

            <input className="header__search"  placeholder="Search In Drive" type="text" />

                <HelpOutlineOutlinedIcon className="icons__header" >
                    <button className='button__left1'>Click me</button>
                </HelpOutlineOutlinedIcon>
                

                <SettingsOutlinedIcon className="icons__header">
                    <button className='button__left2'>click me</button>
                </SettingsOutlinedIcon>

                <AppsIcon className="icons__header">
                    <button>Click me</button>
                </AppsIcon>

                <img className='header__avatar' src='https://lh3.googleusercontent.com/ogw/ADea4I6CHBL6z8jimZtgWaBxIGf1lKifI5FsGdvweAfy7w=s83-c-mo' alt='Profile-pic' />
        </div>
    )
}

export default Header
