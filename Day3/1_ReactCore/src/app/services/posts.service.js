const url = "https://jsonplaceholder.typicode.com/posts";

const postAPIClient = {
    getPosts: function (successCB, errorCB) {
        $.getJSON(url).done((data) => {
            successCB(data);
        }).fail((err) => {
            console.log(err);
            errorCB("Connection Error...");
        });
    },

    getPostsUsingPromise: function () {
        var promise = new Promise((resolve, reject) => {
            return $.getJSON(url).done((data) => {
                resolve(data);
            }).fail((err) => {
                console.log(err);
                reject("Connection Error...");
            });
        });
        return promise;
    }
};

export default postAPIClient;