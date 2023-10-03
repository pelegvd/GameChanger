import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Paper, Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type MyEvent = {
    _id: string;
    title: string;
    description: string;
};

interface SingleEventProps {
    _id: string;
    title: string;
    description: string;
}

const EventCard: React.FC<SingleEventProps> = (props) => {
    const { _id, title, description } = props;
    const [open, setOpen] = useState(false);
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
                <Typography variant="body2">{description}</Typography>
                <Box>
                    <Link to={`/events/${_id}`} >
                        <Button onClick={() => setOpen(!open)}>
                            Intrested
                        </Button>
                    </Link>
                    <Button>
                        <EditIcon />
                    </Button>
                </Box>
            </Paper>
            <Dialog open={open}
                onClick={() => setOpen(!open)}
            >
                
            </Dialog>
        </Box>
      </Paper>
    </Box>
  );
};

export default EventCard;
