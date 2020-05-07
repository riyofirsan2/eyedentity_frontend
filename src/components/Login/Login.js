import React,{useState}from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

import './Style.css'
import Logo from '../Img/logo.png'
import {login} from '../../actioncreators/login'


const Login = (props) => {
  const [data, setData] = useState();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.login(data)
}
  
  return (
    <div className="cardform">
      <div className="card p-3 rounded" style={{ width: "18rem" }}>
      <img src={Logo} className="card-img-top mx-auto" alt="..." style = {{width  :"75px"}}/>
      <h4 className="card-title mx-auto">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleChange}/>
          </div>
          <div className="form-group form-check"></div>
          <p className="text-center leading">Don't have an account ? <Link to="/register">Register</Link> </p>
          <button type="submit" className="btn btn-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  login : login
};

export default connect(null, mapDispatchToProps)(Login);
