import React, { FunctionComponent, useEffect, useState } from 'react';

const style = {
    padding: 12,
    backgroundColor: "aquamarine",
};

type ButtonProps = {
    count?: number;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(c => c + 1);
    }, [props]);

    return (
        <button style={style} onClick={() => console.log('clicked', props)}>Button {count}</button>
    );
};

export default Button;
