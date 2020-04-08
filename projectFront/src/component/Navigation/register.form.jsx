import React, { Component } from "react";
import TagsInput from "react-tagsinput";
import MyComponent from "./Pract";
import "react-tagsinput/react-tagsinput.css";
import RangeSlider from "react-bootstrap-range-slider";
import {
  DropdownButton,
  InputGroup,
  FormControl,
  FormCheck
} from "react-bootstrap";

import SimpleReactValidator from "simple-react-validator";
const options = [
  { value: "flavor", label: "flavor" },
  { value: "yummy", label: "yummy" },
  { value: "red", label: "red" },
  { value: "green", label: "green" },
  { value: "yellow", label: "yellow" }
];

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      // value: { min: 2, max: 20 }
      value: "",
      // value: { min: 2, max: 10 },
      tags: [],
      FirstName: "",
      LastName: "",
      Email: "",
      stateA: "",
      age: "",
      selectedOption: "None",
      address: "",
      subscribe: true,
      options: ""
    };
    console.log(this.state);
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  setFile = e => this.setState({ file: e.target.value });
  setFirstName = e => this.setState({ FirstName: e.target.value });
  setLastName = e => this.setState({ LastName: e.target.value });

  setEmail = e => this.setState({ Email: e.target.value });
  setage = e => this.setState({ age: e.target.value });

  setaddress = e => this.setState({ address: e.target.value });
  setsubscribe = () => this.setState({ subscribe: !this.state.subscribe });
  Inputdata = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = e => {
    this.setState({
      stateA: e.target.value
    });
  };
  handleFormSubmit = e => {
    console.log(e.target.value);
    e.preventDefault();

    if (this.validator.allValid()) {
      let data = {
        file: this.state.file,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        age: this.state.age,
        State: this.state.stateA,

        address: this.state.address,
        subscribe: this.state.subscribe,
        options: this.state.options
      };
      // this.props.UserRegister(data);

      console.log(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  onClickHandler = event => {
    const value = event.target.innerHTML;
    this.setState({ value });
  };
  uploadSingleFile(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    });
  }
  upload(e) {
    e.preventDefault();
    console.log(this.state.file);
  }
  // handleChange(tags) {
  //   console.log(tags);
  //   this.setState({ tags: [...tags] });
  // }
  handleChangeInput(tag) {
    console.log(tag);

    this.setState({ tag });
  }

  render() {
    let imgPreview;
    if (this.state.file) {
      imgPreview = (
        <img
          src={this.state.file}
          alt=""
          style={{ width: "150px", height: "100px" }}
        />
      );
    } else {
      imgPreview = <img src="https://via.placeholder.com/150/92c952" />;
    }
    return (
      <form onSubmit={this.handleFormSubmit} key={Number.toString()}>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">{imgPreview}</div>
            <input type="file" onChange={this.uploadSingleFile} alt="profile" />
          </div>

          <div className="col-md-7 form-group">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="FirstName"
                    className="form-control"
                    name="FirstName"
                    value={this.state.FirstName}
                    onChange={this.setFirstName}
                  />
                  {this.validator.message(
                    "FirstName",
                    this.state.FirstName,
                    "required"
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="LastName"
                    className="form-control"
                    name="LastName"
                    value={this.state.LastName}
                    onChange={this.setLastName}
                  />
                  {this.validator.message(
                    "LastName",
                    this.state.LastName,
                    "required|alpha|min:3"
                  )}
                </div>
              </div>
            </div>
            <br />
            <div className="col-md-12">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="Email"
                value={this.state.Email}
                onChange={this.setEmail}
              />
              {this.validator.message(
                "Email",
                this.state.Email,
                "required|email"
              )}
            </div>
            <br />
            <div className="col-md-12">
              <label>Age</label>
              <RangeSlider value={this.state.age} onChange={this.setage} />
              {/* <MyComponent /> */}
              <span>{this.state.selectedOption}</span>
              <select onChange={this.handleChange} value={this.state.stateA}>
                {options.map(({ value, label }, index) => (
                  <option value={value} key={index}>
                    {label}
                  </option>
                ))}
              </select>
              {this.validator.message("stateA", this.state.stateA, "required")}
            </div>
            <br />
            {/* <div className="col-md-12">
              <Dropdown
                options={options1}
                // @ts-ignore
                onChange={this._onSelect}
                name="options"
                value={defaultOption1}
                placeholder="Country"
              />
            </div> */}
            <br />
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                name="address"
                value={this.state.address}
                onChange={this.setaddress}
              />
              {this.validator.message(
                "address",
                this.state.address,
                "required"
              )}
            </div>
            <br />
            <div className="col-md-12">
              <TagsInput
                value={this.state.tags}
                onChange={() => this.handleChange(this.state.tags)}
              />
            </div>
            <br />

            <div className="col-md-12">
              {" "}
              <FormCheck
                type="checkbox"
                label="Subscribe to news letter"
                name="subscribe"
                onChange={this.setsubscribe}
                defaultChecked={this.state.subscribe}
              />
              {this.validator.message(
                "subscribe",
                this.state.subscribe,
                "required"
              )}
            </div>
            <br />
            <div className="col-md-12">
              <button type="submit" className="btn btn-danger">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginLeft: "5px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default SignUp;