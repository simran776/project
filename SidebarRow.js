import React from 'react'
import "./SidebarRow.css";
import SeacrchIcon from "@material-ui/icons/Search";



function SidebarRow() {
    return (
        <div className="sidebarRow">
            <h4>EXPERTISE</h4>
            <div className="top">
                <div className="top-button">  <button>Branding &nbsp; x</button></div>
                <SeacrchIcon />

            </div>
            <button className="button1">Strategy &nbsp; x</button>

            <h4>FOCUS AREA</h4>
            <div className="top">
                <div className="top-button">  <button>Focus Area &nbsp; x</button><button>Focus Area &nbsp; x</button></div>
                <SeacrchIcon />

            </div>
            <div className="button-bottom">
                <button className="button2">Focus Area &nbsp; x</button> <button className="button2">Focus Area &nbsp; x</button>

            </div>
            <h4 className="middle">RATINGS</h4>
            <div className="Check-box ">
                <input name="remember" type="checkbox" defaultChecked />⭐⭐⭐⭐
                &nbsp;<input type="checkbox" />⭐⭐⭐
            </div>
            <div className="Check-box">
                <input type="checkbox" />⭐⭐⭐
                &nbsp; &nbsp; &nbsp;<input type="checkbox" />⭐⭐
            </div>
            <h4>PRICE</h4>
            <div className="last">  <input type="Checkbox" /> <span className="checkmark"></span><span>Free</span></div>
            <div className="last">  <input type="Checkbox" /> <span className="checkmark"></span><span>Less than $25</span></div>
            <div className="last">  <input type="Checkbox" /> <span className="checkmark"></span><span>$25-$50</span></div>
            <div className="last">  <input type="Checkbox" /> <span className="checkmark"></span><span>$50-$100</span></div>
            <div className="last">  <input type="Checkbox" /> <span className="checkmark"></span><span>More than $100 </span></div>



        </div>
    )
}

export default SidebarRow
