import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import human from './images/human.png'
import elf from './images/elf.png'
import dwarf from './images/dwarf.png'
import draenei from './images/draenei.png'
import worgen from './images/worgen.png'
import orc from './images/orc.png'
import tauren from './images/tauren.png'
import undead from './images/undead.jpg'
import troll from './images/troll.png'
import bloodelf from './images/bloodelf.png'
import wowlogo from './images/wow.png'

import HumanHistory from './descriptions/HumanHistory.js'
import NightElfHistory from './descriptions/NightElfHistory.js'
import DwarfHistory from './descriptions/DwarfHistory.js'
import DraeneiHistory from './descriptions/DraeneiHistory.js'
import WorgenHistory from './descriptions/WorgenHistory.js'
import OrcHistory from './descriptions/OrcHistory.js'
import TaurenHistory from './descriptions/TaurenHistory.js'
import UndeadHistory from './descriptions/UndeadHistory.js'
import TrollHistory from './descriptions/TrollHistory.js'
import BloodElfHistory from './descriptions/BloodElfHistory.js'

import './App.css';

let  Human = <img src={human} width={350} height={450}/>,
     NightElf = <img src={elf} width={300} height={400}/>,
     Dwarf = <img src={dwarf} width={350} height={400}/>,
     Draenei = <img src={draenei} width={350} height={410}/>,
     Worgen = <img src={worgen} width={300} height={400}/>,
     Orc = <img src={orc} width={300} height={400}/>,
     Tauren = <img src={tauren} width={300} height={400}/>,
     Undead = <img src={undead} width={300} height={400}/>,
     Troll = <img src={troll} width={300} height={400}/>,
     BloodElf = <img src={bloodelf} width={300} height={400}/>

const ALLIANCE_CHARACTERS = [
    {name: 'Human', id: '0', img: Human, about: <HumanHistory/>},
    {name: 'Night Elf', id: '1', img: NightElf, about: <NightElfHistory/>},
    {name: 'Dwarf', id: '3', img: Dwarf, about: <DwarfHistory/>},
    {name: 'Draenei', id: '4', img: Draenei, about: <DraeneiHistory/>},
    {name: 'Worgen', id: '5', img: Worgen, about: <WorgenHistory/>}
]

const HORDE_CHARACTERS = [
    {name: 'Orc', id: '0', img: Orc, about: <OrcHistory/>},
    {name: 'Tauren', id: '1', img: Tauren, about: <TaurenHistory/>},
    {name: 'Undead', id: '2', img: Undead, about: <UndeadHistory/>},
    {name: 'Troll', id: '3', img: Troll, about: <TrollHistory/>},
    {name: 'Blood Elf', id: '4', img: BloodElf, about: <BloodElfHistory/>}
]

class CharactersDisplay extends Component {
  render() {
    return (
        <div>
          <div className="picture">{this.props.img}</div>
        </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      activeImage: null,
      about: null
    }
  }
  render() {
    const activeImage = this.state.activeImage;
    const id = this.state.id;
    return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand className="navbar navbar-nav">
                  World of Warcraft Characters
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <Grid>
            <Row>
              <Col md={3} sm={3}>
                <Navbar className="navbar navbar-inverse" style={{backgroundColor:'#' + '00008b'}}>
                  <Navbar.Header>
                    <Navbar.Brand>
                      ALLIANCE
                    </Navbar.Brand>
                  </Navbar.Header>
                </Navbar>
                  <Nav
                    stacked
                    activeKey={id}
                    onSelect={eventId => {
                      this.setState({activeImage: ALLIANCE_CHARACTERS[eventId].img, id: eventId, about: ALLIANCE_CHARACTERS[eventId].about});
                      console.log(eventId);
                    }}
                  >

              {ALLIANCE_CHARACTERS.map((char, id) => (
                 <NavItem key={id} eventKey={id}>{char.name}</NavItem>
              ))}
                  </Nav>
                  <Navbar className="navbar navbar-inverse" style={{backgroundColor:'#' + '800000'}}>
                      <Navbar.Header>
                          <Navbar.Brand>
                              HORDE
                          </Navbar.Brand>
                      </Navbar.Header>
                  </Navbar>
                  <Nav
                      stacked
                      activeKey={id}
                      onSelect={eventId => {
                          this.setState({activeImage: HORDE_CHARACTERS[eventId].img, id: eventId, about: HORDE_CHARACTERS[eventId].about});
                          console.log(eventId);
                      }}
                  >

                      {HORDE_CHARACTERS.map((char, id) => (
                          <NavItem key={id} eventKey={id}>{char.name}</NavItem>
                      ))}
                  </Nav>
              </Col>
              <Col md={4} sm={4}>
                  <CharactersDisplay img={activeImage}/>
              </Col>
              <Col md={5} sm={5}>
                  <div>{this.state.about}</div>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default App;
