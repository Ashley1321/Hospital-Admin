import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddFile from './addFile'
import Admin from './admin'
import ResetPassword from './forgotPassword'
import Register from './registerAccount'
import SignIn from './signIn'


function Navigation(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/forgotPassword' component={ResetPassword}></Route>
                    <Route path='/' component={AddFile}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/signIn' component={SignIn}></Route>
                </Switch>
            </Router>

        </div>
    )
}

export default Navigation