import React, { Component } from 'react';
import HelloWithState from './1_HelloWithState';
import HelloWithProps from './2_HelloWithProps';
import Button from './3_ComponentWithBehavior';
import StateChangeComponent from './4_StateChange';
import EventComponent from './5_SyntheticEventObject';
import CounterRoot from './6_Counter';
import AssignmentRoot from './7_Assignment';
import ControlledVsUncontrolled from './8_ControlledVsUncontrolled';
import CalculatorAssignment from './9_CalculatorAssignment';
import ListRoot from './10_ListComponent';
import FormAssignment from './11_FormAssignment';

class RootComponent extends Component {
    render() {
        return (
            <div className="container">
                {/* <HelloWithState/> */}
                {/* <HelloWithProps name={'Manish'} company={'Synechron'} /> */}
                {/* <Button/> */}
                {/* <StateChangeComponent/> */}
                {/* <EventComponent/> */}
                {/* <CounterRoot/> */}
                {/* <AssignmentRoot/> */}
                {/* <ControlledVsUncontrolled/> */}
                {/* <CalculatorAssignment/> */}
                {/* <ListRoot/> */}
                <FormAssignment />
            </div>
        );
    }
}

export default RootComponent;