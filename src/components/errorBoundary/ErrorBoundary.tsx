import React, { Component, PropsWithChildren } from 'react';

export default class ErrorBoundary extends Component<PropsWithChildren<{}>, { hasError: boolean }> {
    constructor(props: PropsWithChildren<{}>) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error: Error) {
        console.debug('error caught in ErrorBoundary', error);
        this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return null;
      }
  
      return this.props.children; 
    }
  }
  