import React from 'react'
import type { FC } from 'react'


interface TicketTypeProps {
    type: string,
    name: string,
    description: string,
    cost: number,
    count: number,
    handleTicketChange: (e) => void
}

const Ticket: FC<TicketTypeProps> = ({type, name, description, cost, count, handleTicketChange}) => {
    return (
        <div className="ticket-option">
            <label htmlFor={type}>{name}</label>
            <p>{description}</p>
            <span>${cost}</span>
            <input
              type="number"
              id={type}
              name={type}
              min="0"
              value={count}
              onChange={handleTicketChange}
            />
          </div>
    )
}

export default Ticket