// blog posts - add an object to add a post
let posts = [
  {
    title: "The first site ever hosted on a Raspberry Pi",
    date: "October 4, 2023",
    author: "Nick",
    content:
      "I have never put together a self-hosted site before, so I decided to test out whether or not my unused Raspberry Pi 3B could do it.  Turns out it can!",
  },
  {
    title: "Simple JavaScript Posts - need to build a backend",
    date: "October 4, 2023",
    author: "Nick",
    content:
      "Hosting all these posts will probably be way to difficult to manage with simple javascript, so we need to come up with a different solution!",
  },
  {
    title: "The second day blogging",
    date: "October 5, 2023",
    author: "Nick",
    content:
      "This is the second day blogging on the raspberry pi! It's definitely fall here, the leavees are just starting to turn and it was cool and foggy this morning in Chesterfield.",
  },
  {
    title: "Displaying weather data and making the pi useful",
    date: "October 6, 2023",
    author: "Nick",
    content:
      "I've spent the last couple of days updating the pi and figuring out how to display different pages on it.  The pages all need more up to date styling, but that will come later after a lot of the functionality is sorted.  The pi now has a weather data section where it pulls data from the Open Weather API for my specific location.  It now shows all the weather data that I'm interested in including the five day weather forecast.  In the near future, I will add important information about the health of the pi - CPU usage, temperature, disk space and so on.  I have a lot of big plans for it!",
  },
  {
    title: "System Metrics Added!",
    date: "October 6, 2023",
    author: "Nick",
    content:
      "I went ahead and added all the interesting system metrics to the homepage that I could think of.  It will make the main page a bit more useful and will also have data that can be used in case the site goes down.",
  },
  {
    title: "Cooler Weather and System Metrics Now Working!",
    date: "October 9, 2023",
    author: "Nick",
    content:
      "The host computer (Raspberry Pi 3) metrics have now been fixed after much overcomplication.  Now, anyone who visits this site can now see what's going on with the Pi in real time (well, every 10 seconds). \n The weather in Chesterfield has turned quite a bit cooler and now it really is starting to feel like fall.  It will be interesting when on site data collection will start so that users can see the how the weather has changed locally, and eventuall there will be graphs and charts depicting the weather trends.",
  },
  {
    title: "Switched Weather Data to NOAA",
    date: "October 11, 2023",
    author: "Nick",
    content:
      "The weather data is now being pulled from the NOAA weather API.  This data is more accurate, and since it's freely available, there's no need for an API key.  The hope is that this data will be a better complement to the very local data that will be provided by the onsite weather station that will be installed soon.",
  },
  {
    title: "Weather station installed, now to send data to the Weather page",
    date: "October 19, 2023",
    author: "Nick",
    content:
      "The Ambient Weather AW-7078 weather station has been installed in the backyard and is fully functional as of last weekend.  Now I'm working on pulling the data from the API to populate the weather page.",
  },
  {
    title:
      "Data from the weather station is now avaialable on the weather page",
    date: "October 20, 2023",
    author: "Nick",
    content:
      "The data is now being added to the page!  Now to begin some formatting and styling to make it more useful.",
  },
  {
    title: "We now have our own domain!",
    date: "October 26, 2023",
    author: "Nick",
    content:
      "After a hiccup this week with our ISP, and some other funny business, we now have our own domain and can be accessed through http://chesterfieldweatherblog.link.  We don't yet have HTTPS yet as that has to be configured.",
  },
  {
    title: "Moving over to hosting on AWS",
    date: "October 27, 2023",
    author: "Nick",
    content:
      "Due to some limitations of hosting the site on a Raspberry Pi, we are moving over to hosting on AWS.  This will allow us to have HTTPS and a more reliable connection.  The site layout has changed a bit since it has been rebuilt using React.  The NOAA weather forcast will be moved to a separate page to make the main page less cluttered and easier to read.",
  },
  // ... add more posts as objects
];

posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export { posts };
