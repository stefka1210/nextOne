import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 0.8rem;
    font-weight: 700;
`;

const Time = styled.time`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Label = styled.div`
    text-align: left;
    font-size: 0.6rem;
    margin-right: 0.6em;
`;
const Value = styled.div`
    text-align: right;
`;

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        const {time} = this.state;

        const options = {
            // month: '2-digit',
            // day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const easternOptions = options;

        const local = new Intl.DateTimeFormat('de-DE', options).format(time);
        easternOptions.timeZone = 'America/New_York';
        const eastern = new Intl.DateTimeFormat('de-DE', easternOptions).format(time);

        return (
            <Container>
                <Time>
                    <Label>LOC</Label>
                    <Value>{local}</Value>
                </Time>
                <Time>
                    <Label>EST</Label>
                    <Value>{eastern}</Value>
                </Time>
            </Container>
        );
    }
}
export default Clock;
