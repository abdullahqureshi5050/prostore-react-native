import React from 'react'

const Context = React.createContext(0);

const Provider = Context.Provider;
const Consumer = Context.Consumer;

export {Provider, Consumer}