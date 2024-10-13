# Snap&Serve
An application that allows you to take a photo of a QR code and see what the nutrition info is.

## Introduction
In India and other countries have proposed implementing a symbol-based front of packaging nutrition info system. This system is based off of WHO recommendations for the daily recommendations for calories, sugar, fat, and other nutrients. If they exceeded the recommended limit then there would be a red icon on the front of the package. This is helpful for those who want to be more aware of what they consume and allows the consumer to be informed of what they are about to buy may not be the best for them. This could be beneficial for overall health on consumers and allow them to be more aware of what they eat and drink. This Nutritional Information Panel(NIP) is used by the Signaporean government in order to inform consumers about their drinks. This encourages consumers to drink beverages rated A and B in order to improve their diet and their health. <br> ![Nutrition Information Panel](https://ch-api.healthhub.sg/api/public/content/6665167aada64c049efa5a591972deee?v=dfcc39d2)

## How to use
Open our application and snap a photo of your favorite drink. The barcode must be horizontal (as seen) and our application will analyze the barcode and be able to give you a rating similar to the NIP pictured above. ![barcode example](https://m.media-amazon.com/images/I/51Dpkw64v4L.jpg)

## How we built it:
Front-end: React <br>
Back-end: Flask <br>
APIs used: Gemini 1.5 pro and Open food facts API

## Challenges
We at first were using react-native. This was going well until we realized that it would be difficult to support our needs for the camera. We switched to react halfway through hacking and we had to completely restructure our project. 

## Accomplishments
The backend has had very little issues. We were able to easily adapt and overcome our challenges and we created a good product that we are proud of. 

## What we learned
We learned how react and react native work and their limitations. We need to research the APIs and what we never worked with before beginning to hack. 

## Resources
React: https://react.dev/ <br>
Flask: https://flask.palletsprojects.com/en/3.0.x/ <br>
Gemini 1.5 Pro: https://deepmind.google/technologies/gemini/pro/ <br>
Open Food Facts API: https://www.healthhub.sg/programmes/nutrition-hub/nutri-grade-mark <br>
Learn more about food labels in India: https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(20)30031-1/fulltext#:~:text=The%20Food%20Safety%20Standards%20Authority,available%20to%20the%20public%20online. <br>
Learn more about the studies in Singapore: https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-019-6496-8#:~:text=Singapore%2C%20the%20country%20of%20focus,encouraged%20by%20the%20Singapore%20government. and https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10305914/#:~:text=The%20world%20is%20witnessing%20a,7

Created by: Yug Patel ![LinkedIn](https://www.linkedin.com/in/yugpatel8767/), Austin Sternberg ![LinkedIn](https://www.linkedin.com/in/austin-sternberg-765620218/), and Anna Anello ![LinkedIn](https://www.linkedin.com/in/anna-anello-0ba40526a/)
