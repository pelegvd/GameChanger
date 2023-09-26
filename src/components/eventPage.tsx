import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import { eventDelete } from "../api/EventService";

interface Event {
  _id: string;
  title: string;
  description: string;
}

const EventPage: React.FC = () => {
  const { eventID } = useParams<{ eventID: string }>();
  const [myEvent, setmyEvent] = useState<Event>();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/eventspage/${eventID}`)
      .then((res) => {
        setmyEvent(res.data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  if (!myEvent) {
    return <div>Event not found</div>;
  }

  const handleDelete = async () => {
    try {
      const response = await eventDelete(eventID);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="event-page-container">
      <Typography variant="h2">{myEvent.title}</Typography>
      <Typography variant="h6">{myEvent.description}</Typography>
      <Typography variant="body1">Location on Google Maps</Typography>
      <Button variant="outlined" onClick={handleDelete}>
        Delete event
      </Button>
    </div>
  );
};

export default EventPage;
