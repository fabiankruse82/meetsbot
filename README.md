# meetsbot
## creates a bot that will simulate your active participation in a boring meeting
1. Create a GCP Project:
   
1.1. Go to the Google Cloud Console: https://console.cloud.google.com/

1.2. Create a new project.

1.3. Enable the Google Calendar API and Google Meet API for your project.

1.4. Generate OAuth 2.0 Credentials. Create OAuth 2.0 credentials to authenticate your application with the APIs.

1.5. Download the client ID and client secret.

2. Install Necessary Packages:
2.1. Node.js and npm.
   
Make sure you have Node.js and npm installed on your system.

3. Install Puppeteer using npm:
   
3.1. npm install puppeteer.

4. Install virtual audio device.
4.1. Download and Install VB-CABLE:   
Visit the official website of VB-CABLE (https://vb-audio.com/Cable/index.htm) and download the VB-CABLE Driver package.
Follow the installation instructions provided by the installer.

4.2. Configure Audio Playback:
Open your preferred media player (e.g., VLC Media Player) and load the audio file you want to play during the Google Meet meeting.
In the media player, configure the audio output to VB-CABLE Input (VB-Audio Virtual Cable).

4.3. Configure Google Meet:
Use Puppeteer or manually join the Google Meet meeting with your regular audio settings (microphone muted and speakers enabled).

4.4. Configure Audio Settings:

4.4.1. Open your system's Sound settings.

4.4.2. Set the VB-CABLE Output (VB-Audio Virtual Cable) as the default playback device.

4.4.3. Set your regular microphone as the default recording device.

4.5. Test:

4.5.1. Start playing the audio file in your media player.

4.5.2. Join the Google Meet meeting and confirm that the audio from the media player is heard by other participants.

5. Run script.

6. Do whatever tf you want during a useless meeting.

7. Make sure that you alter code with text messages, emojis, and altered schedules. Also, code supplies the delivery of pre recorded messages like "good morning" etc., so make sure you have them ready before running.
