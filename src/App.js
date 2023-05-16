import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/starbucks-bg.jpg';
import m from './img/americano.jpg';
import c from './img/caramel.jpg';
import e from './img/espresso.jpg';
import data from './data.js';

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

      <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')' }}> </div>

      <div className="best">Week's best</div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={m} width="80%" alt="아메리카노"/>
            <h4>{coffee[0].title}</h4>
            <p>{coffee[0].content}</p>
          </div>
          <div className="col-md-4">
            <img src={c} width="80%" alt="카라멜마끼아또"/>
            <h4>카라멜마끼아또</h4>
            <p>향긋한 바닐라 시럽과 따뜻한 스팀 밀크 위에 풍성한 우유 거품을 얹고 점을 찍듯이 에스프레소를 부은 후 벌집 모양으로 카라멜 드리즐을 올린 달콤한 커피 음료</p>
          </div>
          <div className="col-md-4">
            <img src={e} width="80%" alt="에스프레소"/>
            <h4>에스프레소</h4>
            <p>스타벅스 에스프레소는 향기로운 크레마 층과 바디 층, 하트 층으로 이루어져 있으며, 입안 가득히 커피와 달콤한 카라멜 향이 느껴지는 커피 음료</p>
          </div>
        </div>
      </div>

      <div className="bottom">
      <p>사업자등록번호 : 123-45-67891 &nbsp;&nbsp; 주식회사 해원컴퍼니 대표이사 : 강해원 &nbsp;&nbsp; TEL : 1234-1234 &nbsp;&nbsp; 개인정보 책임자 : 강해원</p>
     
      </div>

    </div>

  );
}

export default App;