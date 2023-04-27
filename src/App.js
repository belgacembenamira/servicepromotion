/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/04/2023 - 18:41:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import CreateServiceComponent from './components/CreateServiceComponent';
import ListServiceComponent from './components/ListServiceComponent';
import UpdateServiceComponent from './components/UpdateServiceComponent';
import DeleteServiceComponent from './components/DeletServiceComponent';
import ListPromotionComponent  from './components/ListPromotionComponent';
import UpdatePromotionComponent from './components/UpdatePromotionComponent';
import CreatePromotionComponent from './components/CreatePromotionComponent';
import DeletePromotionComponent from './components/DeletePromotionComponent'

const App = () => {
  return (
    <div>
      <Navbar bg=" navbar-dark bg-primary" expand="lg">
        <Navbar.Brand href="/">7awem App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/promotion">Promotion</Nav.Link>
          </Nav>
          {/* <Nav>
            <Navbar.Text>Ajouter Promotion</Navbar.Text>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<ListServiceComponent />} />
        <Route path="/services/ajouter" element={<CreateServiceComponent />} />
        <Route path="/services/modifier/:id" element={<UpdateServiceComponent />} />
        <Route path="/services/supprimer/:id" element={<DeleteServiceComponent />} />
        <Route path="/promotion/modifier/:id" element={< UpdatePromotionComponent/>} />

        <Route path="/promotion" element={< ListPromotionComponent/>} />
<Route path="/service/:id/promotion/ajouter" element={<CreatePromotionComponent />} />

<Route path="/promotion/supprimer/:id" element={< DeletePromotionComponent/>} />



      </Routes>
    </div>
  );
};

export default App;