let seed = [
  "Parenting",
  "T-SQL",
  "UiPath",
  "Zynq",
  "FPGA",
  "ManyChat",
  "A/B",
  "Testing",
  "Parse",
  "Badminton",
  "WebVR",
  "Fantasy",
  "Baseball",
  "MAMP",
  "Sailing",
  "XenServer",
  "QuickFile",
  "Ukulele",
  "JSF",
  "Talend",
  "Yammer",
  "ACCA",
  "NClex",
  "Xero",
  "GIMP",
  "JSP",
  "Hackathon",
  "Zabbix",
  "JCL",
  "Uber",
  "Xendesktop",
  "XMind",
  "OmniFocus",
  "Cameras",
  "Keras",
  "Zend",
  "Framework",
  "Salad",
  "Making",
  "C",
  "Hangover",
  "Sanskrit",
  "Language",
  "Facial",
  "Massage",
  "E-Commerce",
  "Pastel",
  "Calculus",
  "Verbal",
  "Aikido",
  "Fibonacci",
  "Trading",
  "R",
  "Abs",
  "Reactive.js",
  "XAML",
  "RYA",
  "Yachtmaster",
  "Handwriting",
  "Happiness",
  "Bacula",
  "Tantra",
  "Calligraphy",
  "Improv",
  "LaTeX",
  "ICO",
  "Knitting",
  "Passwordless",
  "Authentication",
  "ZapWorks",
  "ActionScript",
  "Zen",
  "Danish",
  "Language",
  "Juniper",
  "WatchOS",
  "Umbraco",
  "Acoustics",
  "Babysitting",
  "XenApp",
  "Neuroscience",
  "Debt",
  "Mailchimp",
  "Salary",
  "Negotiation",
  "NEBOSH",
  "Dating",
  "F#",
  "Economics",
  "Facilitation",
  "Neuroplasticity",
  "Acting",
  "Sails.js",
  "Latin",
  "Language",
  "BaaS",
  "Walking",
  "MagicaVoxel",
  "UML",
  "YouTube",
  "Audience",
  "Growth",
  "Quora",
  "Yoga",
  "Banjo",
  "Salsa",
  "Dancing",
  "WebRTC",
  "Gambling",
  "V-Ray",
  "iBeacon",
  "Tableau",
  "Laravel",
  "JVZoo",
  "MailerLite",
  "Ghostwriting",
  "VBScript",
  "ReactiveX",
  "Salesforce",
  "JNCIA",
  "OData",
  "Yoga",
  "for",
  "Kids",
  "Fasting",
  "Geology",
  "JBoss",
  "Vector",
  "Graphic",
  "Decluttering",
  "Palmistry",
  "OAuth",
  "Abaqus",
  "Addiction",
  "LaunchPad",
  "Taijutsu",
  "D3.js",
  "LabVIEW",
  "CamelCamelCamel",
  "Leadership",
  "VEGAS",
  "Pro",
  "SAM",
  "Broadcaster",
  "Kettlebell",
  "Quicktime",
  "Six",
  "Sigma",
  "Yellow",
  "Belt",
  "Fertility",
  "Weblogic",
  "Haskell",
  "TCP/IP",
  "Upwork",
  "DApp",
  "Ballet",
  "SaaS",
  "Kodi",
  "Zen",
  "Cart",
  "Oboe",
  "OneNote",
  "HBase",
  "IIS",
  "NCH",
  "Zapier",
  "ECMAscript",
  "Zoho",
  "KiCad",
  "YouTube",
  "Marketing",
  "Farming",
  "eBook",
  "WeChat",
  "VB.NET",
  "Xcode",
  "Quitting",
  "Smoking",
  "Rapping",
  "Tally.ERP",
  "Camtasia",
  "Bagpipe",
  "Objective-C",
  "Malware",
  "Macroeconomics",
  "GarageBand",
  "macOS",
  "KnockoutJS",
  "Xamarin.Forms",
  "Debugging",
  "Fashion",
  "Webinar",
  "Kickboxing",
  "GetResponse",
  "hapi.js",
  "YARN",
  "Kotlin",
  "RabbitMQ",
  "Fear",
  "Underscore.js",
  "Accordion",
  "Underwater",
  "Photography",
  "NEM",
  "DAX",
  "Teamwork",
  "Parallel",
  "Programming",
  "Webpack",
  "Geography",
  "OpenFoam",
  "Law",
  "LDAP",
  "Canva",
  "Vegan",
  "Cooking",
  "Harmonium",
  "QuickBooks",
  "EDI",
  "Bachata",
  "EDM",
  "Vagrant",
  "QuickSight",
  "Vaadin",
  "Genetics",
  "Ubuntu",
  "ZKTeco",
  "Time",
  "Attendance",
  "Lean",
  "DCF",
  "Party",
  "Planning",
  "Navisworks",
  "Unity",
  "Econometrics",
  "Tcl",
  "Vedic",
  "Math",
  "Keylogger",
  "ReactVR",
  "Kabbalah",
  "EFT",
  "IGCSE",
  "Yii",
  "Framework",
  "Harmonica",
  "TeamCity",
  "ABRSM",
  "iMovie",
  "CakePHP",
  "QRadar",
  "Zimbra",
  "WebGL",
  "REBT",
  "Leaflet",
  "QGIS",
  "OpenGL",
  "Neural",
  "Networks",
  "GDAL",
  "Mainframe",
  "NativeScript",
  "Ecology",
  "Backbone.js",
  "Calisthenics",
  "Ransomware",
  "Gamification",
  "React",
  "SaltStack",
  "Juggling",
  "XML",
  "OKR",
  "Pandas",
  "Quran",
  "Manga"
];

let results = [];
let suggestions = [];
let searched = [];

function start() {
  seed = seed.filter(el => !searched.includes(el));
  suggestions = suggestions.filter(el => !searched.includes(el));
  seed.concat(suggestions);
  console.log("SEED: " + seed);
  let i = 0;
  let max = seed.length;
  search(i, max);
}

function search(i, max) {
  console.log(i);
  if (i < max) {
    if (i % 5 == 0 && i != 0) {
      if (i % 10 == 0) {
        sleep(1200, 1800, null, null);
      } else {
        sleep(300, 600, null, null);
      }
    } else {
      let curr = seed[i];
      let prev;
      if (i == 0) {
        prev = "Excel%20Shortcut";
      } else {
        prev = seed[i - 1];
      }
      fetchSearch(i, max, curr, prev);
    }
  } else {
    start();
  }
}

function fetchSearch(i, max, curr, prev) {
  fetch(
    `https://www.udemy.com/api-2.0/marketplace/current/insights/?search=${curr}&language=en&fields[course]=@default,headline,image_304x171,instructor_name,content_info,num_published_lectures,content_length_practice_test_questions,num_published_practice_tests,instructional_level,discount,num_reviews,rating,badges,caption_languages`,
    {
      credentials: "include",
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: "Bearer lt4l1AXtVnSPflO87sDHSOP7Pb7aMRNDcUqJntoR",
        "x-requested-with": "XMLHttpRequest",
        "x-udemy-authorization":
          "Bearer lt4l1AXtVnSPflO87sDHSOP7Pb7aMRNDcUqJntoR",
        "x-udemy-cache-brand": "c976b1c4649799e2",
        "x-udemy-cache-campaign-code": "7815696ecbf1c96e",
        "x-udemy-cache-price-country": "461b1990fe86af96",
        "x-udemy-cache-release": "5039f35f81cc4810",
        "x-udemy-cache-user": "d41d8cd98f00b204",
        "x-udemy-cache-version": "c4ca4238a0b92382"
      },
      referrer: `https://www.udemy.com/home/teaching/marketplace-insights/?q=${prev}&lang=en`,
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "cors"
    }
  )
    .then(function(res) {
      if ((res.status = "429")) {
        let secondsToWait = res.headers.get("retry-after");
        console.log("HAVE TO WAIT: " + secondsToWait + "s");
        // let maxWait = secondsToWait+600;
        // console.log("Max: " + maxWait)
        // sleep(secondsToWait, maxWait, null, null);
        return delay(secondsToWait * 1000);
      } else {
        res.json().then(result => {
          let metrics = result.results["0"].course_label_metrics;
          if (metrics !== null) {
            i++;
            addSuggestions(metrics);
            results.push(metrics);
            return metrics;
          } else {
            return curr + " is not an existing Udemy Topic";
          }
        });
      }
    })
    .then(console.log)
    .then(() => {
      sleep(5, 25, i, max);
    });
}

function addSuggestions(metrics) {
  let array = metrics.related_course_label_metrics_list;
  array.forEach(element => {
    let item = element.course_label.display_name;
    if (suggestions.indexOf(item) === -1 && searched.indexOf(item) === -1) {
      suggestions.push(item);
    } else {
      console.log(item + " already exists or has been searched!");
    }
  });
}

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

function sleep(min, max, idx, seedMax) {
  let waitTime = Math.random() * (max - min) + min;
  console.log("TIMER STARTED: " + waitTime);
  setTimeout(function() {
    console.log("TIMER STOPPED");
    if (idx !== null && seedMax !== null) {
      search(idx, seedMax);
    }
  }, waitTime * 1000);
}
