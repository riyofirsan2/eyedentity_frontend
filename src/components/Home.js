import React from 'react'
import Navbar from './Navbar/Navbar'

import { connect } from "react-redux";
import Add from "./Homepage/Add";
import Post from "./Homepage/Post";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Add />
      <Post />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    viaLogin: state.login.viaLogin,
  };
};

export default connect(mapStateToProps)(Home);
