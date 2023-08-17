import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

function AddEvent() {
    const [open,openchange]=useState(false);
    const functionopenpopup=()=>{
        openchange(true);
    }
    const closepopup=()=>{
        openchange(false);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      };
    
      const defaultProps = {
        options: categorys,
        getOptionLabel: (option: FilmOptionType) => option.title,
      };
      const flatProps = {
        options: categorys.map((option) => option.title),
      };
      const [value, setValue] = React.useState<FilmOptionType | null>(null);
    return (
        <div style={{textAlign:'center'}}>
            <Button onClick={functionopenpopup} color="primary" variant="contained">Add Event</Button>
            <Dialog 
            // fullScreen 
            open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>Event Details<IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                    <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Event Name</label>
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Required"
            defaultValue="Event Name"
            margin="normal"
          />
        </div>
        <div>
          <label>Description</label>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            margin="normal"
            rows={9}
            defaultValue="Description"
          />
        </div>
        <div>
          <label>Location</label>
          <input name="location" placeholder="location" />
        </div>

        <Stack>
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            includeInputInList
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Category"
                variant="standard"
              />
            )}
          />
        </Stack>

        <div>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <button className="btn-submit" type="submit">
            Add
          </button>
        </div>
      </form>
                    </Stack>
                </DialogContent>
                <DialogActions>
                {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}

interface FilmOptionType {
    title: string;
  }
  
  const categorys = [
    { title: "Sport" },
    { title: "Art" },
    { title: "Volenteer" },
    { title: "Food" },
    { title: "Watch" },
  ];

export default AddEvent;