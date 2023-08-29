import React from "react";
import { Link } from "react-router-dom";
import { Typography, Paper, Box, Button } from "@mui/material";

type MyEvent = {
    _id: string;
    title: string;
    companyName: string;
    description: string;
};

interface SingleEventProps {
    _id: string;
    title: string;
    companyName: string;
    description: string;
    events?: MyEvent[];
}

const EventCard: React.FC<SingleEventProps> = (props) => {
    const { _id, title, companyName, description, events } = props;
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
                <Button component={Link} to={`/events/${_id}`} >
                    <Link style={{ textDecoration: 'none' }} to={`/events/${_id}`} state={{ events }}>
                        Interested
                    </Link>
                </Button>

            </Paper>
        </Box>
    );
}

export default EventCard;
