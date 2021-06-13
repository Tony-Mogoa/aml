class Auth {
    constructor() {
        this.authenticated = false;
        this.token = null;
    }

    login(cb, token) {
        this.authenticated = true;
        this.token = token;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        this.token = null;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getToken() {
        return this.token;
    }
}

export default new Auth();
