import React, { FunctionComponent, useEffect } from 'react';
import Button from './button/Button';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

type AppProps = {
    count?: number;
}

const App: FunctionComponent<AppProps> = (props) => {
    // Do not remove this hook. This should force react hook error if there
    // are two versions of react, which can be catched by host.
    // Host will then enter compat mode and include AppCompat
    useEffect(() => {}, []);

    return (
        <ErrorBoundary>
            <h1>Module Federation Example 2</h1>
            <Button count={props.count}/>
        </ErrorBoundary>
    );
};

export default App;
