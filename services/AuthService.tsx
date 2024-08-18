// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Simula um backend simples
// const mockBackend = {
//   users: [{ username: 'test', password: 'password' }],
//   isValidUser: function (username: string, password: string) {
//     return this.users.some(user => user.username === username && user.password === password);
//   },
//   registerUser: function (username: string, password: string) {
//     if (this.users.some(user => user.username === username)) {
//       return false; // Usuário já existe
//     }
//     this.users.push({ username, password });
//     return true;
//   },
// };

// // Serviço de Autenticação
// export const AuthService = {
//   login: async (username: string, password: string) => {
//     const isValid = mockBackend.isValidUser(username, password);
//     if (isValid) {
//       await AsyncStorage.setItem('userToken', 'dummy-auth-token');
//       return true;
//     }
//     return false;
//   },

//   register: async (username: string, password: string) => {
//     const success = mockBackend.registerUser(username, password);
//     if (success) {
//       await AsyncStorage.setItem('userToken', 'dummy-auth-token');
//     }
//     return success;
//   },

//   logout: async () => {
//     await AsyncStorage.removeItem('userToken');
//   },

//   isLoggedIn: async () => {
//     const token = await AsyncStorage.getItem('userToken');
//     return !!token;
//   },
// };
