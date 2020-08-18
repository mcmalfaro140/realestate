import Link from 'next/link';
import {Navbar, Nav} from 'react-bootstrap'

const TopNavbar = () => (
  <>
    <Navbar id="top-bar" sticky="top" expand="lg" className="nav_style" variant="dark">
      <Navbar.Brand><Link href="/index"><a className="nav-link">MyRealEstate</a></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/index"><a>HOME</a></Link>
          <Link href="/listing"><a>LISTINGS</a></Link>
          <Link href="/contact"><a>CONTACT</a></Link>
          <Link href="/about"><a>ABOUT</a></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default TopNavbar;