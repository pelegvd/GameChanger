import React, { useState } from "react";
import {
    Stack,
    Typography,
    Paper,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    IconButton,
    TextField,
} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";

interface SingleEventProps {
    _id: string;
    title: string;
    description: string;
}

const EventCard: React.FC<SingleEventProps> = (props) => {
    const { title, description, _id } = props;
    const [open, setOpen] = useState(false);
    const [dialogType, setDialogType] = useState(true);
    const [data, setData] = useState<{
        title: string;
        description: string;
    }>({
        title: "",
        description: "",
    });

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setDialogType(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`http://localhost:3000/events${_id}`, {
                title: data.title,
                description: data.description,
            });
            if (res.status === 200) {
                setOpen(false);
            } else if (res.status === 404) {
                console.error('Event not found');
            } else {
                console.error('Error updating event:', res.statusText);
            }
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

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
            <Paper elevation={5}>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
                <Box>
                    <Button variant="outlined" onClick={() => {
                        setOpen(true);
                        setDialogType(true);
                    }} sx={{ m: 1 }}>
                        Intrested
                    </Button>
                    <IconButton onClick={handleClick}>
                        <EditIcon color="secondary" />
                    </IconButton>
                </Box>
            </Paper>
            {dialogType
                ? <Dialog open={open}
                    onClick={() => setOpen(!open)}
                    aria-labelledby="dialog-title"
                    aria-describedby='dialog-description'
                >
                    <DialogTitle id="dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="dialog-description">
                            {description}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(!open)} >
                            Submit
                        </Button>
                        <IconButton>
                            <ClearIcon />
                        </IconButton>
                    </DialogActions>
                </Dialog>
                :
                <Dialog open={open} onClose={handleClose} fullWidth={true}>
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>
                            {`Edit ${title}`}
                        </DialogTitle>
                        <DialogContent dividers>
                            <Stack spacing={2}>
                                <TextField
                                    id="outlined-flexible"
                                    label="Title"
                                    multiline
                                    maxRows={2}
                                    value={data.title}
                                    name="title"
                                    type="text"
                                    onChange={handleSubscribe}
                                />
                                <TextField
                                    id="standard-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={10}
                                    variant="outlined"
                                    value={data.description}
                                    name="description"
                                    type="text"
                                    onChange={handleSubscribe}
                                />
                            </Stack>
                        </DialogContent>
                        <DialogActions>
                            <Stack spacing={1} direction="row"
                                sx={{
                                    pt: "0.3rem",
                                    pr: "1rem",
                                    pb: "0.3rem"
                                }}>
                                <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                                <Button type="submit" variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
                            </Stack>
                        </DialogActions>
                    </form>
                </Dialog>
            }
        </Box>
    );
};

export default EventCard;
