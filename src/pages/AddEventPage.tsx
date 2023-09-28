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
import { useState, useEffect } from "react";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { eventPost } from "../api/EventService";
import AddIcon from "@mui/icons-material/Add";

function AddEvent() {
  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

  const categorys = ["Sport", "Art", "Volenteer", "Food", "Watch"];

  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  async function fetchData(data: any) {
    try {
      const result = await eventPost(data);
      return result.status;
    } catch (error: any) {
      const status = error.response.status;
      console.log(status);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const jsonData = JSON.stringify(Object.fromEntries(data.entries()));
    console.log(jsonData);
    fetchData(jsonData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* <Button onClick={functionopenpopup} color="primary" variant="outlined">
        Add Event
        <AddIcon />
      </Button> */}
      <AddIcon onClick={functionopenpopup} />
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
          <Stack spacing={2} margin={2}>
            <form onSubmit={handleSubmit}>
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
                  name="location"
                  placeholder="Location"
                />
              </Stack>
              <Stack spacing={2} direction="row">
                <Stack margin={2}>
                  <Select
                    name="category"
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={category}
                    size="small"
                    onChange={handleChange}
                  >
                    {categorys.map((c) => (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Please select category</FormHelperText>
                </Stack>
                <Stack margin={2}>
                  <TextField
                    id="outlined-number"
                    label="Members"
                    type="number"
                    name="members"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
              </Stack>
              <DialogActions>
                <Button className="btn-submit" type="submit" variant="outlined">
                  Add
                </Button>
              </DialogActions>
            </form>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddEvent;
