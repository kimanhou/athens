import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Food from './view/components/Food/Food';
import Home from './view/components/Home/Home';
import LocalContext from './view/components/LocalisationContext/LocalContext';
import ScrollToTop from './view/components/ScrollToTop/ScrollToTop';
import Sightseeing, { InfoSection } from './view/components/Sightseeing/Sightseeing';

const App : React.FunctionComponent = props => {
    const [currentSection, setCurrentSection] = useState(InfoSection.archaeology);
    return (
        <div className={`App`}>
            <HashRouter>
                <LocalContext>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path={["/sightseeing"]}>
                            <Sightseeing setCurrentSection={setCurrentSection} currentSection={currentSection}/>
                        </Route>
                        <Route exact path={["/food"]}>
                            <Food />
                        </Route>
                        <Route exact path={["/"]}>
                            <Home />
                        </Route>
                        {/* <Route path={["/posts/:postId"]}>
                            <PostRoot />
                        </Route> */}
                    </Switch>
                </LocalContext>
            </HashRouter>
        </div>
    )
}

export default App;
