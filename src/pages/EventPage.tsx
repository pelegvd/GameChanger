import React, { useEffect, useState } from "react";

function EventPage1() {
  const [event, setEvent] = useState<any[]>([]);

  const fetchEventData = () => {
    fetch("http://localhost:9000/event")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvent(data);
      });
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div>
      {event.length > 0 && (
        <ul>
          {event.map((eve) => (
            <li key={eve.id}>
              {eve.title}
              {eve.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventPage1;
