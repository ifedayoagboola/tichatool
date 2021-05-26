import { Suspense, lazy, useState, useEffect } from "react"

import './App.css';

import LoadingPage from "./components/LoadingPage"
import { Switch, Route } from "react-router-dom"
import LayOut from "./components/LayOut"
import Teachers from "./components/Teachers";
import Posts from "./components/Posts";
import Students from "./components/Students";


const LoginPage = lazy(() => import("./pages/LoginPage"));
const AdminLogin = lazy(() => import('./pages/Registration/AdminRegistration'))
const StudentLogin = lazy(() => import('./pages/Registration/StudentRegistration'))

function App() {
  const [user, setUser] = useState()


  if (!user) {
    return (
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route
            path="/"
            exact
            component={LoginPage}
          // render={(props) => (
          //   <LayoutBlack {...props}>
          //     <HomePage />
          //   </LayoutBlack>
          // )}
          />
          <Route
            path="/admin/login"
            exact
            component={AdminLogin}
          />
          <Route
            path="/student/login"
            exact
            component={StudentLogin}
          />
          <Route exact path="/teachers" render={(props) => (
            <LayOut {...props}>
                <Teachers />
            </LayOut>
          )} />
          <Route exact path="/posts" render={(props) => (
            <LayOut {...props}>
                <Posts/>
            </LayOut>
          )} />
          <Route exact path="/students" render={(props) => (
            <LayOut {...props}>
                <Students />
            </LayOut>
          )} />
           <Route exact path="/more" render={(props) => (
            <LayOut {...props}>
               
            </LayOut>
          )} />
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
