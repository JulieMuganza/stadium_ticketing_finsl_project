import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Use axios for HTTP requests
import "./Viewclient.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useTranslation } from 'react-i18next';

function ViewSorted() {
  const { t, i18n } = useTranslation();
  const [clients, setClients] = useState([]); // State to store client data
  const [filteredClients, setFilteredClients] = useState([]); // State to store filtered client data
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State to handle errors
  const [selectedClass, setSelectedClass] = useState(""); // State for the selected ticket class

  useEffect(() => {
    // Fetch client data from the backend
    axios
      .get('http://localhost:8080/viewsorted')
      .then((response) => {
        setClients(response.data); // Set fetched data
        setFilteredClients(response.data); // Initialize filtered clients with all data
        setLoading(false); // Turn off loading indicator
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch client data'); // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleClassFilter = (ticketClass) => {
    setSelectedClass(ticketClass);
    if (ticketClass) {
      const filtered = clients.filter(client => client.ticketclass === ticketClass);
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients); // Reset to all clients when no filter is selected
    }
  };

  return (
    <div>
      <Header />
      <div className="container-fluid mt-5">
        <h1>{t('TICKET BOOKED')}</h1>

        {/* Search Bar and Buttons */}
        <div className="search-bar">
          <form style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              className="search-input"
              name="clientName"
              placeholder={t('Search by Client Name')}
            />
            <button type="submit" className="filter-button">
              {t('Search')}
            </button>
          </form>
        </div>

        <div className="search-bar">
          <a className="back-button" onClick={() => (window.location.href = "/admin")}>
            {t('Back')}
          </a>
          
          <select
            className="filter-dropdown"
            onChange={(e) => handleClassFilter(e.target.value)}
            value={selectedClass}
          >
            <option value="">{t('Filter with Ticket Class')}</option>
            <option value="business">{t('Business')}</option>
            <option value="first-class">{t('First Class')}</option>
            <option value="regular">{t('Regular')}</option>
          </select>

          <a
            className="filter-button"
            onClick={() => (window.location.href = '/admin')}
          >
            {t('Sort by Name')}
          </a>
          <a
            className="filter-button"
            onClick={() => (window.location.href = '/admin')}
          >
            {t('Return to Dashboard')}
          </a>
        </div>

        {/* Data Table */}
        <table className="table table-hover table-bordered mt-3">
          <thead>
            <tr>
              <th>{t('ID')}</th>
              <th>{t('Client Name')}</th>
              <th>{t('Phone Number')}</th>
              <th>{t('Email')}</th>
              <th>{t('Ticket Class')}</th>
              <th>{t('Action')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.clientName}</td>
                <td>{client.phoneNumber}</td>
                <td>{client.email}</td>
                <td>{client.ticketclass}</td>
                <td>
                  <div className="action-buttons">
                    <a
                      className="edit-button"
                      href={`/edit/${client.id}`}
                    >
                      {t('Edit')}
                    </a>
                    <a
                      className="delete-button"
                      href={`/delete/${client.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.confirm(t('Are you sure you want to delete this booking?'))) {
                          // Add delete logic here
                        }
                      }}
                    >
                      {t('Delete')}
                    </a>
                    <a
                      className="download-button"
                      href={`/download/${client.id}`}
                      download
                    >
                      {t('Download')}
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default ViewSorted;
