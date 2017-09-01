
export const apiData = {
  header: {
    titleMain: "Header Parse API",
    reqtype: "GET",
    encType: "application/x-www-form-urlencoded",
    primaryURL:  "https://aqueous-plains-86069.herokuapp.com/app/whoami",
    instr: "Sends back IP address and location of that IP. No params needed.",
    hideQuery: true,
    queryType: "text",
    skills: "e"
  },
  shortener: {
    titleMain: "URL Shortener API",
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://blooming-cove-78461.herokuapp.com/",
    instr: "Enter a valid url, get a permalink (e.g. https://blooming-cove-78461.herokuapp.com/1234)",
    queryDesc: "Enter a valid URL",
    queryType: "text"
  },
  image: {
    titleMain: "Image Search Abstraction Layer API",
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://heather-glockenspiel.glitch.me/img/",
    AltURL: "https://heather-glockenspiel.glitch.me/img/recent/",
    instr: "Enter one or more search terms, separated by spaces. Use /recent/ to path to see recent searches",
    queryDesc: "Enter a search term",
    queryType: "text"
  },
  timestamp: {
    titleMain: "Timestamp API",
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://peaceful-mesa-30915.herokuapp.com/",
    instr: "Either send current Unix time (eg: 1504055401) in seconds or the natural date (April 2, 2017) and receive both as response.",
    queryDesc: "Enter Unix Time or Natural Date",
    queryType: "text"
  },
  sizer: {
    titleMain: "File Sizer API",
    reqtype: "POST",
    encType: "multipart/form-data",
    primaryURL:  "https://uncovered-ocean.glitch.me/dreams",
    instr: "Upload a file of FormData object and get the size in bytes. Not stored in a db.",
    queryDesc: "Drop a file in here",
    queryType: "file"
  }
}
