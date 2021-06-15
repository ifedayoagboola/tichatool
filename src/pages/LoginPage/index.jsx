import React from 'react'
import "../../styles/styles.css"




function Login() {

    return (
        <div className='landing-container'>
            <div className="landing-div">
                <h1>Welcome to TeacherTool</h1>
                <p>Making live easy for all</p>

                <div className="landing-btn">
                    <button className="admin-login" onClick={() => window.location.href = "/admin/login"}>Admin Login</button>
                    <button className="student-login" onClick={() => window.location.href = "/student/login"}>Student Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login
