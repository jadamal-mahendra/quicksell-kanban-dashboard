import React from "react";
import { SortingOptionsProps, TSortingOption } from "../../types";
import "./styles.css";

const SortingOptions: React.FC<SortingOptionsProps> = ({
  sortingOption,
  setSortingOption,
  closeDropdown,
}) => {
  return (
    <div className="sorting-options">
      <label htmlFor="sorting-dropdown">Sort By:</label>
      <select
        id="sorting-dropdown"
        value={sortingOption}
        onChange={(e) => {
          setSortingOption(e.target.value as TSortingOption);
          closeDropdown && closeDropdown();
        }}
      >
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortingOptions;
