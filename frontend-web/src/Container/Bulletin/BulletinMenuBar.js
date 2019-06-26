import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default class BulletinMenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: "Popular",
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
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
                    />
                    <Menu.Item
                        name="Victories"
                        active={activeItem === "Victories"}
                        onClick={this.handleItemClick}
                    />
                    <Dropdown item text='Filter'>
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

