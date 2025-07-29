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
        }
    }, [user]);

    const isLogged = () => {
        const user = localStorage.getItem('user')
        if (!user) {
            return false;
        }
        return true
    }

    const updateCart = (newCart) => {
        setUser((prevUser) => ({
          ...prevUser,
          shoppingCart: newCart,
        }));
      };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLogged
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;