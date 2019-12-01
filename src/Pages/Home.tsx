import React from 'react';
import { withRouter } from 'react-router';
import { SessionConsumer } from '../Context/SessionContext';

const Home: React.FC = () => {
    return (
        <SessionConsumer>
           {props => {
          return <div>{props.user.userName}</div>
        }}
        </SessionConsumer>
    )
}
export default withRouter(Home);