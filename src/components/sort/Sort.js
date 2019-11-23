import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const Sort = (props) => {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    
    const sortHeading = () => {
        let headingSort = props.data.sort(( a, b ) => a.Heading > b.Heading ? 1 : -1 );
        props.setData(headingSort);
        console.log(headingSort)
    }

    //sort heading is data.heading.values put into an array and sorted alphanumerically returning the whole object
    const sortSubheading = () => console.log("subheading");
    const sortHighPrice = () => console.log("high price");
    const sortLowPrice = () => console.log("low price");


    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            Sort
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={sortHeading}>Heading</DropdownItem>
            <DropdownItem onClick={sortSubheading}>Subheading</DropdownItem>
            <DropdownItem onClick={sortLowPrice}>Price: low - high</DropdownItem>
            <DropdownItem onClick={sortHighPrice}>Price: high - low</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  
  export default Sort;