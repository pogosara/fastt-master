import React from 'react';
import { connect } from 'react-redux';

class Key extends React.Component {
    isPressed = (code) => {
        return this.props.pressed.indexOf(code) !== -1;
    }

    render() {
        return (
            <div className={`key ${this.props.size} ${this.props.color} pressed-${this.isPressed(this.props.code)}`}>
                {this.props.shift ? this.props.upperGlyph : this.props.glyph}
            </div >
        );
    }
}

const mapStateToProps = state => ({
    pressed: state.pressed,
    shift: state.shift
});

export default connect(mapStateToProps)(Key);

export const Kiy = () => {

    const izPressed =(code) =>{
        return props.pressed.indexOf(code) !==-1;
    }

    return(
        <div className={`key ${props.size} ${props.color} pressed-${izPressed(props.code)}`}>
            {props.shift ? props.upperGlyph : props.glyph}

        </div>
    )
}
