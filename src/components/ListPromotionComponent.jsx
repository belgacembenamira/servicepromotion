/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 26/04/2023 - 00:35:22
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
import { Link } from 'react-router-dom';

const ListPromotionComponent = () => {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/promotion/lister')
            .then(response => {
                const data = response.data.PromotionList;
                const promotionArray = Object.keys(data).map(key => {
                    return data[key];
                });
                setPromotions(promotionArray);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h3 className='text-center '>List of Promotions</h3>
            <table className="table table-bordered table-hover m-3 p-3" style={{ marginTop: 20 }}>
                <thead className="thead-dark bg-primary">
                    <tr>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Discount</th>
                        <th>Promotion Description</th>
                        <th>Service ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(promotions) && promotions.map(promotion => (
                        <tr key={promotion._id}>
                            <td>{promotion.debut}</td>
                            <td>{promotion.fin}</td>
                            <td>{promotion.discount}%</td>
                            <td>{promotion.desc_promotion}</td>
                            <td>{promotion._id}</td>
                            <td>
                                <Link to={`/promotion/modifier/${promotion._id}`} className="btn btn-primary p-2 m-2">Modifier</Link>
                                <br />
                                <Link to={`/promotion/supprimer/${promotion._id}`} className="btn btn-primary p-1 m-1">Supprimer</Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListPromotionComponent;
