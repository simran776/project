import React from 'react';
import "./Mainpage.css";
import MainRow from "./MainRow";

function MainPage() {
    return (
        <div className="main">
            <div className="main__top">
                <h3>Featured Expert</h3>
                <button className="match">BEST MATCH</button>
            </div>

            <MainRow
                ProfilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrHeEfcVizZ_ax2xoJhwLwrrOsQsMYW2X0Hg&usqp=CAU"
                name="David Melvik"
                position="Founder @ The Millennials & CEO @ABC" />
            <MainRow
                ProfilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrHeEfcVizZ_ax2xoJhwLwrrOsQsMYW2X0Hg&usqp=CAU"
                name="David Melvik"
                position="Founder @ The Millennials & CEO @ABC" />
            <MainRow
                ProfilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrHeEfcVizZ_ax2xoJhwLwrrOsQsMYW2X0Hg&usqp=CAU"
                name="David Melvik"
                position="Founder @ The Millennials & CEO @ABC" />

        </div>
    )
}

export default MainPage;
