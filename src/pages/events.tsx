import React, { useEffect, useState } from "react";
import EventCard from "../components/eventCard";
import axios from "axios";

import '../stylesheets/events.css';

export interface Event {
    _id: string;
    title: string;
    companyName: string;
    description: string;
}

export const Events: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([])
    useEffect(() => {
        axios
            .get("http://localhost:9000/eventspage")
            .then((res) => {
                console.log(res.data);
                setEvents(res.data);
    })
        .catch((err) => console.log("Error:", err))
}, [])

return (
    (
        <div className="events-container">
            <ul className="events-list">
                {events.map((event, index) => (
                    <li key={index}>
                        <EventCard
                            _id={event._id}
                            title={event.title}
                            companyName={event.companyName}
                            description={event.description}
                            events={events}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
);
};

export default Events;
