import React from 'react';
import './App.css';
import PhotoBrowse from './pages/PhotoBrowse/PhotoBrowse';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CapturePhoto from './pages/CapturePhoto/CapturePhoto';
import PhotoDetailsView from './pages/PhotoDetailsView/PhotoDetailsView';


function App() {
  return (
    <div id="App" className="App">
       <Router>
            <Switch>
              <Route path="/view/:id" component={PhotoDetailsView} />
              <Route path="/capture" component={CapturePhoto} />
              <Route path="/" component={PhotoBrowse} />
             </Switch>
          </Router>
    </div>
  );
}

export default App;
