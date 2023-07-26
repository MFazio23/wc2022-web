const year = 2023
const environment = "Prod";

const FirebaseEnv = {
    Local: "wwc2023-staging",
    Staging: "wwc2023-staging",
    Prod: "wwc2023"
}

const ApiEnv = {
    Local: "http://localhost:8023/",
    Staging: "https://wwc2023-api-staging.mfazio.dev/",
    Prod: "https://wwc2023-api.mfazio.dev/"
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