 import React, { useState } from "react";
import {
  Grid2,
  Box,
  Paper,
  Divider,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import header_logo from "../../static/images/Header-Logo/Apps.png";
import Breadcrumbfun from "./breadcrumb";
import BorderlessDropdown from "./dropdown";

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const options = [
    { value: 10, label: "Option 1" },
    { value: 20, label: "Option 2" },
    { value: 30, label: "Option 3" },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 sx={{ margin: 0 }} size={12}>
            <Paper
              //   elevation={3}
              sx={{
                backgroundColor: "#234357",
                margin: 0,
                display: "flex",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <img
                src={header_logo}
                alt="Logo"
                style={{
                  objectFit: "contain",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  height: 28,
                  alignSelf: "center",
                  borderColor: "#9CB3BF80",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{ color: "white" }}
              >
                Global Industries - Planning
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid2 sx={{ margin: 0 }} size={2}>
            <Paper
              sx={{
                borderRadius: "0px",
                margin: 0,
                display: "flex",
                padding: "14px 10px 14px 22px",
                alignItems: "center",
              }}
            >
              <Breadcrumbfun />
            </Paper>
          </Grid2>
          <Grid2 sx={{ margin: 0 }} size={8}>
            <Paper
              sx={{
                borderRadius: "0px",
                margin: 0,
                display: "flex",
                padding: "8px",
                alignItems: "center",
                height: "36px",
              }}
            ></Paper>
          </Grid2>
          <Grid2 sx={{ margin: 0 }} size={2}>
            <Paper
              sx={{
                borderRadius: "0px",
                margin: 0,
                display: "flex",
                padding: "11px 30px 10px 30px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  padding: "5px",
                  backgroundColor: "#E7E7E7",
                  color: "#616161",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                CREATE SHIPMENT
              </Button>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid2 container rowSpacing={1} >
          <Grid2 sx={{ margin: 0 }} size={12}>
            <Paper
              sx={{
                backgroundColor: "#E9F1F5",
                margin: 0,
                display: "flex",
                padding: "8px",
                alignItems: "center",
                borderRadius: "0px",
              }}
            >
              <Typography
                variant="span"
                noWrap
                component="span"
                sx={{
                  color: "#616161",
                  fontSize: "12px",
                  padding: "0px 0px 0px 14px",
                  width : "100px"
                }}
              >
                Planning Group :{" "}
              </Typography>
              {/* <BorderlessDropdown
                  label="Select an Option"
                  options={options}
                  value={selectedValue}
                  onChange={handleDropdownChange}
                /> */}
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Header;
