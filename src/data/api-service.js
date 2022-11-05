import Axios from "axios";
import config from "./wc2022-config";

export const updateApiKey = (apiKey) => {
    axios = getAxiosClient(apiKey);
}

const getAxiosClient = (apiKey) =>
    Axios.create({
        baseURL: config.apiBaseUrl,
        headers: apiKey ? {'Authorization': `Bearer ${apiKey}`} : ''
    });

let axios = getAxiosClient()

export const getParties = async (userId) => {
    try {
        const result = await axios.get(`/party`)

        return result.status === 200 ? result.data.data : [];
    } catch {
        return [];
    }
}