import React, { Component } from 'react';
import FormAssignment from './1_FormAssignment';
import PTRoot from './2_PropTypes';
import ErrorHandler from './common/ErrorHandler';
import AjaxComponent from './3_AjaxComponent';
import AjaxParent from './4_PropForwarding';
import AjaxParentContext from './5_ContextAPI';

class RootComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <ErrorHandler>
                    {/* <FormAssignment /> */}
                    {/* <PTRoot /> */}
                    {/* <AjaxComponent/> */}
                    {/* <AjaxParent/> */}
                    <AjaxParentContext/>
                </ErrorHandler>
            </div>
        );
    }
}

export default RootComponent;