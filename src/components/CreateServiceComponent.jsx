/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/04/2023 - 00:00:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
    * @description      : 
    * @Author           : belgacem
    * @Group            : 
    * @Created          : 24/04/2023 - 21:33:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const CreateServiceComponent = () => {
    const [nom, setNom] = useState('');
    const [coutService, setCoutService] = useState('');
    const [descriptionService, setDescriptionService] = useState('');
    const [lieuService, setLieuService] = useState('');

    const handleNomChange = (event) => {
        setNom(event.target.value);
    }

    const handleCoutServiceChange = (event) => {
        setCoutService(event.target.value);
    }

    const handleDescriptionServiceChange = (event) => {
        setDescriptionService(event.target.value);
    }

    const handleLieuServiceChange = (event) => {
        setLieuService(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceData = {
            nom,
            CoutService: coutService,
            DescriptionService: descriptionService,
            lieuService
        };

        axios.post('http://localhost:5000/service/ajouter', serviceData)
            .then(res => {
                console.log(res);
                console.log("reussi");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Create Service</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Enter Nom" value={nom} onChange={handleNomChange} />
                </Form.Group>

                <Form.Group controlId="coutService">
                    <Form.Label>Cout Service</Form.Label>
                    <Form.Control type="text" placeholder="Enter Cout Service" value={coutService} onChange={handleCoutServiceChange} />
                </Form.Group>

                <Form.Group controlId="descriptionService">
                    <Form.Label>Description Service</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description Service" value={descriptionService} onChange={handleDescriptionServiceChange} />
                </Form.Group>

                <Form.Group controlId="lieuService">
                    <Form.Label>Lieu Service</Form.Label>
                    <Form.Control type="text" placeholder="Enter Lieu Service" value={lieuService} onChange={handleLieuServiceChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default CreateServiceComponent;
