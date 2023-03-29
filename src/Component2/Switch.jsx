import React from "react";
import "./Switch.css";

const Switch = () => {
  return (
    <div>
      <label class="toggle">
        <input class="toggle-checkbox" type="checkbox" />
        <div class="toggle-switch"></div>
        <span class="toggle-label">Wi-fi</span>
      </label>
        <br />
      <label class="toggle">
        <input class="toggle-checkbox" type="checkbox" />
        <div class="toggle-switch"></div>
        <span class="toggle-label">Bluetooth</span>
      </label>
    </div>
  );
};

export default Switch;
