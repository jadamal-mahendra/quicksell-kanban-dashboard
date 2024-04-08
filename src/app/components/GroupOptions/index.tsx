import React from "react";
import "./styles.css";
import { GroupingOptionsProps } from "../../types";
// Define the type for grouping options
export type TGroupingOption = "status" | "user" | "priority";

const GroupingOptions: React.FC<GroupingOptionsProps> = ({
  groupingOption,
  setGroupingOption,
  closeDropdown,
}) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value as TGroupingOption; // Cast the value to TGroupingOption
    setGroupingOption(selectedOption); // Set the selected option directly
    closeDropdown && closeDropdown();
  };

  return (
    <div className="grouping-options">
      <label htmlFor="grouping-dropdown">Group By:</label>
      <select
        id="grouping-dropdown"
        value={groupingOption}
        onChange={handleOptionChange}
      >
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupingOptions;
