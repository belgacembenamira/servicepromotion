/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 21/04/2023 - 02:41:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 21/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';
const ServiceTable = () => {
    const [serviceList, setServiceList] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedService, setSelectedService] = useState({});
    const [newService, setNewService] = useState({
        nom: '',
        CoutService: 0,
        DescriptionService: '',
        lieuService: '',
    });

    useEffect(() => {
        getServiceList();
    }, []);

    const getServiceList = () => {
        axios.get('http://localhost:5000/service/lister')
            .then(({ data }) => setServiceList(data.serviceList))
            .catch((error) => console.error(error),

            );
    };

    const handleShowAddModal = () => {
        setNewService({
            nom: '',
            CoutService: 0,
            DescriptionService: '',
            lieuService: '',
        });
        setShowAddModal(true);
    };

    const handleAddService = () => {
        axios.post('http://localhost:5000/service/ajouter', newService)
            .then(() => {
                setShowAddModal(false);
                setNewService({
                    nom: '',
                    CoutService: 0,
                    DescriptionService: '',
                    lieuService: '',
                });
                getServiceList();
            })
            .catch((error) => console.error(error));
    };

    const handleShowEditModal = (service) => {
        setSelectedService(service);
        setShowEditModal(true);
    };

    const handleEditService = () => {
        axios.post(`http://localhost:5000/service/${selectedService._id}/modifier`, newService)
            .then(() => {
                setShowEditModal(false);
                setSelectedService({});
                getServiceList();
            })
            .catch((error) => console.error(error));
    };

    const handleShowDeleteModal = (service) => {
        setSelectedService(service);
        setShowDeleteModal(true);
    };

    const handleDeleteService = () => {
        axios.delete(`http://localhost:5000/service/${selectedService._id}/supprimer`)
            .then(() => {
                setShowDeleteModal(false);
                setSelectedService({});
                getServiceList();
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <Button onClick={handleShowAddModal}>Add Service</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CoutService</th>
                        <th>DescriptionService</th>
                        <th>lieuService</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {serviceList.map((service) => (
                        <tr key={serviceList._id}>
                            <td>{serviceList.nom}</td>
                            <td>{serviceList.CoutService}</td>
                            <td>{serviceList.DescriptionService}</td>
                            <td>{serviceList.lieuService}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => handleShowEditModal(setServiceList)}
                                >
                                    Edit
                                </Button>{' '}
                                <Button
                                    variant="danger"
                                    onClick={() => handleShowDeleteModal(setServiceList)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
                <tbody>
  {serviceList && serviceList.length > 0 ? (
    serviceList.map((service) => (
      <tr key={service._id}>
        <td>{service.nom}</td>
        <td>{service.CoutService}</td>
        <td>{service.DescriptionService}</td>
        <td>{service.lieuService}</td>
        <td>
          <Button
            variant="warning"
            onClick={() => handleShowEditModal(service)}
          >
            Edit
          </Button>{' '}
          <Button
            variant="danger"
            onClick={() => handleShowDeleteModal(service)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center">
        No services found.
      </td>
    </tr>
  )}
</tbody>


            </Table>
            {/* Add Service Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicNom">
                            <Form.Label>Nom du service</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le nom du service"
                                value={newService.nom}
                                onChange={(e) => setNewService({ ...newService, nom: e.target.value })}
                            />
                        </Form.Group>



                        <Form.Group controlId="formBasicCout">
                            <Form.Label>Coût du service</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Entrer le coût du service"
                                value={newService.CoutService}
                                onChange={(e) => setNewService({ ...newService, CoutService: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description du service</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Entrer la description du service"
                                value={newService.DescriptionService}
                                onChange={(e) => setNewService({ ...newService, DescriptionService: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicLieu">
                            <Form.Label>Lieu du service</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le lieu du service"
                                value={newService.lieuService}
                                onChange={(e) => setNewService({ ...newService, lieuService: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleAddService}>Add Service</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default ServiceTable;
