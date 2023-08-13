import React, { useState } from "react";
import EventCard from "../components/eventCard";
import EventPage from "../components/eventPage";  

import '../stylesheets/events.css';

interface Event {
    title: string;
    companyName: string;
    description: string;
}

interface EventsProps {
    events: Event[];
}

const Events: React.FC<EventsProps> = (props) => {
    const [isShow, setIsShow] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

    const handleClick = (myEvent: Event) => {
        setIsShow(true);
        setCurrentEvent(myEvent);
    };

    return (
        (!isShow) ? (
            <div className="events-container">
                <ul className="events-list">
                    {props.events.map((event, index) => (
                        <li key={index}>
                            <EventCard
                                title={event.title}
                                companyName={event.companyName}
                                description={event.description}
                                handleClick={handleClick}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        ) :
        currentEvent && (
            <EventPage myEvent={currentEvent} />
        )
    );
};

export default Events;
