import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./ButtonComponent.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ButtonComponent({ link, linkName }) {
  return (
    <Link className="button_link" to={link}>
      <Button variant="contained" disableElevation>
        {linkName}
      </Button>
    </Link>
  );
}
