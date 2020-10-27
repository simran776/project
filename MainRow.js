import React from 'react';
import "./MainRow.css";

import { Avatar } from '@material-ui/core';
import FormatSizeOutlinedIcon from '@material-ui/icons/FormatSizeOutlined';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
function MainRow({ ProfilePic, name, position }) {
    return (
        <div className="mainrow">
            <div className="mainrow-arrange">
                <div className="mainrow__top">
                    <div className="avatar">
                        <Avatar className="main__avtar"
                            src={ProfilePic} />
                    </div>
                    <div className="main__info">
                        <h3>{name}</h3>
                        <h6>{position}</h6>

                        <div className="location__right">
                            <TimerRoundedIcon fontSize="small" /> <span>02 Free Sessions Available</span>
                            < PersonPinCircleIcon fontSize="small" /><span>Tampa,FA,USA</span>
                            <FormatSizeOutlinedIcon fontSize="small" /><span>Greek,English,French</span>
                        </div>

                    </div>
                    <div className="mainrow__right">
                        <FavoriteBorderIcon />
                        <button className="top-btn">View Profile</button>
                    </div>


                </div>
            </div>
            <div className="location">
                <div className="location__left">
                    <div className="side">
                        <span className="price">Price:</span> <span className="free">FREE</span>
                    </div>




                    <div><span className="star">⭐</span>&nbsp;<span className="star" style={{ color: "red" }} >4.9</span>&nbsp;<span className="star">(120)</span></div>

                </div>
                <div className="main__last">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor. Aenean massa
                    . Cum sociis natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque
eu, pretium quis, sem.  </p>
                    <button className="btn">Marketing</button> <button className="btn">SEO</button> <button className="btn">Content Marketing</button> <button className="btn">Marketing Automation</button>
                </div>

            </div>


        </div>

    )
}

export default MainRow;
