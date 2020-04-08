import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
const MyComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <form>
        <div className="form-group">
          {" "}
          {/* <label>Age</label> */}
          <RangeSlider
            value={value}
            onChange={changeEvent => setValue(changeEvent.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default MyComponent;
