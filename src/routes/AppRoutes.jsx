import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Tools from '../pages/Toolspage';
import Resources from '../pages/Resources';
import Links from '../pages/Links';
import Extensions from '../pages/Extensions';


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/sfdemoorgs.html" element={<Home />} />
            <Route path="/sflearningpaths.html" element={<Home />} />

            <Route path="/tools.html" element={<Tools />} />
            <Route path="/extensions.html" element={<Extensions />} />
            <Route path="/links.html" element={<Links />} />
            <Route path="/resources.html" element={<Resources />} />

            <Route path="*" element={<Error />} />
            <Route path="/aboutus.html" element={<Home />} />
            <Route path="/contactus.html" element={<Home />} />
            </Route>
       </Routes>
    );
};
export default AppRoutes;