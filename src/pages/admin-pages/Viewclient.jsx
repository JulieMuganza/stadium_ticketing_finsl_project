import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Use axios for HTTP requests
import "./Viewclient.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';



function Viewclient() {
  const [clients, setClients] = useState([]); // State to store all client data
  const [filteredClients, setFilteredClients] = useState([]); // State to store filtered client data
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State to handle errors
  const [selectedClass, setSelectedClass] = useState(""); // State for the selected ticket class
  const [name, setName] = useState('');
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch client data from the backend
    axios
      .get('http://localhost:8080/view')
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

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:8080/delete/' + id)
      .then((response) => {
        const updatedClients = clients.filter(client => client.id !== id);
        setClients(updatedClients);
        setFilteredClients(updatedClients);
        setLoading(false);
        navigate("/viewclient");
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to delete client data');
        setLoading(false);
      });
  };

  const handleDownload = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/download/${id}`, {
        responseType: 'blob', // Ensures the response is treated as a binary file
      });

      // Create a temporary link for downloading
      const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Booking_Details_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
      alert("Failed to download the file.");
    }
  };

  const handleClassFilter = (ticketClass) => {
    setSelectedClass(ticketClass);
    if (ticketClass) {
      const filtered = clients.filter(client => client.ticketclass === ticketClass);
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients); // Reset to all clients when no filter is selected
    }
  };

  const handleFilterByName = (e) => {
    e.preventDefault();
    const filtered = clients.filter(client => client.clientName === name);
    setFilteredClients(filtered);
    console.log(name)
  }
  return (
    <div>
      <Header />
      <div className="container-fluid mt-5">
        <h1>{t('TICKET BOOKED')}</h1>

        {/* Search Bar and Buttons */}
        <div className="">
          <form style={{ display: "flex", alignItems: "center" }} className="search-bar-buttons" onClick={handleFilterByName}>
            <input
              type="text"
              className="search-input"
              name="clientName"
              placeholder={t('Search by Client Name')}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="filter-button">
              {t('Search')}
            </button>
          </form>
        </div>

        <div className="search-bar">
          <a className="back-button" onClick={() => (window.location.href = 'admin')}>
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
            onClick={() => (window.location.href = '/admin/viewsorted')}
          >
            {t('Sort by Name')}
          </a>
          <a
            className="filter-button"
            onClick={() => (window.location.href = 'admin')}
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
                      onClick={() => handleDelete(client.id)}
                    >
                      {t('Delete')}
                    </a>
                    <a
                      className="download-button"
                      onClick={() => handleDownload(client.id)}
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

export default Viewclient;
