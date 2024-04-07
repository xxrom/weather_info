"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: {},
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: { digest: "test" } };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(">>>>>>>>>> Uncaught error:", error, errorInfo);
    this.setState({ error: errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      if (this.props?.fallback) {
        return (
          <body>
            <div>{this.props.fallback}</div>
            <div>{this.state.error.componentStack}</div>
          </body>
        );
      }

      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
