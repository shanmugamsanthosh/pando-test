import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Breadcrumbfun() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      fontSize={13}
      sx={{color : "#616161",fontWeight : 600,marginBottom: 2}}
    //   onClick={handleClick}
    >
      New Plan
    </Link>,
    <Typography key="3" sx={{ color: "#005399", fontSize:"13px"}}>
      &lt; New Plan &gt;
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
