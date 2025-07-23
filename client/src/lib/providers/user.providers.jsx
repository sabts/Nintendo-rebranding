import { createContext, useContext, useEffect, useState, } from 'react';

export const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext)
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Guardar usuario en localStorage cuando se actualiza
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

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