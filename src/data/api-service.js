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

export const getParties = async () => {
    try {
        const result = await axios.get(`/party`)

        return result.status === 200 ? result.data.data : [];
    } catch {
        return [];
    }
}

export const getPartyByCode = async (partyCode) => {
    try {
        const result = await axios.get(`/party/${partyCode}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const joinParty = async (partyCode) => {
    try {
        const result = await axios.post(`/party/${partyCode}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const leaveParty = async (userId, partyCode) => {
    try {
        const result = await axios.delete(`/party/${partyCode}/${userId}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const createParty = async (partyName) => {
    try {
        const result = await axios.post(`/party?partyName=${encodeURIComponent(partyName)}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const updateParty = async (partyCode, newPartyName) => {
    try {
        const result = await axios.put(`/party/${partyCode}?name=${encodeURIComponent(newPartyName)}`)

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}

export const deleteParty = async (partyCode) => {
    try {
        const url = `/party/${partyCode}`
        const result = await axios.delete(url);

        return result.status === 204;
    } catch {
        return null;
    }
}

export const distributeTeams = async (partyCode, rankingType, teamsPerUser) => {
    try {
        const url = `/party/${partyCode}/draft?rankingType=${rankingType}&teamsPerUser=${teamsPerUser}`
        const result = await axios.put(url);

        return result.status === 200 ? result.data.data : null;
    } catch {
        return null;
    }
}