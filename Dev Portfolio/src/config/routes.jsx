import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage.jsx';
import ProjectsPage from '../pages/projects.jsx';
import AboutPage from '../pages/about.jsx';

function BrowserRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default BrowserRoute;