import React from 'react';
import User from '../Types/User';

export const NotLoggedInUser: User = new User("", false, "");

export interface ISessionContext {
    user: User;
    updateUser: (user: User) => void;
}

const sessionContext = React.createContext<ISessionContext>({user: NotLoggedInUser, updateUser:(user:User)=>{alert("")}});
export const SessionConsumer = sessionContext.Consumer;
export const SessionProvider = sessionContext.Provider;