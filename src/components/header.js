import React from "react";
import Toolbar from  '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(props) {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <AppBar style={{ backgroundColor: '#FF00FF' }} className="header_container" position="static">
        <Toolbar>
          <h3>Tasneem Store ™️</h3>
          <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
            </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}


