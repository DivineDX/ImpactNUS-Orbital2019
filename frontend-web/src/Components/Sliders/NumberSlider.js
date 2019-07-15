import React, { Component } from "react";
import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";

import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

const Handle = Slider.Handle;

const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class NumberSlider extends Component {
    render() {
        const {min, max, value, name, onChange} = this.props;
        return (
            <div style={{margin: 30}}>
                <Slider
                    min={min}
                    max={max}
                    defaultValue={100}
                    handle={handle}
                    value={value}
                    onChange={onChange}
                    name = {name}
                    marks={{ 300: 300, 500: 500, 1000: 1000, 1500: 1500, 2000: 2000,}}
                />
            </div>
        );
    }
}

export default NumberSlider;