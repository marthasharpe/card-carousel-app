import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const Sort = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            Sort
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>Heading</DropdownItem>
            <DropdownItem>Subheading</DropdownItem>
            <DropdownItem>Price: low - high</DropdownItem>
            <DropdownItem>Price: high - low</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  
  export default Sort;