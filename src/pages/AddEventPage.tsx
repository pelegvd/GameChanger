import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import "../App.css";
import "../stylesheets/Input.css";
import "../stylesheets/Button.css";

function AddEvent() {
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
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Event Name</label>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Event Name"
          />
        </div>
        <div>
          <label>Description</label>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
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
