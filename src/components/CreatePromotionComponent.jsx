/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 26/04/2023 - 00:25:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreatePromotionComponent = () => {
    const [debut, setDebut] = useState('');
    const [fin, setFin] = useState('');
    const [discount, setDiscount] = useState(0);
    const [desc_promotion, setDescPromotion] = useState('');
    const { id } = useParams(); // récupère l'id du service depuis l'URL

    const handleSubmit = event => {
        event.preventDefault();
        const newPromotion = {
            debut,
            fin,
            discount,
            desc_promotion,
            _id: id // utilise l'id du service récupéré depuis l'URL
        };
        axios
            .post('http://localhost:5000/promotion/ajouter', newPromotion)
            .then(response => {
                console.log(response.data);
                alert('Promotion created successfully!');
            })
            .catch(error => {
                console.log(error);
                alert('An error occurred while creating the promotion.');
            });
    };

    return (
        <div>
            <h3 className='text-center'>Create Promotion</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Start Date: </label>
                    <input type="date" className="form-control" value={debut} onChange={e => setDebut(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>End Date: </label>
                    <input type="date" className="form-control" value={fin} onChange={e => setFin(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Discount: </label>
                    <input type="number" className="form-control" value={discount} onChange={e => setDiscount(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Promotion Description: </label>
                    <textarea className="form-control" value={desc_promotion} onChange={e => setDescPromotion(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Promotion" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default CreatePromotionComponent;
