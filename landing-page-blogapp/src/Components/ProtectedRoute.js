import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children , auth }) {

  if (!auth) {
    return <Navigate to="/"/>;
  }

  return children; // Render the protected component if authenticated
}
export default ProtectedRoute;