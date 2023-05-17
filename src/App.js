import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/starbucks-bg.jpg';
import a from './img/americano.jpg';
import c from './img/caramel.jpg';
import e from './img/espresso.jpg';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [coffee] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Starbucks</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Coffee</Nav.Link>
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>메인페이지임</div>}/>
        <Route path="/detail" element={<div>상세페이지임</div>}/>
        <Route path="/about" element={<div>어바웃페이지임</div>}/>
      </Routes>

      <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')' }}> </div>

      <div className="best">Week's best</div>

      <div className="container">
        <div className="row">
          {
            coffee.map((a, i)=>{
              return (
                <Card coffee={coffee[i]} i={i}></Card>
              )
            })
          }
        </div>
      </div>

      <div className="bottom">
      <p>사업자등록번호 : 123-45-67891 &nbsp;&nbsp; 주식회사 해원컴퍼니 대표이사 : 강해원 &nbsp;&nbsp; TEL : 1234-1234 &nbsp;&nbsp; 개인정보 책임자 : 강해원</p>
      </div>
    </div>

  );
}

function Card(props) {
  let img = [a, c, e];

  return (
    <div className="col-md-4">
      <img src={ img[(props.i)]} width="80%"/>
      <h5>{props.coffee.title}</h5>
      <p>{props.coffee.content}</p>
    </div>
  )
}

export default App;