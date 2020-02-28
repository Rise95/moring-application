import React from 'react'
import { Provider } from 'react-redux'; 
import { store, persistor } from '#/store'
import { PersistGate } from 'redux-persist/integration/react';

export default ({
    children
}) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}    
            </PersistGate>
        </Provider>
    )
}