import { authenticator } from "./auth.service";

const url = "http://localhost:8000/api/products";

export const productsApiClient = {
    getAllProducts: function () {
        let tk = authenticator.getToken();

        var promise = new Promise((resolve, reject) => {
            let fData = {
                method: "GET",
                headers: {
                    "x-access-token": tk
                }
            };

            fetch(url, fData).then((res) => {
                res.json().then((data) => {
                    if (Array.isArray(data))
                        resolve(data);
                    else
                        reject(data.message);
                }, (err) => {
                    reject("JSON parse error...");
                })
            }, (err) => {
                reject("Connection error...");
            });
        });
        return promise;
    }
};