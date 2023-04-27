/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 24/04/2023 - 23:10:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListServiceComponent = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/service/lister')
            .then(response => {
                const data = response.data.ServiceList;
                const serviceArray = Object.keys(data).map(key => {
                    return data[key];
                });
                setServices(serviceArray);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h3 className='text-center '>List of Services</h3>
            <table className="table table-bordered table-hover m-3 p-3" style={{ marginTop: 20 }}>
                <thead className="thead-dark bg-primary">
                    <tr>
                        <th>Service Name</th>
                        <th>Service Cost</th>
                        <th>Service Description</th>
                        <th>Service Location</th>
                        <th>Actions</th>
                        <th>Add Promotion</th> {/* Nouvelle colonne */}

                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(services) && services.map(service => (
                        <tr key={service._id}>
                            <td>{service.nom}</td>
                            <td>{service.CoutService}</td>
                            <td>{service.DescriptionService}</td>
                            <td>{service.lieuService}</td>
                            <td>
                                <Link to={`/services/modifier/${service._id}`} className="btn btn-primary p-2 m-2">Modifier</Link>
                                <br />
                                <Link to={`/services/supprimer/${service._id}`} className="btn btn-primary p-1 m-1">Supprimer</Link>

                            </td>
                            <td>
                                <Link to={`/service/${service._id}/promotion/ajouter`}>
                                    <Button variant="success">Add Promotion</Button>
                                </Link>




                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListServiceComponent;
