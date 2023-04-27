/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 27/04/2023 - 21:35:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DeleteServiceComponent = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/services/${id}/supprimer-promotion`)
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    if (service != null) {
      axios
        .get(`http://localhost:5000/services/${id}/supprimer-promotion`)
        .then((res) => {
          console.log(res);
          console.log('Service delete successful');
          navigate('/'); // Redirect to services list after successful deletion
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h2>Delete Service</h2>
      {service != null ? (
        <div>
          <p>Are you sure you want to delete the service "{service.nom}"?</p>
          <Button
            variant="danger"
            onClick={() =>
              window.confirm(`Are you sure you want to delete the service "${service.nom}"?`) && handleDelete()
            }
          >
            Delete
          </Button>
        </div>
      ) : (
        <p>Service not found</p>
      )}
    </div>
  );
};

export default DeleteServiceComponent;
