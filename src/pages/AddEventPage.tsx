import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';


document.body.addEventListener("submit", async function (event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const data = new FormData(form)
  await fetch('http://localhost:9000/event', {method:'post', headers:{"content-Type":"application/json"}, body:JSON.stringify(Object.fromEntries(data.entries()))})
  .then((response: Response) => response.json()) 
  .then((json) => json)
  .catch((error) => console.log(error));
});

function AddEvent() {
  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
  };
  

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
    <div style={{ textAlign: "center" }}>
      <Button onClick={functionopenpopup} color="primary" variant="outlined">
        Add Event
      </Button>
      <Dialog
        // fullScreen
        open={open}
        onClose={closepopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Event Details
          <IconButton onClick={closepopup} style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{" "}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <Stack spacing={2} margin={2}>
          <form>
              <Stack margin={2}>
                <label>Event Name</label>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  name="title"
                  placeholder="Event Name"
                />
              </Stack>
              <Stack margin={2}>
                <label>Description</label>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  required
                  multiline
                  rows={9}
                  name="description"
                  placeholder="Description"
                />
              </Stack>
              <Stack margin={2}>
              <label>Location</label>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  //name="location"
                  placeholder="Location"
                />
              </Stack>
              <Stack spacing={2} direction='row'>
              <Stack margin={2}>
                 <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          size="small"
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Please select category</FormHelperText>
              </Stack>
              <Stack margin={2}>
                <TextField
                  id="outlined-number"
                  label="Members"
                  type="number"
                  //name="members"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
              </Stack>
            </form>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button className="btn-submit" type="submit" variant="outlined">Add</Button>
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
