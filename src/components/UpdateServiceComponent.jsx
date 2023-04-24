/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 24/04/2023 - 23:15:15
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

const UpdateServiceComponent = () => {
    const [nom, setNom] = useState('');
    const [CoutService, setCoutService] = useState('');
    const [DescriptionService, setDescriptionService] = useState('');
    const [lieuService, setLieuService] = useState('');

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/service/${id}/modifier`)
            .then((res) => {
                setNom(res.data.nom);
                setCoutService(res.data.coutService);
                setDescriptionService(res.data.descriptionService);
                setLieuService(res.data.lieuService);
                console.log("modifier"+ res )
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleNomChange = (event) => {
        setNom(event.target.value);
    };

    const handleCoutServiceChange = (event) => {
        setCoutService(event.target.value);
    };

    const handleDescriptionServiceChange = (event) => {
        setDescriptionService(event.target.value);
    };

    const handleLieuServiceChange = (event) => {
        setLieuService(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceData = {
            nom,
            CoutService,
            DescriptionService,
            lieuService
        };

        axios
            .post(`http://localhost:5000/service/${id}/modifier`, serviceData)
            .then((res) => {
                console.log(res);
                console.log(serviceData);
                console.log('Update successful');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Update Service</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom: </label>
                    <input type="text" value={nom} onChange={handleNomChange} />
                </div>
                <div>
                    <label htmlFor="coutService">Cout Service: </label>
                    <input
                        type="number"
                        value={CoutService}
                        onChange={handleCoutServiceChange}
                    />
                </div>
                <div>
                    <label htmlFor="descriptionService">Description Service: </label>
                    <textarea
                        value={DescriptionService}
                        onChange={handleDescriptionServiceChange}
                    />
                </div>
                <div>
                    <label htmlFor="lieuService">Lieu Service: </label>
                    <input type="text" value={lieuService} onChange={handleLieuServiceChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateServiceComponent;
