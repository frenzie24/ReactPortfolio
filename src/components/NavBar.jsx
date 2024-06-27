import { Link, useLocation } from 'react-router-dom';
import '../App.css'
export default function NavBar() {
  const currentPage = useLocation().pathname;

  const renderCursor = (path) => {

    return currentPage === path && <span className="blinking-cursor"></span>;
  };


  const handleAnimationComplete = () => {
    setHidden(false);
  };

  return (

    <nav className='w-fit flex justify-center items-center z-50  '>

      <ul className=" flex flex-row flex-wrap items-center space-4 [&_*]:text-white nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
            {renderCursor('/')}Home
          </Link>
        </li>
        {/* <li className="nav-item"><Link to="/peon" className={currentPage === '/peon' ? 'nav-link active' : 'nav-link'}>{renderCursor('/peon')}Leon the Peon</Link></li>*/}
        <li className="nav-item"><Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>{renderCursor('/about')}About Me</Link></li>
        <li className="nav-item"><Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>{renderCursor('/portfolio')}Portfolio</Link></li>
        <li className="nav-item"><Link to="/resumeview" className={currentPage === '/resumeview' ? 'nav-link active' : 'nav-link'}>{renderCursor('/resumeview')}Resume</Link></li>

      </ul>
    </nav>
  )
}
