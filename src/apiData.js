
export const apiData = {
  header: {
    titleMain: "Header Parse API",
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://aqueous-plains-86069.herokuapp.com/app/whoami",
    instr: "Sends back IP address and location of that IP. No params needed, just click Submit.",
    hideQuery: true,
    queryType: "text",
    skills: "Using Nodejs with Express, I wrote a route to handle incoming HTTP requests and parse the headers. Along the way I learned a ton about the different parts of an HTTP request and response, and how to work with JavaScript on the server. I also used the Heroku toolbox to deploy my app from the command line."
  },
  shortener: {
    titleMain: "URL Shortener API",
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://blooming-cove-78461.herokuapp.com/",
    instr: "Enter a valid url, get a permalink (e.g. https://blooming-cove-78461.herokuapp.com/1234)",
    queryDesc: "Enter a valid URL",
    queryType: "text",
    skills: "One of my favorite parts of writing this API was integrating a database. It also opened my eyes to how fast a database starts to fill up when an app is connected, and the reasons behind designing an efficent schema (i.e., Mongoose). I wrote multiple routes for this API to perform unique tasks on the same set of data. Implementation of URL validation also sharpened my Regex skills."
  },
  image: {
    titleMain: "Image Search Abstraction Layer API",
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://heather-glockenspiel.glitch.me/img/",
    AltURL: "https://heather-glockenspiel.glitch.me/img/recent/",
    instr: "Enter one or more search terms, separated by spaces. Use /recent/ to see recent searches",
    queryDesc: "Enter a search term",
    queryType: "text",
    skills: "This project taught me how to consume an outside API for use in my own Node and Express projects. The ability to have the access to search results is becoming an integral part of daily life online and in applications, and I created my own instance of Google's Custom Search Engine, and am using Google Cloud Platform to run it."
  },
  timestamp: {
    titleMain: "Timestamp API",
    reqtype: "GET",
    encType: "application/json",
    primaryURL:  "https://peaceful-mesa-30915.herokuapp.com/",
    instr: "Either send current Unix time (eg: 1504055401) in seconds or the natural date (April 2, 2017) and receive both as response.",
    queryDesc: "Enter Unix Time or Natural Date",
    queryType: "text",
    skills: "Wrote Express routes to handle both Unix time in seconds and a natural date. Interesting working with spaces in parameters/queries"
  },
  sizer: {
    titleMain: "File Sizer API",
    reqtype: "POST",
    encType: "multipart/form-data",
    primaryURL:  "https://uncovered-ocean.glitch.me/dreams",
    instr: "Upload a file of FormData object and get the size in bytes.",
    queryDesc: "Drop a file in here",
    queryType: "file",
    skills: "As one of the more complicated projects, writing this API taught me "
  }
}
