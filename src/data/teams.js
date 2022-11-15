export const Teams = {
    "ARG": {
        "teamId": "ARG",
        "teamName": "Argentina",
        "flagCode": "ar",
        "group": "C"
    },
    "AUS": {
        "teamId": "AUS",
        "teamName": "Australia",
        "flagCode": "au",
        "group": "D"
    },
    "BEL": {
        "teamId": "BEL",
        "teamName": "Belgium",
        "flagCode": "be",
        "group": "F"
    },
    "BRA": {
        "teamId": "BRA",
        "teamName": "Brazil",
        "flagCode": "br",
        "group": "G"
    },
    "CMR": {
        "teamId": "CMR",
        "teamName": "Cameroon",
        "flagCode": "cm",
        "group": "G"
    },
    "CAN": {
        "teamId": "CAN",
        "teamName": "Canada",
        "flagCode": "ca",
        "group": "F"
    },
    "CRC": {
        "teamId": "CRC",
        "teamName": "Costa Rica",
        "flagCode": "cr",
        "group": "E"
    },
    "CRO": {
        "teamId": "CRO",
        "teamName": "Croatia",
        "flagCode": "hr",
        "group": "F"
    },
    "DEN": {
        "teamId": "DEN",
        "teamName": "Denmark",
        "flagCode": "dk",
        "group": "D"
    },
    "ECU": {
        "teamId": "ECU",
        "teamName": "Ecuador",
        "flagCode": "ec",
        "group": "A"
    },
    "ENG": {
        "teamId": "ENG",
        "teamName": "England",
        "flagCode": "gb-eng",
        "group": "B"
    },
    "FRA": {
        "teamId": "FRA",
        "teamName": "France",
        "flagCode": "fr",
        "group": "D"
    },
    "GER": {
        "teamId": "GER",
        "teamName": "Germany",
        "flagCode": "de",
        "group": "E"
    },
    "GHA": {
        "teamId": "GHA",
        "teamName": "Ghana",
        "flagCode": "gh",
        "group": "H"
    },
    "IRN": {
        "teamId": "IRN",
        "teamName": "IR Iran",
        "flagCode": "ir",
        "group": "B"
    },
    "JPN": {
        "teamId": "JPN",
        "teamName": "Japan",
        "flagCode": "jp",
        "group": "E"
    },
    "KOR": {
        "teamId": "KOR",
        "teamName": "Korea Republic",
        "flagCode": "kr",
        "group": "H"
    },
    "MEX": {
        "teamId": "MEX",
        "teamName": "Mexico",
        "flagCode": "mx",
        "group": "C"
    },
    "MAR": {
        "teamId": "MAR",
        "teamName": "Morocco",
        "flagCode": "ma",
        "group": "F"
    },
    "NED": {
        "teamId": "NED",
        "teamName": "Netherlands",
        "flagCode": "nl",
        "group": "A"
    },
    "POL": {
        "teamId": "POL",
        "teamName": "Poland",
        "flagCode": "pl",
        "group": "C"
    },
    "POR": {
        "teamId": "POR",
        "teamName": "Portugal",
        "flagCode": "pt",
        "group": "H"
    },
    "QAT": {
        "teamId": "QAT",
        "teamName": "Qatar",
        "flagCode": "qa",
        "group": "A"
    },
    "KSA": {
        "teamId": "KSA",
        "teamName": "Saudi Arabia",
        "flagCode": "sa",
        "group": "C"
    },
    "SEN": {
        "teamId": "SEN",
        "teamName": "Senegal",
        "flagCode": "sn",
        "group": "A"
    },
    "SRB": {
        "teamId": "SRB",
        "teamName": "Serbia",
        "flagCode": "rs",
        "group": "G"
    },
    "ESP": {
        "teamId": "ESP",
        "teamName": "Spain",
        "flagCode": "es",
        "group": "E"
    },
    "SUI": {
        "teamId": "SUI",
        "teamName": "Switzerland",
        "flagCode": "ch",
        "group": "G"
    },
    "TUN": {
        "teamId": "TUN",
        "teamName": "Tunisia",
        "flagCode": "tn",
        "group": "D"
    },
    "URU": {
        "teamId": "URU",
        "teamName": "Uruguay",
        "flagCode": "uy",
        "group": "H"
    },
    "USA": {
        "teamId": "USA",
        "teamName": "USA",
        "flagCode": "us",
        "group": "B"
    },
    "WAL": {
        "teamId": "WAL",
        "teamName": "Wales",
        "flagCode": "gb-wls",
        "group": "B"
    }
}

export const TeamList = Object.entries(Teams).map(([teamId, team]) => team)

export const getFlag = (team, isEliminated, ignorePadding) => team ? (
    <span key={team.teamId} title={team.teamName}
          className={`${isEliminated ? 'eliminated ' : ''}${ignorePadding ? '' : 'user-flag'} fi fi-${team.flagCode}`}/>
) : '';