import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

interface Event {
    _id: string;
    title: string;
    companyName: string;
    description: string;
}

const EventPage: React.FC = () => {
    const { eventID } = useParams<{ eventID: string }>();
    const location = useLocation();

    const events: Event[] | undefined = location.state?.events;

    const myEvent = events?.find(e => e._id === eventID);

    if (!myEvent) {
        return <div>Event not found</div>;
    }

    return (
         <div className="event-page-container">
            <Typography variant="h2">{myEvent.title}</Typography>
            <Typography variant="h3">{myEvent.companyName}</Typography>
            <Typography variant="h6">{myEvent.description}</Typography>
            <Typography variant="body1">Location on Google Maps</Typography>
        </div>
    );
};

export default EventPage;
