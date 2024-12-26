import React from 'react';
import Event from './Event.tsx'

interface ConcertsProps {
    events: Array<{
        id: number;
      name: string;
      code_name: string;
      date: string;
      location: string;
      description_blurb: string;
      imgUrl: string;
    }>;
}

const Index: React.FC<ConcertsProps> = ({events}) => {

  return (
    events.map((ticket) => (
        <Event id={ticket.id} ticket={ticket} />
    ))
    // <p>hello</p>
  );
};

export default Index;
