import React from "react";

import '../stylesheets/eventPage.css';

interface Event {
    title: string;
    companyName: string;
    description: string;
}

interface EventPageProps {
    myEvent: Event;
}

const EventPage: React.FC<EventPageProps> = ({ myEvent }) => {

    return (
        <div className="event-page-container">
            <h1>{myEvent.title}</h1>
            <h2>{myEvent.companyName}</h2>
            <p>{myEvent.description}</p>
            <h2>Location on Google Maps</h2>
        </div>
    );
};

export default EventPage;
