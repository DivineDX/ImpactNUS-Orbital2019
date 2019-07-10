import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const petitionOptions = [
    { key: 'osa', text: 'Office of Student Affairs', value: 'Office of Student Affairs' },
    { key: 'nuspo', text: 'NUS Provost Office', value: 'NUS Provost Office' },
    { key: 'nussu', text: 'NUS Student Union', value: 'NUS Student Union' },

]

const campaignOptions = [
    { key: 'All NUS Students', text: 'German', value: 'German' },
]

class FormRecipients extends Component {
    state = { options }

    handleAddition = (e, { value }) => {
        this.setState(prevState => ({
            options: [{ text: value, value }, ...prevState.options],
        }))
    }

    handleChange = (e, { value }) => this.setState({ currentValues: value })

    render() {
        const { currentValues } = this.state

        return (
            <Dropdown
                options={this.state.options}
                placeholder='Choose Languages'
                search
                selection
                fluid
                multiple
                allowAdditions
                value={currentValues}
                onAddItem={this.handleAddition}
                onChange={this.handleChange}
            />
        )
    }
}

export default FormRecipients