const storageService = {

    saveToken(token) {
        sessionStorage.setItem("token", token);
    },

    getToken() {
        return sessionStorage.getItem("token");
    },

    removeToken() {
        sessionStorage.removeItem("token");
    }

};

export default storageService;