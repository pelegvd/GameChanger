import React from "react";
import '../stylesheets/eventCard.css';

interface SingleEventProps {
    title: string;
    companyName: string;
    description: string;
    handleClick: (myEvent: SingleEventProps) => void;
}

const EventCard: React.FC<SingleEventProps> = (props) => {
    const { title, companyName, description, handleClick } = props;

    const handleButtonClick = () => {
        const currentEvent: SingleEventProps = {
            title,
            companyName,
            description,
            handleClick: props.handleClick  
        };

        handleClick(currentEvent);
    };

    return (
        <div className="event-card-container">
            <div>
                <h1>{title}</h1>
                <h2>{companyName}</h2>
                <p>{description}</p>
            </div>
            <button className="btn-event-card" onClick={handleButtonClick}>
                Interested
            </button>
        </div>
    );
}

export default EventCard;
