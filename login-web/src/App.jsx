import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ListViewPage from './ListViewPage';
import DetailViewPage from './DetailViewPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/list" element={<ListViewPage />} />
                <Route path="/detail/:id" element={<DetailViewPage />} />
            </Routes>
        </Router>
    );
};

export default App;
