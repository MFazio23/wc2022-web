const FirebaseEnv = {
    Staging: "wc2022-staging",
    Prod: "wc2022"
}

const ApiEnv = {
    Local: "http://localhost:8023/",
    Staging: "https://wc2022-api-staging.mfazio.dev/",
    Prod: "https://wc2022-api.mfazio.dev/"
}

const firebaseYear = 2022
const firebaseEnv = FirebaseEnv.Prod;
const apiEnv = ApiEnv.Prod;

const WC2022Config = {
    firebaseYear,
    firebaseEnv,
    firebaseBaseUrl: `https://${firebaseEnv}.firebaseio.com/`,
    apiBaseUrl: apiEnv
}

export default WC2022Config;