
export const token = {
  getToken() {
    return localStorage.getItem("token"); // Assuming the token is stored in localStorage
  },
  isAuthenticated() {
    return !!this.getToken();
  },
  login(token: string) {
    localStorage.setItem("token", token); // Store token after login
  },
  logout() {
    localStorage.removeItem("token"); // Clear token on logout
  },
};






export const testSavedAcc =  {
  getTestToken() {
    const token = localStorage.getItem("userAuthCode");
    return token ? JSON.parse(token) : null;
  },
   savedTestToken(token: string){
     localStorage.setItem("userAuthCode", JSON.stringify(token))
   }
}


// Business TYPES
