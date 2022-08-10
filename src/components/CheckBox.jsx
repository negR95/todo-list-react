import { useState } from "react";

export default function checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(isChecked);
  };

  return <input type="checkbox" className="form-check-input check-box" onChange={handleChange} />;
}
