import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

document.body.addEventListener("submit", async function (event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const foo = new FormData(form)
  //console.log(Object.fromEntries(foo.entries()));
  console.log(JSON.stringify(Object.fromEntries(foo.entries())))
  await fetch('http://localhost:9000/event', {method:'post', headers:{"content-Type":"application/json"}, body:JSON.stringify(Object.fromEntries(foo.entries()))})
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
      <Button onClick={functionopenpopup} color="primary" variant="contained">
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
          {/*className="ui form" onSubmit={e => {
          //e.preventDefault();
          //const foo = new FormData(e)
          //console.log(Object.fromEntries(e))
          //const foo = new FormData(e.target)
          //console.log(Object.fromEntries(foo.entries()));
         // fetch('http://localhost:9000/event', {method:'post',body:JSON.stringify(Object.fromEntries(foo.entries())), headers:{contentType:"application/json"}})
          //}}>*/}
              <div>
                <label>Event Name</label>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Required"
                  name="title"
                  margin="normal"
                  placeholder="Event Name"
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
                  name="description"
                  placeholder="Description"
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
                  //name="members"
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
