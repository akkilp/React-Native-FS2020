import { useContext } from 'react';


import AuthStorageContext from '../contexts/AuthStorageContext';

const useLogOut = () => {
  const authStorage = useContext(AuthStorageContext);

    const logOut = async() => {
        try{
            await authStorage.removeAccessToken()
        } catch (e) {
            console.log('Authstorage does not exist')
        }
        return true
    }

    return [logOut];
};

export default useLogOut;