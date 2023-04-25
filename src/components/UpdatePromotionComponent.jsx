/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/04/2023 - 09:12:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UpdatePromotionComponent = () => {
    // const [nomPromotion, setNomPromotion] = useState('');
    const [discount, setReductionPromotion] = useState('');
    const [debut, setDateDebutPromotion] = useState('');
    const [fin, setDateFinPromotion] = useState('');
    const [desc_promotion, setDescriptionPromotion] = useState('');

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/promotion/${id}/modifier`)
            .then((res) => {
                // setNomPromotion(res.data.nomPromotion);
                setReductionPromotion(res.data.reductionPromotion);
                setDateDebutPromotion(res.data.dateDebutPromotion);
                setDateFinPromotion(res.data.dateFinPromotion);
                setDescriptionPromotion(res.data.desc_promotion);
            })
            .catch((err) => console.log(err));
    }, [id]);

    // const handleNomPromotionChange = (event) => {
    //     setNomPromotion(event.target.value);
    // };

    const handleReductionPromotionChange = (event) => {
        setReductionPromotion(event.target.value);
    };

    const handleDateDebutPromotionChange = (event) => {
        setDateDebutPromotion(event.target.value);
    };

    const handleDateFinPromotionChange = (event) => {
        setDateFinPromotion(event.target.value);
    };
    const handleDescriptionPromotionChange = (event) => {
        setDescriptionPromotion(event.target.value);
      };
      

    const handleSubmit = (event) => {
        event.preventDefault();

        const promotionData = {
            // nomPromotion,
            discount,
            debut,
            desc_promotion,
            fin
        };

        axios
            .post(`http://localhost:5000/promotion/${id}/modifier`, promotionData)
            .then((res) => {
                console.log(res);
                console.log(promotionData);
                console.log('Update successful');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Update Promotion</h2>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label>Nom de la Promotion: </label>
                    <input type="text" value={nomPromotion} onChange={handleNomPromotionChange} />
                </div> */}
                <div>
                    <label>Réduction: </label>
                    <input
                        type="number"
                        value={discount}
                        onChange={handleReductionPromotionChange}
                    />
                </div>
                <div>
                    <label>Date début: </label>
                    <input
                        type="date"
                        value={debut}
                        onChange={handleDateDebutPromotionChange}
                    />
                </div>
                <div>
                    <label>Date fin: </label>
                    <input
                        type="date"
                        value={fin}
                        onChange={handleDateFinPromotionChange}
                    />
                </div>
                <div>
                    <label>Description de la Promotion: </label>
                    <textarea value={desc_promotion} onChange={handleDescriptionPromotionChange} />
                </div>

                <button type="submit">Modifier</button>
            </form>
        </div>
    );
};

export default UpdatePromotionComponent;
