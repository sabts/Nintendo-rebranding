import { createContext, useContext, useEffect, useState, } from 'react';
import { login } from '../utils/user-api';

export const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}

const UserProvider = ({ children }) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const user = async () => {
            try {
                const userData = await login();
                setUser(userData);
            } catch (error) {
                setUser(null);
            }
        };

        user();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;