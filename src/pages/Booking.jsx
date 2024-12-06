import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import "./footer.css";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useTranslation } from 'react-i18next';

const Booking = () => {
    const {t,i18n} = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        client_name: "",
        client_email: "",
        phone_number: "",
        ticket_class: "economy",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "file") {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = new FormData();
        form.append("clientName", formData.client_name);
        form.append("email", formData.client_email);
        form.append("phoneNumber", formData.phone_number);
        form.append("ticketClass", formData.ticket_class);
        if (formData.file) {
            form.append("file", formData.file);
        }
        
    
        try {
            const response = await fetch("http://localhost:8080/clientform", {
                method: "POST",
                body: form, // Automatically sets multipart/form-data
            });
    
            if (response.ok) {
                alert("Ticket booked successfully!");
                toast.success("Ticket booked successfully!");
                navigate("/user")
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            alert("An error occurred while booking the ticket.");
        }
    };
    
    return (
        <div>
  <ToastContainer />
  <Header />
  <div className="container">
    <h1>{t('BOOK YOUR TICKET WITH US')}</h1>
    <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
      <label>{t('Client Name')}:</label>
      <input
        type="text"
        id="client_name"
        name="client_name"
        value={formData.client_name}
        onChange={handleChange}
        required
      />

      <label>{t('Client Email')}:</label>
      <input
        type="email"
        id="client_email"
        name="client_email"
        value={formData.client_email}
        onChange={handleChange}
        required
      />

      <label>{t('Phone Number')}:</label>
      <input
        type="tel"
        id="phone_number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />

      <label>{t('Ticket Class')}:</label>
      <select
        id="ticket_class"
        name="ticket_class"
        value={formData.ticket_class}
        onChange={handleChange}
      >
        <option value="economy">{t('Economy')}</option>
        <option value="business">{t('Business')}</option>
        <option value="first-class">{t('First Class')}</option>
      </select>

      <label>{t('Passport Photo')}:</label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleChange}
      />

      <input type="submit" value={t('Submit')} />
    </form>
            </div>
            <Footer />
        </div>
    );
};

export default Booking;
