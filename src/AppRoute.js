// AppRoutes.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, GetStarted, Home, Service } from './pages'


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Service />} />
                <Route path='/aboutus' element={<About />} />
                <Route path='/contactus' element={<Contact />} />
                <Route path='/getstarted' element={<GetStarted />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;