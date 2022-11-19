const year = 2022
const environment = "Prod";

const FirebaseEnv = {
    Staging: "wc2022-staging",
    Prod: "wc2022"
}

const ApiEnv = {
    Local: "http://localhost:8023/",
    Staging: "https://wc2022-api-staging.mfazio.dev/",
    Prod: "https://wc2022-api.mfazio.dev/"
}

const firebaseEnv = FirebaseEnv[environment];

const WC2022Config = {
    firebaseYear: year,
    firebaseEnv,
    firebaseBaseUrl: `https://${firebaseEnv}.firebaseio.com/`,
    apiBaseUrl: ApiEnv[environment],
    gaMeasurementId: "G-MNVY6QHEDD",
    isTest: environment !== "Prod"
}

export default WC2022Config;