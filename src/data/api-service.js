import Axios from "axios";
import config from "./wc2022-config";
import {getIdToken} from "./firebase-service";

const getAxiosClient = async () => {
    const apiKey = await getIdToken();
    return Axios.create({
        baseURL: config.apiBaseUrl,
        headers: apiKey ? {'Authorization': `Bearer ${apiKey}`} : ''
    });
}

export const getParties = async () => {
    try {
        const axios = await getAxiosClient();
        const result = await axios.get(`/party`)

        return result.status === 200 ? result.data.data : [];
    } catch {
        return [];
    }
}

export const getPartyByCode = async (partyCode) => {
    try {
        const axios = await getAxiosClient();
        const result = await axios.get(`/party/${partyCode}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const joinParty = async (partyCode) => {
    try {
        const axios = await getAxiosClient();
        const result = await axios.post(`/party/${partyCode}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const leaveParty = async (userId, partyCode) => {
    try {
        const axios = await getAxiosClient();
        const result = await axios.delete(`/party/${partyCode}/${userId}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const createParty = async (partyName) => {
    try {
        const axios = await getAxiosClient();
        const result = await axios.post(`/party?partyName=${encodeURIComponent(partyName)}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const updateParty = async (partyCode, newPartyName) => {
    try {
        const axios = await getAxiosClient();
        const result = await axios.put(`/party/${partyCode}?name=${encodeURIComponent(newPartyName)}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const deleteParty = async (partyCode) => {
    try {
        const axios = await getAxiosClient();
        const url = `/party/${partyCode}`
        const result = await axios.delete(url);

        return result.status === 204;
    } catch {
        return null;
    }
}

export const distributeTeams = async (partyCode, rankingType, teamsPerUser) => {
    try {
        const axios = await getAxiosClient();
        const url = `/party/${partyCode}/draft?rankingType=${rankingType}&teamsPerUser=${teamsPerUser}`
        const result = await axios.put(url);

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}