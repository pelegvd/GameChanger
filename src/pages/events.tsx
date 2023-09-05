import React, { useEffect, useState } from "react";
import EventCard from "../components/eventCard";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

import '../stylesheets/events.css';
import { Stack } from "@mui/material";

export interface Event {
    _id: string;
    title: string;
    companyName: string;
    description: string;
}

export const Events: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("http://localhost:9000/eventspage")
            .then((res) => {
                setEvents(res.data);
                setLoading(false);
            })
            .catch((err) => console.log("Error:", err))
    }, [])

    return (
        (
            <div className="events-container">
                {loading
                    ? (<Stack sx={{ display: 'flex', alignItems: 'center', margin: '5rem' }}>
                        <CircularProgress />
                    </Stack>)
                    : (<ul className="events-list">
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
                    </ul>)
                }
            </div>
        )
    );
};

export default Events;
