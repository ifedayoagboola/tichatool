import React from 'react'
import "../../styles/styles.css"




function Login() {

    return (
        <div>
            <div class="marquee">
                <p> Welcome To TeacherTool </p>
            </div>

            <div className="login-page">
                <button className="admin-login" onClick={() => window.location.href="/admin/login"}>Admin Login</button>
                <button className="student-login" onClick={() => window.location.href="/student/login"}>Student Login</button>
            </div>
            
        </div>
    )
}

export default Login
