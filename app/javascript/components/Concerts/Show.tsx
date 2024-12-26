import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import type { FC } from 'react'
import TicketItem from '../TicketItem.tsx'
import './ConcertForm.css'; // Ensure the CSS file is imported

interface BandProps {
  event: {
    name: string;
    id: number;
    date: number;
    location: string;
    description_blurb: string;
    imgUrl: string;
  };
  ticket_types: Array<{
    t_type: string;
    name: string;
    description: string;
    cost: number;
    count: number;
  }>;
}


const Show: FC<BandProps> = (band) => {
  // add count to each  ticket
  const updatedTickets = band.ticket_types.map((ticket) => ({
    ...ticket,
    count: 0,
  }));
  
  // makes it a object by type
  const ticketsByType = updatedTickets.reduce((acc, ticket) => {
    acc[ticket.t_type] = ticket;
    return acc;
  }, {} as Record<string, typeof updatedTickets[0]>);


  const [tickets, setTickets] = useState(ticketsByType);

  const handleTicketChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setTickets((prevTickets) => ({
      ...prevTickets,
      [name]: {
        ...prevTickets[name],
        count: parseInt(value, 10) || 0,
      },
    }));
  };

  const [total, setTotal] = useState<number>(0);

  const calculateTotal = (): number => {
    const newTotal = Object.values(tickets).reduce(
      (total, ticket) => total + ticket.count * ticket.cost,
      0
    );
    setTotal(newTotal); // Update state with the calculated total
    return newTotal; // Optionally return the calculated total
  };

  useEffect(() => {
    calculateTotal();
  }, [tickets]); 

  // const calculateTotal = (): number => {
  //   return (
  //     Object.values(tickets).reduce((total, ticket) => total + (ticket.count * ticket.cost), 0)
  //   );
  // };


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log("Form Submitted:", { tickets, formData, calculateTotal });
  };

  const eventDate = new Date(Number(band.event.date)).toLocaleString('en-US');

  return (
    <div className="event-container">
      <div className="event-details">
        <h1>rock</h1>
        <p>
          <span>📅 {eventDate}</span>
          <br />
          <span>📍 {band.event.location}</span>
        </p>
        <div className="event-image">
          <img src={band.event.imgUrl} alt="Event" />
        </div>
        <p className="event-description" dangerouslySetInnerHTML={{ __html:band.event.description_blurb}} />
      </div>
      <div className="ticket-form">
        <h2>Select Tickets</h2>
        <form onSubmit={handleSubmit}>

          {Object.entries(tickets).map(([_key, ticket], index) => (
            <TicketItem key={index} type={ticket.t_type} name={ticket.name} description={ticket.description} cost={ticket.cost} count={ticket.count} handleTicketChange={handleTicketChange}  />
          ))}

          <div className="total">
            <h3>TOTAL</h3>
            <span>${total}</span>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <h3>Payment Details</h3>
          <div className="payment-group">
            <input
              type="text"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="MM / YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Get Tickets</button>
        </form>
      </div>
    </div>
  );
};

export default Show;
