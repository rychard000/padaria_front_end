import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
  const [canBeAccess, setCanBeAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateTokens = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (response.status === 200) {
          setCanBeAccess(true);
        } else {
          setCanBeAccess(false);
        }
      } catch (error) {
        console.log(error);
        setCanBeAccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    validateTokens();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a spinner or some other loading indicator
  }

  return canBeAccess ? children : <Navigate to="/login" />;
}

export default PrivateRoute;