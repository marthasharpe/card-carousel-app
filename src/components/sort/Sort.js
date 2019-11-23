import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import {
    sortHeading,
    sortSubheading,
    sortLowPrice,
    sortHighPrice
} from './../../actions/actionCreators';

const Sort = (props) => {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            Sort
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem
                onClick={() => props.sortHeading(props.data.sort(( a, b ) => a.Heading > b.Heading ? 1 : -1))}
                >
                Heading
            </DropdownItem>
            <DropdownItem
                onClick={() => props.sortSubheading(props.data.sort(( a, b ) => a.Subheading > b.Subheading ? 1 : -1))}
                >
                Subheading
            </DropdownItem>
            <DropdownItem
                onClick={() => props.sortLowPrice(props.data.sort(( a, b ) => a.Price > b.Price ? 1 : -1))}
                >
                Price: low - high
            </DropdownItem>
            <DropdownItem
                onClick={() => props.sortHighPrice(props.data.sort(( a, b ) => a.Price < b.Price ? 1 : -1))}
                >
                Price: high - low
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  
const mapStateToProps = ({ data }) => ({
    data
})

const mapDispatchToProps = {
    sortHeading,
    sortSubheading,
    sortLowPrice,
    sortHighPrice,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);