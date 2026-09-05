import "./styles/globals.scss";

import {render} from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Generate from "./pages/generate.jsx";
import NotFound from "./pages/notFound.jsx";
import {consoleCat} from "./lib/consoleCat.jsx";

consoleCat()
gsap.registerPlugin(ScrollTrigger);

export const App = () => {
    return (
        <Router>
            <AsyncRoute path={"/"} component={Generate}/>
            <NotFound default/>
        </Router>
    );
}

render(<App/>, document.body);
