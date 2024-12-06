import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useTranslation } from 'react-i18next';

function EditClient() {
  const {t,i18n} = useTranslation();
  const { id } = useParams(); // Get client ID from URL
  const navigate = useNavigate();
  const [client, setClient] = useState({
    clientName: "",
    phoneNumber: "",
    email: "",
    ticketclass: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch client details for editing
    axios
      .get(`http://localhost:8080/edit/${id}`)
      .then((response) => setClient(response.data))
      .catch((err) => setError("Failed to load client details"));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/edit/${id}`, client)
      .then(() => {
        alert("Client updated successfully");
        navigate("/admin/viewsorted"); // Redirect to client list
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update client");
      });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
  <Header />
  <div className="container">
    <h1>{t('Edit Client')}</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>{t('Client Name')}:</label>
        <input
          type="text"
          className="form-control"
          name="clientName"
          value={client.clientName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>{t('Phone Number')}:</label>
        <input
          type="text"
          className="form-control"
          name="phoneNumber"
          value={client.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>{t('Email')}:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={client.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>{t('Ticket Class')}:</label>
        <input
          type="text"
          className="form-control"
          name="ticketclass"
          value={client.ticketclass}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {t('Save Changes')}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => navigate("/viewsorted")}
      >
        {t('Cancel')}
      </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditClient;
