import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiSolidChevronsDown } from "react-icons/bi";
import "./navbar.css";
import { memo, useContext, useEffect, useState } from "react";
import { ResStore } from "../../Context/RestaurantStore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from './1e9cf8c38ea64103aa002a5ecbb50d39__1_-removebg-preview.png'
const NavScrollExample = () => {
  let [user,setUser]=useState(null)
  let navigate = useNavigate();
  const { setSearchText } = useContext(ResStore);
  let [data, setdata] = useState("");
  const searchBar = (e) => setdata(e.target.value);
  const searchText = () => {
    setSearchText(data);
    navigate("/searchData");
  };
  const LogOutFunc=()=>{
    sessionStorage.removeItem('userData')
  }
useEffect(()=>{
  setUser(JSON.parse(sessionStorage.getItem('userData')))
},[user])
  return (
    <Navbar expand="md" className="bg-body-tertiary NavbarBody ">
      <Container fluid>
        <Navbar.Brand ><img src={logo} alt="logo" width={'65px'} height={'40px'} style={{objectFit:'cover'}} /></Navbar.Brand>
        <Navbar.Toggle className="rounded-circle navbarToggleBtn text-warning">
          <BiSolidChevronsDown
            aria-controls="navbarScroll"
            className="navbarBtnTog"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to={"/"} className="HomeUnderLine">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {user==null? <Link to={"/login"} className="HomeUnderLine">Login </Link>:
              <Link to={"/"} className="HomeUnderLine" onClick={LogOutFunc}>Logut </Link>
              }
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={searchBar}
            />
            <Button
              variant="outline-warning"
              className="rounded-circle searchBtn d-flex justify-content-center align-items-center"
              onClick={searchText}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(NavScrollExample);
