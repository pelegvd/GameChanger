import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../eventClint";

// import '../stylesheets/eventPage.css';

interface Event {
    title: string;
    companyName: string;
    description: string;
}

interface EventPageProps {
    myEvent: Event;
}

const EventPage: React.FC = () => {

    const { eventID } = useParams();
    const myEvent = events.find(e => e.id === Number(eventID))
    if (!myEvent) {
        return <div>
            Event not found
        </div>
    }
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
