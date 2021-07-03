import React, { PureComponent } from "react";
import ReactDOM from 'react-dom';
import App from './App';

class AppCompat extends PureComponent {
    ref = React.createRef<HTMLDivElement>();

    componentDidMount() {
        ReactDOM.render(<App {...this.props} />, this.ref.current);
    }

    componentDidUpdate() {
        ReactDOM.render(<App {...this.props} />, this.ref.current);
    }

    render() {
        return <div ref={this.ref} />;
    }
}

export default AppCompat;