# meetsbot
## creates a bot that will simulate your active participation in a boring meeting
Create a GCP Project:
Go to the Google Cloud Console: https://console.cloud.google.com/
Create a new project.
Enable the Google Calendar API and Google Meet API for your project.
Generate OAuth 2.0 Credentials
Create OAuth 2.0 credentials to authenticate your application with the APIs.
Download the client ID and client secret.

Install Necessary Packages:
Node.js and npm.
Make sure you have Node.js and npm installed on your system.

Install Puppeteer using npm: 
npm install puppeteer.

Install virtual audio device.
Download and Install VB-CABLE:
Visit the official website of VB-CABLE (https://vb-audio.com/Cable/index.htm) and download the VB-CABLE Driver package.
Follow the installation instructions provided by the installer.
Configure Audio Playback:
Open your preferred media player (e.g., VLC Media Player) and load the audio file you want to play during the Google Meet meeting.
In the media player, configure the audio output to VB-CABLE Input (VB-Audio Virtual Cable).
Configure Google Meet:
Use Puppeteer or manually join the Google Meet meeting with your regular audio settings (microphone muted and speakers enabled).
Configure Audio Settings:
Open your system's Sound settings.
Set the VB-CABLE Output (VB-Audio Virtual Cable) as the default playback device.
Set your regular microphone as the default recording device.
Test:
Start playing the audio file in your media player.
Join the Google Meet meeting and confirm that the audio from the media player is heard by other participants.
Run script.

Do whatever tf you want during a useless meeting.

Make sure that you alter code with text messages, emojis, and altered schedules. Also, code supplies the delivery of pre recorded messages like "good morning" etc.
