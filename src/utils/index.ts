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
