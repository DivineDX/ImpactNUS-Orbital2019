import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import './BulletinMenuBar.css';

export default class BulletinMenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: "Popular",
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.handleCategoryClick(name);
    }

    dropDownClick = (option) => {
        this.props.handleFilterClick(option);
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu size='massive' pointing secondary>
                    <Menu.Item
                        name="Popular"
                        active={activeItem === "Popular"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="Recent"
                        active={activeItem === "Recent"}
                        onClick={this.handleItemClick}
                        id='two'
                    />
                    <Menu.Item
                        name="Victories"
                        active={activeItem === "Victories"}
                        onClick={this.handleItemClick}
                        id='three'
                    />

                    <Dropdown item text='Filter' id ="Og">
                        <Dropdown.Menu>
                            <Dropdown.Item onClick = {() => this.dropDownClick('all')}>Show All</Dropdown.Item>
                            <Dropdown.Item onClick = {() => this.dropDownClick('petition')}>Petitions Only</Dropdown.Item>
                            <Dropdown.Item onClick = {() => this.dropDownClick('campaign')}>Campaigns Only</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown icon='filter' button className='icon' direction='left' id='NotOg'>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick = {() => this.dropDownClick('all')}>Show All</Dropdown.Item>
                            <Dropdown.Item onClick = {() => this.dropDownClick('petition')}>Petitions Only</Dropdown.Item> 
                            <Dropdown.Item onClick = {() => this.dropDownClick('campaign')}>Campaigns Only</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </Menu>
            </div>
        );
    }
}

