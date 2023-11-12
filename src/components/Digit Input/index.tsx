import React, { useState } from "react";
import useDigitInput from "react-digit-input";

export default function DigitalInput() {
  const [value, onChange] = React.useState("");
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 6,
    value,
    onChange,
  });
  return (
    <div>
      <div className="input-group">
        <input inputMode="decimal" autoFocus {...digits[0]} />
        <input inputMode="decimal" {...digits[1]} />
        <input inputMode="decimal" {...digits[2]} />
      </div>
    </div>
  );
}
