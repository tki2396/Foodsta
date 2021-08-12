import * as SecureStore from 'expo-secure-store'

const localSave = async (key: any, value: any) => {
    let result = await SecureStore.setItemAsync(key, value);
    if (result) {
        //console.error("🔐 Here's your value 🔐 \n" + result);
      } else {
        console.error('No values stored under that key.');
      }
  };
  
const localGet = async (key: any) => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      //console.error("🔐 Here's your value 🔐 \n" + result);
    } else {
      console.error('No values stored under that key.');
    }
}

const localRevoke = async (key: any) => {
    let result = await SecureStore.deleteItemAsync(key);
    if (result) {
        console.error("Deleted that key!");
    } else {
        console.error("Can't find that key")
    }
}

export { localSave, localGet, localRevoke}