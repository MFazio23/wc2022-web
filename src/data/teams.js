export const Teams = {
    "ARG": {
        "teamId": "ARG",
        "teamName": "Argentina",
        "flagCode": "ar",
        "group": "G"
    },
    "AUS": {
        "teamId": "AUS",
        "teamName": "Australia",
        "flagCode": "au",
        "group": "B"
    },
    "BRA": {
        "teamId": "BRA",
        "teamName": "Brazil",
        "flagCode": "br",
        "group": "F"
    },
    "CAN": {
        "teamId": "CAN",
        "teamName": "Canada",
        "flagCode": "ca",
        "group": "B"
    },
    "CHN": {
        "teamId": "CHN",
        "teamName": "China",
        "flagCode": "cn",
        "group": "D"
    },
    "COL": {
        "teamId": "COL",
        "teamName": "Colombia",
        "flagCode": "co",
        "group": "H"
    },
    "CRC": {
        "teamId": "CRC",
        "teamName": "Costa Rica",
        "flagCode": "cr",
        "group": "C"
    },
    "DEN": {
        "teamId": "DEN",
        "teamName": "Denmark",
        "flagCode": "dk",
        "group": "D"
    },
    "ENG": {
        "teamId": "ENG",
        "teamName": "England",
        "flagCode": "gb-eng",
        "group": "D"
    },
    "ESP": {
        "teamId": "ESP",
        "teamName": "Spain",
        "flagCode": "es",
        "group": "C"
    },
    "FRA": {
        "teamId": "FRA",
        "teamName": "France",
        "flagCode": "fr",
        "group": "F"
    },
    "GER": {
        "teamId": "GER",
        "teamName": "Germany",
        "flagCode": "de",
        "group": "H"
    },
    "HAI": {
        "teamId": "HAI",
        "teamName": "Haiti",
        "flagCode": "ht",
        "group": "D"
    },
    "IRL": {
        "teamId": "IRL",
        "teamName": "Ireland",
        "flagCode": "ie",
        "group": "B"
    },
    "ITA": {
        "teamId": "ITA",
        "teamName": "Italy",
        "flagCode": "it",
        "group": "G"
    },
    "JAM": {
        "teamId": "JAM",
        "teamName": "Jamaica",
        "flagCode": "jm",
        "group": "F"
    },
    "JPN": {
        "teamId": "JPN",
        "teamName": "Japan",
        "flagCode": "jp",
        "group": "C"
    },
    "KOR": {
        "teamId": "KOR",
        "teamName": "Korea",
        "flagCode": "kr",
        "group": "H"
    },
    "MAR": {
        "teamId": "MAR",
        "teamName": "Morocco",
        "flagCode": "ma",
        "group": "H"
    },
    "NED": {
        "teamId": "NED",
        "teamName": "Netherlands",
        "flagCode": "nl",
        "group": "E"
    },
    "NGA": {
        "teamId": "NGA",
        "teamName": "Nigeria",
        "flagCode": "ng",
        "group": "B"
    },
    "NOR": {
        "teamId": "NOR",
        "teamName": "Norway",
        "flagCode": "no",
        "group": "A"
    },
    "NZL": {
        "teamId": "NZL",
        "teamName": "New Zealand",
        "flagCode": "nz",
        "group": "A"
    },
    "PAN": {
        "teamId": "PAN",
        "teamName": "Panama",
        "flagCode": "pa",
        "group": "F"
    },
    "PHI": {
        "teamId": "PHI",
        "teamName": "Philippines",
        "flagCode": "ph",
        "group": "A"
    },
    "POR": {
        "teamId": "POR",
        "teamName": "Portugal",
        "flagCode": "pt",
        "group": "E"
    },
    "RSA": {
        "teamId": "RSA",
        "teamName": "South Africa",
        "flagCode": "za",
        "group": "G"
    },
    "SUI": {
        "teamId": "SUI",
        "teamName": "Switzerland",
        "flagCode": "ch",
        "group": "A"
    },
    "SWE": {
        "teamId": "SWE",
        "teamName": "Sweden",
        "flagCode": "se",
        "group": "G"
    },
    "USA": {
        "teamId": "USA",
        "teamName": "USA",
        "flagCode": "us",
        "group": "E"
    },
    "VIE": {
        "teamId": "VIE",
        "teamName": "Vietnam",
        "flagCode": "vn",
        "group": "E"
    },
    "ZAM": {
        "teamId": "ZAM",
        "teamName": "Zambia",
        "flagCode": "zm",
        "group": "C"
    }
}

export const TeamList = Object.entries(Teams).map(([teamId, team]) => team)

export const getFlag = (team, isEliminated, flipPadding) => team ? (
    <span key={team.teamId} title={team.teamName}
          className={`${isEliminated ? 'eliminated ' : ''}${flipPadding ? 'user-flag-flipped' : 'user-flag'} fi fi-${team.flagCode}`}/>
) : '';