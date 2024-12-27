import React from 'react';
import './Event.css';

interface EventProps {
  id: number;
  ticket: {
    id: number;
    name: string;
    code_name: string;
    date: string;
    location: string;
    description_blurb: string;
    imgUrl: string;
  };
}

const Event: React.FC<EventProps> = ({ ticket }) => {

  const { id, name, date, location, description_blurb, imgUrl } = ticket;
  const eventDate = new Date(Number(date));
  const day = eventDate.toLocaleString('en-US', { weekday: 'long' });
  const month = eventDate.toLocaleString('en-US', { month: 'long' });
  const time = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    
    <div className="ticket">
      <div className='tiket-info'>
        <div className="date">
          <span className="day">{day}</span>
          <span className="month-and-time">
            {month}
            <br />
            <span className="small">{time}</span>
          </span>
        </div>

        <div className="artist">
          <span className="name">{name}</span>
          <br />
          <span className="live small">LIVE</span>
        </div>

        <div className="location">
          <span>{location}</span>
          <br />
          <span className="small" ></span>
        </div>

        <div className="rip"></div>
      </div>
      <div className="cta">
        <a href={`/concerts/${id}`}>
          <button className="buy">
            GRAB A TICKET
          </button>
        </a>
      </div>
    </div>
  );
}

export default Event;