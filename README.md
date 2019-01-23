1- run npm install in each 3 folder.

2- run `npm run start` in api folder and client folder.

3- `Create streams`

3- install [OBS Studio](https://obsproject.com) , add a new scenes in the `scenes` then add `Audio Output Capture` and `Display Capture` in the source box .

4- `settings -> Stream -> Choose "Custom Streaming Server" from "Stream Type"`.

5- Enter the following address in the URL field

    `rtmp://localhost/live`

6- Enter your id stream in the Stram key filed.

7- Click OK button and then click "Start Streaming"

tip: Your id is a number after "/streams/" in the address bar.

for example: "http://localhost:3000/streams/8" 8 is your id.
