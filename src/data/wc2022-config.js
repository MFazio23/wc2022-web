const FirebaseEnv = {
    Staging: "wc2022",
    Prod: "wc2022-staging"
}

const ApiEnv = {
    Local: "http://localhost:8080/",
    Staging: "https://wc2022-api-staging.mfazio.dev/",
    Prod: "https://wc2022-api.mfazio.dev/"
}

const firebaseYear = 2022
const firebaseEnv = FirebaseEnv.Staging;
const apiEnv = ApiEnv.Local;

const WC2022Config = {
    firebaseYear,
    firebaseEnv,
    firebaseBaseUrl: `https://${firebaseEnv}.firebaseio.com/`,
    apiBaseUrl: apiEnv
}

export default WC2022Config;