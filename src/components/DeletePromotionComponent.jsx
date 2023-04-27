/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 26/04/2023 - 00:40:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeletePromotionComponent = () => {
    const [promotion, setPromotion] = useState({});
    const { id } = useParams(); // récupère l'id de la promotion depuis l'URL

    useEffect(() => {
        axios
            .get(`http://localhost:3000/promotion/${id}`)
            .then(response => {
                setPromotion(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleDelete = event => {
        event.preventDefault();
        axios
            .get(`http://localhost:5000/promotion/${id}/supprimer`)
            .then(response => {
                console.log(response.data);
                alert('Promotion deleted successfully!');




            })
            .catch(error => {
                console.log(error);
                alert('An error occurred while deleting the promotion.');
            });
    };

    return (
        <div>
                               <p>Êtes-vous sûr de vouloir supprimer Promotion </p>

            <form onSubmit={handleDelete}>
                <div className="form-group">
                    <input type="submit" value="Delete Promotion" className="btn btn-danger" />
                </div>
            </form>
        </div>
    );
};

export default DeletePromotionComponent;
