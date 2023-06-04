import React, { Component, ReactNode } from 'react';

import Fallback from '@components/Fallback/Fallback';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  isError: boolean;
  message: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { isError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    const { message } = error;
    return { isError: true, message };
  }

  render() {
    const { isError, message } = this.state;
    const { children } = this.props;

    if (isError) {
      return <Fallback message={message} />;
    }

    return children;
  }
}

export default ErrorBoundary;
