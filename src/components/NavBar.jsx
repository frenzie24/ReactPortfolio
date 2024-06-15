import { Link, useLocation  } from 'react-router-dom';
export default function NavBar() {
    const currentPage = useLocation().pathname;

    return (

      <nav className='w-fit flex justify-center items-center z-50'>

        <ul className="flex flex-row flex-wrap space-x-4 [&_*]:text-gray-200 nav nav-tabs">
          <li className="nav-item"><Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
          <li className="nav-item"><Link to="/peon" className={currentPage === '/peon' ? 'nav-link active' : 'nav-link'}>Leon the Peon</Link></li>
          <li className="nav-item"><Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About Me</Link></li>
          <li className="nav-item"><Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link></li>
          <li className="nav-item"><Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link></li>
        </ul>
      </nav>
    )
  }
