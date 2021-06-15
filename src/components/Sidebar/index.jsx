import React from 'react'
import "./sidebar.css"



function Sidebar() {

    const routeClicked = (address) => {
        return window.location.href =`/admin/${address}`
    }
    console.log("loc", window.location.pathname)
    return (
        <div className="sidebar">
            <div>
                <img src="" alt="" />
            </div>
            <p onClick={() => routeClicked("overview")} className={window.location.pathname === "/admin/overview"  ? "active sideline" : "sideline"}>Overview</p>
            <p onClick={() => routeClicked("teachers")} className={window.location.pathname === "/admin/teachers" || window.location.pathname.includes("/teacher") ? "active sideline" : "sideline"}>Teachers</p>
            <p onClick={() => routeClicked("posts")} className={window.location.pathname === "/admin/posts" ? "active sideline" : "sideline"}>posts</p>
            <p onClick={() => routeClicked("students")} className={window.location.pathname === "/admin/students" || window.location.pathname.includes("/student") || window.location.pathname.includes("/class") ? "active sideline" : "sideline"}>Students</p>
            <p onClick={() => routeClicked("profile")} className={window.location.pathname === "/admin/profile" ? "active sideline" : "sideline"}>Profile</p>
        </div>
    )
}

export default Sidebar
