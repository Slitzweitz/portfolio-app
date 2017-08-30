
export const apiData = {
  header: {
    reqtype: "GET",
    encType: "application/x-www-form-urlencoded",
    primaryURL:  "https://aqueous-plains-86069.herokuapp.com/app/whoami",
    instr: "Sends back IP address and location of that IP. No params needed.",
    hideQuery: true
  },
  shortener: {
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://blooming-cove-78461.herokuapp.com/",
    instr: "Enter a valid url, get a permalink (e.g. https://blooming-cove-78461.herokuapp.com/1234)",
    queryDesc: "Enter a valid URL"
  },
  image: {
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://heather-glockenspiel.glitch.me/img/",
    AltURL: "https://heather-glockenspiel.glitch.me/img/recent/",
    instr: "Enter one or more search terms, separated by spaces. Use /recent/ to path to see recent searches",
    queryDesc: "Enter a search term"
  },
  timestamp: {
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://peaceful-mesa-30915.herokuapp.com/",
    instr: "Either send current Unix time (eg: 1504055401) in seconds as param and get the natrual date, or vice versa",
    queryDesc: "Enter Unix Time or Natural Date"
  },
  sizer: {
    reqtype: "POST",
    encType: "multipart/form-data",
    primaryURL:  "https://uncovered-ocean.glitch.me/dreams",
    instr: "Upload a file of FormData object and get the size in bytes. Not stored in a db.",
  }
}
