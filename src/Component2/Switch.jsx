import React from "react";
import "./Switch.css";

const Switch = () => {
  return (
    <div>
      <label class="toggle">
        <input class="toggle-checkbox" type="checkbox" />
        <div class="toggle-switch"></div>
        <span class="toggle-label">Show rejected applications</span>
      </label>
        <br />
      <label class="toggle">
        <input class="toggle-checkbox" type="checkbox" />
        <div class="toggle-switch"></div>
        <span class="toggle-label">Show only subscribed applications</span>
      </label>
    </div>
  );
};

export default Switch;
