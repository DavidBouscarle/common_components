import React, { FC, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

export default ScrollToTopWrapper;

// Path: App.tsx (or any other component) look like this

import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from "./ScrollToTop";

const history = createBrowserHistory();

const App: FC = () => {
    return (
        <Router history={history}>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ScrollToTop>
        </Router>
    );
};