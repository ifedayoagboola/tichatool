import { Suspense, lazy, useState, useEffect } from "react";

import "./App.css";

import LoadingPage from "./components/LoadingPage";
import { Switch, Route } from "react-router-dom";
import LayOut from "./components/LayOut";
import Teachers from "./components/Teachers";
import Posts from "./components/Posts";
import Students from "./components/Students";
import Overview from "./components/Overview";
import StudentList from "./components/StudentList";
import TeacherProfile from "./components/TeacherProfile";
import Profile from "./components/Profile";
import StudentProfile from "./components/StudentProfile";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const AdminLogin = lazy(() => import("./pages/Registration/AdminRegistration"));
const StudentLogin = lazy(() => import("./pages/Registration/StudentLogin"));
const StudentSignUp = lazy(() =>
  import("./pages/Registration/StudentRegistration")
);

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return (
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/admin/login" exact component={AdminLogin} />
          <Route path="/student/login" exact component={StudentLogin} />
          <Route path="/student/register" exact component={StudentSignUp} />
          <Route
            exact
            path="/admin/overview"
            render={(props) => (
              <LayOut {...props}>
                <Overview />
              </LayOut>
            )}
          />
          <Route
            exact
            path="/admin/teachers"
            render={(props) => (
              <LayOut {...props}>
                <Teachers />
              </LayOut>
            )}
          />
          <Route
            exact
            path="/admin/teachers/:teacherId"
            render={(props) => (
              <LayOut>
                <TeacherProfile {...props} />
              </LayOut>
            )}
          />
          <Route
            exact
            path="/admin/posts"
            render={(props) => (
              <LayOut {...props}>
                <Posts />
              </LayOut>
            )}
          />
          <Route
            exact
            path="/admin/students"
            render={(props) => (
              <LayOut {...props}>
                <Students />
              </LayOut>
            )}
          />
          <Route
            exact
            path="/admin/profile"
            render={(props) => (
              <LayOut {...props}>
                <Profile />
              </LayOut>
            )}
          />
          <Route
            exact
            path="/admin/class/:studentList"
            render={(props) => (
              <LayOut>
                <StudentList {...props} />
              </LayOut>
            )}
          />

          <Route
            exact
            path="/admin/student/:studentId"
            render={(props) => (
              <LayOut>
                <StudentProfile {...props} />
              </LayOut>
            )}
          />
        </Switch>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <LoginPage />
    </Suspense>
  );
}

export default App;
