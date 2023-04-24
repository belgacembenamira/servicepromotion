/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 24/04/2023 - 23:08:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
 * @description      : 
 * @created          : 24/04/2023 - 22:44:08
 * @modified         : 
 * @modifier         :
 * @version          : 1.0.0
 * @group            : 
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import CreateServiceComponent from './components/CreateServiceComponent';
import ListServiceComponent from './components/ListServiceComponent';
import UpdateServiceComponent from './components/UpdateServiceComponent';
import DeleteServiceComponent from './components/DeletServiceComponent';

const App = () => {
  return (
    <div>
      <Navbar bg=" navbar-dark bg-primary" expand="lg">
        <Navbar.Brand href="/">7awem App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/services/ajouter">Ajouter un service</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>Ajouter Promotion</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<ListServiceComponent />} />
        <Route path="/services/ajouter" element={<CreateServiceComponent />} />
        <Route path="/services/modifier/:id" element={<UpdateServiceComponent />} />
        <Route path="/services/supprimer/:id" element={<DeleteServiceComponent />} />
      </Routes>
    </div>
  );
};

export default App;
