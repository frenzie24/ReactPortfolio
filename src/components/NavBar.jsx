import { Link, useLocation  } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import PeonComponent from './PeonComponent';
import Footer from './Footer';
import Home from './HomePage';

export default function NavBar() {
    const currentPage = useLocation().pathname;

    return (

        <ul className="flex space-x-4 [&_*]:text-gray-200 nav nav-tabs">
            <li className="nav-item"><Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
            <li className="nav-item"><Link to="/peon" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>PeonComponent</Link></li>
            <li className="nav-item"><Link to="/about" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link></li>
            <li className="nav-item"><Link to="/portfolio" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Portfolio</Link></li>
            <li className="nav-item"><Link to="/contact" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Contact</Link></li>
            <li className="nav-item"><Link to="/resume" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Resume</Link></li>
        </ul>

    )
}