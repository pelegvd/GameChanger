import React from "react";
import { Link } from "react-router-dom";
import { Typography, Paper, Box } from "@mui/material";

interface SingleEventProps {
    id: number;
    title: string;
    companyName: string;
    description: string;
    // handleClick: (myEvent: SingleEventProps) => void;
}

const EventCard: React.FC<SingleEventProps> = (props) => {
    const { id,title, companyName, description } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    p: 2,
                    width: 500,
                    height: 190,
                    display: 'flex',        
                    flexDirection: 'column', 
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            <Paper elevation={5} >
                <Typography variant="h3">{title}</Typography>
                <Typography variant="h4">{companyName}</Typography>
                <Typography variant="body2">{description}</Typography>
                <Link to={id.toString()}>
                    Interested
                </Link>
            </Paper>
        </Box>

    );
}

export default EventCard;
