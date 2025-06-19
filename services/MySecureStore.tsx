import * as SecureStore from 'expo-secure-store'

const localSave = async (key: any, value: any) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error(error);
  }
};
  
const localGet = async (key: any) => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      console.log("🔐 Here's your value 🔐 \n" + result);
    } else {
      console.error('No values stored under that key.');
    }
}

const localRevoke = async (key: any) => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error(error);
    }
}

export { localSave, localGet, localRevoke}