import React, { useState } from "react";
import GroupingOptions from "../GroupOptions";
import SortingOptions from "../SortingOptions";
import { HeaderProps } from "../../types";
import "./styles.css";

const Header = ({
  groupingOption,
  setGroupingOption,
  sortingOption,
  setSortingOption,
}: HeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="header">
      <div className="custom-dropdown">
        <button
          className="dropdown-toggle"
          onClick={toggleDropdown}
          aria-expanded={dropdownOpen ? "true" : "false"}
        >
          <i className="bi bi-sliders"></i> Display
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <GroupingOptions
              groupingOption={groupingOption}
              setGroupingOption={setGroupingOption}
              closeDropdown={closeDropdown}
            />
            <SortingOptions
              sortingOption={sortingOption}
              setSortingOption={setSortingOption}
              closeDropdown={closeDropdown}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
