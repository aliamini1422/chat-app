import {Navigate} from "react-router-dom";

export default function ProtectedRoute({children}){

const token = true;
  if (!token) {
    return (
      <Navigate to={{ pathname: "/login" }} />
    );
  }

  return <>{children}</>;
}