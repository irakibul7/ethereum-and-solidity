const timestamp = 1665351347000; // timestamp in milliseconds

// Create a new `Date` object from the timestamp
const date = new Date(timestamp);

// Get the UTC date, month, and year
const utcDate = date.getUTCDate();
const utcMonth = date.getUTCMonth();
const utcYear = date.getUTCFullYear();

// Get the UTC hours, minutes, and seconds
const utcHours = date.getUTCHours();
const utcMinutes = date.getUTCMinutes();
const utcSeconds = date.getUTCSeconds();

// Format the date and time as a string
const dateString = `${utcYear}-${
  utcMonth + 1
}-${utcDate} ${utcHours}:${utcMinutes}:${utcSeconds} UTC`;

console.log(dateString); // Outputs: "2022-10-9 21:35:47 UTC"
