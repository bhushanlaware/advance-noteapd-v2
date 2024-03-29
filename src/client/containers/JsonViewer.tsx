import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
  useTheme
} from "@material-ui/core";
import {
  Edit,
  Restore,
  UnfoldLess,
  UnfoldMore,
  Visibility,
} from "@material-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import ReactJson from "react-json-view";

const JsonViewer = (props) => {
  const [json, setJson] = useState("");
  const [obj, setObj] = useState(null);
  const [invalid, setInvalid] = useState(false);
  const [view, setView] = useState(false);
  const theme = useTheme();
  const [options, setOptions] = useState({
    collapsed: false,
    displayObjectSize: false,
    displayDataTypes: false,
    sortKeys: false,
  });
  const handleView = () => {
    try {
      const myObj = JSON.parse(json);
      setInvalid(false);
      setObj(myObj);
    } catch {
      setInvalid(true);
      setObj(null);
    } finally {
      setView(true);
    }
  };
  const handleEdit = () => {
    setView(false);
  };
  const handleReset = () => {
    setInvalid(false);
    setJson("");
    setObj(null);
    setView(false);
  };
  return (
    <Box p={3}>
      <Grid container>
        <Box pb={2}>
          <Typography variant="subtitle1" color="textSecondary">
            This app do not upload your data or store it anywhere. So feel free
            to paste senstive data.
          </Typography>
        </Box>
        <Grid item xs={12}>
          <TextField
            label="Enter raw json"
            value={json}
            multiline
            rows={10}
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setJson(e.target.value);
            }}
            disabled={view}
          ></TextField>
        </Grid>
      </Grid>
      <Box pt={2} pb={2}>
        {" "}
        <Grid container style={{ justifyContent: "space-between" }}>
          <Grid item>
            <Box pb={2} style={{ float: "left" }}>
              {view ? (
                <ButtonGroup variant="contained" color="primary">
                  <Button startIcon={<Edit />} onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button startIcon={<Restore />} onClick={handleReset}>
                    Reset
                  </Button>
                </ButtonGroup>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Visibility />}
                  onClick={handleView}
                  disabled={json === ""}
                >
                  View JSON
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item>
            <Box pb={2} style={{ float: "right" }}>
              <ToggleButtonGroup
                value={options.collapsed}
                size="small"
                onChange={(e, v) => {
                  if (v !== null) setOptions({ ...options, collapsed: v });
                }}
                exclusive
              >
                <ToggleButton value={true}>
                  <UnfoldLess fontSize="small"></UnfoldLess> Collapse
                </ToggleButton>
                <ToggleButton value={false}>
                  <UnfoldMore fontSize="small"></UnfoldMore>Expand
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {view ? (
        <Box style={{ fontSize: "1.2rem", clear: "both" }}>
          {obj && !invalid ? (
            <ReactJson
              displayDataTypes={false}
              src={obj}
              theme={
                theme.palette.mode === "dark"
                  ? "summerfruit"
                  : "summerfruit:inverted"
              }
              {...options}
            />
          ) : (
            <Typography variant="h6" color="secondary">
              Provided json is not valid. 💥
            </Typography>
          )}
        </Box>
      ) : null}
    </Box>
  );
};

export default JsonViewer;
