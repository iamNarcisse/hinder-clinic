import React, { Component } from "react";
import Calendar from 'react-calendar-material';
import { Route, Redirect } from 'react-router-dom'

class Calender extends Component {

    render() {
        return (
            <div>
                <Calendar
                    accentColor={'#9C27B0'}
                    orientation={'flex-col'}
                    showHeader={true}
                    onDatePicked={(d) => {
                        console.log('onDatePicked', d);

                        // eslint-disable-next-line react/prop-types
                        this.props.history.push('/admin/day')
                    }}/>
            </div>
        )
    }
}

export default Calender;
