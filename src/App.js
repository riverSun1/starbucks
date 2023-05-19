import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/starbucks-bg.jpg';
import a from './img/americano.jpg';
import c from './img/caramel.jpg';
import e from './img/espresso.jpg';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Menu from './routes/Menu.js';
import Coffee from './routes/Coffee.js';

function App() {

  let [coffee] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Starbucks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/coffee') }}>Coffee</Nav.Link>
            <Nav.Link onClick={() => { navigate('/menu') }}>Menu</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')' }}> </div>
          <div className="best">Week's best</div>
          <div className="container">
            <div className="row">
              { coffee.map((a, i)=>{
                  return <Card coffee={coffee[i]} i={i}></Card>
                })}
            </div>
          </div>
          </>
        }/>
        <Route path="/" element={<div>메인</div>}/>
        <Route path="/coffee" element={<Coffee coffee={coffee}/>}/>
        <Route path="/menu" element={<Menu coffee={coffee}/>}/>
        <Route path="/detail" element={<Detail coffee={coffee}/>}/>
        <Route path="*" element={<div>없는페이지</div>}/>
        <Route path="/detail/:id" element={<Detail coffee={coffee}/>}/>
      </Routes>
      
      <div className="bottom">
      <p>사업자등록번호 : 123-45-67891 &nbsp;&nbsp; 주식회사 해원컴퍼니 대표이사 : 강해원 &nbsp;&nbsp; TEL : 1234-1234 &nbsp;&nbsp; 개인정보 책임자 : 강해원</p>
      </div>
    </div>

  );
}

function Card(props) {
  let imgArr = [a, c, e];

  return (
    <div className="col-md-4">
      <img src={ imgArr[(props.i)]} width="80%"/>
      <h5>{props.coffee.title}</h5>
      <p>{props.coffee.content}</p>
    </div>
  )
}

export default App;