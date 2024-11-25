const url = 'http://localhost:8000/api/authenticate';

export const authenticator = {
    isAuthenticated: false,

    authenticate: function (uname, pwd, loginSuccess) {
        var data = `username=${uname}&password=${pwd}`;

        let fData = {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: data
        };

        fetch(url, fData).then((res) => {
            res.json().then((data) => {
                window.sessionStorage.setItem('tk', data.token);
                this.isAuthenticated = data.success;
                loginSuccess();
            })
        });
    },

    getToken: function () {
        return window.sessionStorage.getItem('tk');
    },

    logout: function () {
        window.sessionStorage.clear();
        this.isAuthenticated = false;
    }
}