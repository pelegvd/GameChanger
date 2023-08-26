import React from "react";

export type EventProps = {
  _id?: string;
  title: string;
  description: string;
  location: string;
};


export async function post(data: { title: string, description: string, location: string}) {
  await fetch("http://localhost:9000/event", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
          "content-type": "application/json"
      }
  });
}

function event({ _id, title, description, location}: EventProps) {
    return(
      <article>
        <div>
          <p>{description}</p>
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
      </article>
    );
}

export default event;
