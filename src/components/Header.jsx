import { Container, Nav, NavLink, Navbar,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <Navbar expand="lg" bg='black' variant='dark' fixed='top' className='px-3' collapseOnSelect>
    <Container fluid>
      <Navbar.Brand href="/" className='h2 text-uppercase'>apus estate</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav
          className="ms-auto px-4"
        >
          <NavLink>
            <Link className='nav-link link-effect'>Home</Link>
          </NavLink>
          <NavLink>
            <Link className='nav-link link-effect'>Property</Link>
          </NavLink>
          <NavLink>
            <Link className='nav-link link-effect'>About</Link>
          </NavLink>
          <NavLink>
            <Link className='nav-link link-effect'>Reiew</Link>
          </NavLink>
          <NavLink>
            <Link className='nav-link link-effect'>Contact</Link>
          </NavLink>
        </Nav>
        <Row className='d-flex d-lg-none'>
          <Col xs={6}>
            <Link className='btn btn-warning w-100'>Sign in</Link>
          </Col>
          <Col xs={6}>
            <Link className='btn btn-outline-warning w-100'>Sign up</Link>
          </Col>
        </Row>
      </Navbar.Collapse>
      <Row className='w-25 ms-5 d-none d-lg-flex'>
        <Col xs={6}>
          <Link className='btn btn-warning w-100'>Sign in</Link>
        </Col>
        <Col xs={6}>
          <Link className='btn btn-outline-warning w-100'>Sign up</Link>
        </Col>
      </Row>
    </Container>
  </Navbar>
  )
}

export default Header;

