import React, { useState } from "react";
import EventCard from "../components/eventCard";
import EventPage from "../components/eventPage";
import { events } from "../eventClint";

import '../stylesheets/events.css';



interface Events{
    events: Event[];
}

const Events: React.FC = () => {
    const [isShow, setIsShow] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

    const handleClick = (myEvent: Event) => {
        setIsShow(true);
        setCurrentEvent(myEvent);
    };

    return (
        (
            <div className="events-container">
                <ul className="events-list">
                    {events.map((event, index) => (
                        <li key={index}>
                            <EventCard
                                id={event.id}
                                title={event.title}
                                companyName={event.companyName}
                                description={event.description}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};

export default Events;
