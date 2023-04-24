/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/04/2023 - 00:02:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
 * @description      : 
 * @uthor            : belgacem
 * @group            : 
 * @created          : 24/04/2023 - 23:52:17
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/04/2023
 * - Author          : belgacem
 * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DeleteServiceComponent = () => {
    const [service, setService] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/service/lister`)
            .then((res) => {
                setService(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = () => {
        axios.get(`http://localhost:5000/service/${id}/supprimer`)
            .then((res) => {
                console.log(res);
                console.log('Delete successful');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Delete Service</h2>
            {service && (
                <div>
                    <p>Êtes-vous sûr de vouloir supprimer le service "{service.nom}" ?</p>
                    <Button variant="danger" onClick={handleDelete}>Supprimer</Button>
                </div>
            )}
        </div>
    );
};

export default DeleteServiceComponent;
