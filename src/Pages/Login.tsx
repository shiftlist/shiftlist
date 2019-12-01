import {isEmpty} from 'lodash';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { ISessionContext, SessionConsumer } from '../Context/SessionContext';
import User from '../Types/User';
const Login: React.FC = () => {
    const [state, setState] = useState<ISessionContext>();
    const setUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        state!.updateUser(new User(event.currentTarget.value, !isEmpty(event.currentTarget.value), event.currentTarget.value));
    }

    const a = (event:React.ChangeEvent<HTMLInputElement>) => {
        alert(event);
    }

    
    return (
        <SessionConsumer>
            {
                context => (
                    <>
                    {setState(context)}
                    <div>
                        <input type="text" onChange={setUser} />
                    </div>
                    </>
                )
            }
        </SessionConsumer>
    )
}
export default withRouter(Login);