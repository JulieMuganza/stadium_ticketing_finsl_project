import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SearchBookings() {
  const { t } = useTranslation();
  const [clientName, setClientName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null); // For error handling

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the search parameters
    const searchParams = new URLSearchParams();
    if (clientName) searchParams.append('clientName', clientName);
    if (bookingDate) searchParams.append('bookingDate', bookingDate);

    console.log('Search Parameters:', searchParams.toString()); // Debugging

    // Perform the search by making a GET request
    try {
      const response = await fetch(`/searchBooking?${searchParams.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response Data:', data); // Debugging

      if (Array.isArray(data)) {
        setBookings(data); // Assuming the backend returns a list of bookings
        setError(null); // Clear any previous errors
      } else {
        throw new Error('Unexpected data format received from the backend');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError(t('An error occurred while fetching bookings. Please try again.'));
      setBookings([]); // Clear bookings if an error occurs
    }
  };

  return (
    <div>
      <h2>{t('Search Bookings')}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="clientName">{t('Client Name')}:</label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder={t('Enter client name')}
        />

        <label htmlFor="bookingDate">{t('Booking Date')}:</label>
        <input
          type="date"
          id="bookingDate"
          name="bookingDate"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />

        <button type="submit">{t('Search')}</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {bookings.length > 0 ? (
        <div>
          <h3>{t('Search Results')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('Client Name')}</th>
                <th>{t('Booking Date')}</th>
                <th>{t('Email')}</th>
                <th>{t('Phone Number')}</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.clientName}</td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !error && <p>{t('No bookings found.')}</p>
      )}
    </div>
  );
}

export default SearchBookings;
