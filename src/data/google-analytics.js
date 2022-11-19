import {useEffect, useState} from "react";
import ReactGA from "react-ga4";
import {useLocation} from "react-router-dom";
import WC2022Config from "./wc2022-config";

const GA = {
    usePageTracking: () => {
        const location = useLocation();
        const [isInitialized, setIsInitialized] = useState(false);

        useEffect(() => {
            ReactGA.initialize(WC2022Config.gaMeasurementId, {debug: WC2022Config.isTest})
            setIsInitialized(true);
        }, [])

        useEffect(() => {
            if (isInitialized) {
                ReactGA.send({hitType: "pageview", page: location.pathname})
            }
        }, [isInitialized, location])
    },
    trackSearchParty: (partyCode, isFound) => {
        ReactGA.event({
            category: "party",
            action: "search",
            label: `${partyCode}-${isFound}`,
        })
    },
    trackJoinParty: (partyCode, isSuccessful) => {
        ReactGA.event({
            category: "party",
            action: "join",
            label: `${partyCode}-${isSuccessful}`,
        })
    },
    trackCreateParty: (partyName, isSuccessful) => {
        ReactGA.event({
            category: "party",
            action: "create",
            label: `${partyName}-${isSuccessful}`,
        })
    },
    trackUpdateParty: (partyCode, partyName, isSuccessful) => {
        ReactGA.event({
            category: "party",
            action: "create",
            label: `${partyCode}->${partyName}-${isSuccessful}`,
        })
    },
    trackDeleteParty: (partyCode, isSuccessful) => {
        ReactGA.event({
            category: "party",
            action: "delete",
            label: `${partyCode}-${isSuccessful}`,
        })
    },
    trackLeaveParty: (partyCode, isSuccessful) => {
        ReactGA.event({
            category: "party",
            action: "leave",
            label: `${partyCode}-${isSuccessful}`,
        })
    },
    trackDistributeTeams: (rankingType, teamsPerUser, isSuccessful) => {
        ReactGA.event({
            category: "party",
            action: isSuccessful ? "distribute" : "distribute-error",
            label: rankingType,
            value: teamsPerUser,
        })
    },
    trackPartyRowClicked: (partyCode, playerId) => {
        ReactGA.event({
            category: "party",
            action: "party-row-clicked",
            label: `${partyCode}-${playerId}`,
        })
    },
    trackSignOut: () => {
        ReactGA.event({
            category: "user",
            action: "sign-out",
        })
    },
    trackSnackbarManualClose: () => {
        ReactGA.event({
            category: "snackbar",
            action: "close",
        })
    },
    trackSnackbarCopyCode: (partyCode) => {
        ReactGA.event({
            category: "snackbar",
            action: "copy-code",
            label: partyCode,
        })
    },
    trackChangeColorMode: (mode) => {
        ReactGA.event({
            category: "ui",
            action: "color-mode",
            label: mode,
        })
    },
}

export default GA;