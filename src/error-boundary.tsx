import { Component, ReactNode, useState } from 'react';

export type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch() {
    this.setState((prev) => ({
      ...prev,
      error: true,
    }));
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div className='h-screen w-screen bg-red-500 flex items-center justify-center'>
          <p className='text-white text-center'>Deu ruim aqui pae!</p>
        </div>
      );
    }
    return this.props.children;
  }
}
