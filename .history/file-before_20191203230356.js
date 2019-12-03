import React, { Component } from 'react';

function HighOrderFunction(WrappedComponent) {
    return class WrapperComponent extends Component {
        
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}