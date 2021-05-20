import React,{useState} from "react";

function Gender(){
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
      <select className="form-select" style={{width:'33.3%'}}>
      <option value="" disabled>
        Gender
      </option>
      <option value="" name="gender" >
        Male
      </option>
      <option value="" name="gender">
        Female
      </option>
      <option value="" name="gender">
        Others
      </option>
    </select>
    ); 
}

export default Gender;