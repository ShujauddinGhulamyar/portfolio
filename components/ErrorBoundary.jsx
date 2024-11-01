"use client";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erreur capturée par la limite d'erreur :", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Quelque chose s'est mal passé.</h1>; // UI de secours
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
