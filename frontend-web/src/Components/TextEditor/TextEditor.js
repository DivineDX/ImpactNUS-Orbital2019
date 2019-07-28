import React, { Component } from "react";
import RichTextEditor from "react-rte";
import './TextEditor.css';

class TextEditor extends Component {
    //use this.state.value.toString("html") to get the html string value

    render() {
        const toolbarConfig = {
            display: [
                "INLINE_STYLE_BUTTONS",
                "BLOCK_TYPE_BUTTONS",
                "BLOCK_TYPE_DROPDOWN",
                "HISTORY_BUTTONS"
            ],
            INLINE_STYLE_BUTTONS: [
                { label: "Bold", style: "BOLD", className: "custom-css-class" },
                { label: "Italic", style: "ITALIC" },
                { label: "Underline", style: "UNDERLINE" }
            ],
            BLOCK_TYPE_DROPDOWN: [
                { label: "Normal", style: "unstyled" },
                { label: "Heading Large", style: "header-one" },
                { label: "Heading Medium", style: "header-two" },
                { label: "Heading Small", style: "header-three" }
            ],
            BLOCK_TYPE_BUTTONS: [
                { label: "UL", style: "unordered-list-item" },
                { label: "OL", style: "ordered-list-item" }
            ]
        };

        const { placeholder, name, onChange, value } = this.props;

        return (
            <div className = 'textEditorFix'>
                <RichTextEditor 
                    id="descrip"
                    value={value}
                    onChange={onChange}
                    toolbarConfig={toolbarConfig}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        );
    }
}

export default TextEditor;
