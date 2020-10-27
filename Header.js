import React from 'react';
import "./header.css";
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import { Avatar } from "@material-ui/core";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://i.imgur.com/oFgkGUI.png" />
            </div>
            <div className="header__middle">
                <div className="header__option">
                    <h3>Dashboard</h3>
                </div>
                <div className="header__option header__option--active">
                    <h3>Find Experts</h3>
                </div>
                <div className="header__option">
                    <h3>Discussion</h3>
                </div>




            </div>
            <div className="header__right">
                <div className="header__info">
                    <NotificationsNoneRoundedIcon />

                </div>
                <div className="header__info">

                    < SmsRoundedIcon />
                </div>



                <div className="header__info">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrHeEfcVizZ_ax2xoJhwLwrrOsQsMYW2X0Hg&usqp=CAU" />

                    <ExpandMoreRoundedIcon />
                </div>

            </div>

        </div>
    )
}

export default Header
