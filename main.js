const { createContext } = require('./components/context');
const { joinGoogleMeet } = require('./components/googleMeet');

// Example usage
const meetLink = 'https://meet.google.com/egn-tjnz-yfd';
const email = 'your-email@example.com'; // Specify your Google account email
const password = 'your-password'; // Specify your Google account password

async function main() {
  const context = createContext();
  try {
    await joinGoogleMeet(context, meetLink, email, password);
    console.log('Joined the Google Meet meeting with camera and microphone turned off');
  } catch (err) {
    console.error('Error joining Google Meet:', err);
  } finally {
    context.close();
  }
}

main();
