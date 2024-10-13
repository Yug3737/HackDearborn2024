# Snap&Serve
An application that allows you to take a photo of a QR code and see what the nutrition info is.

## Introduction
In India and other countries, there have been proposals for implementing a symbol-based front-of-packaging nutrition info system. This system is based on WHO recommendations for daily intake of calories, sugar, fat, and other nutrients. If the limits exceed the recommended amount, a red icon will appear on the front of the package. This helps people become more aware of what they consume and allows consumers to be informed about whether a product may be harmful to their health. This system could positively impact overall health by encouraging better food choices.

In Singapore, the Nutritional Information Panel (NIP) is used to inform consumers about their drinks. This encourages the consumption of beverages rated A or B, promoting better dietary habits. We would like to bring a similar system to labeling food and beverage products in the US. <br>

<div align="center">
    <img src="https://ch-api.healthhub.sg/api/public/content/6665167aada64c049efa5a591972deee?v=dfcc39d2" alt="Nutrition Information Panel" width="400"/>
</div>

## How to use
Open our application and snap a photo of your favorite drink. The barcode must be horizontal (as seen below), and our application will analyze it to provide a rating similar to the NIP above. <br>

<div align="center">
    <img src="https://m.media-amazon.com/images/I/51Dpkw64v4L.jpg" alt="barcode example" width="400"/>
</div>

## How we built it:
Front-end: [React](https://react.dev/) <br>
Back-end: [Flask](https://flask.palletsprojects.com/en/3.0.x/)<br>
APIs used: [Gemini 1.5 Pro](https://deepmind.google/technologies/gemini/pro/) and [Open Food Facts API](https://www.healthhub.sg/programmes/nutrition-hub/nutri-grade-mark)

## Challenges
We initially used React Native, but later switched to React due to camera support issues. This led to restructuring our project halfway through development.

## Accomplishments
The backend worked smoothly with minimal issues. We adapted well to the challenges, producing a product we are proud of.

## What we learned
We gained experience in both React and React Native, learning about their limitations. We also realized the importance of researching APIs and technologies before starting a project.

## What’s next for Snap&Serve?
We plan to extend the app to analyze different types of food and eventually turn it into a mobile application.

## Resources
Learn more about food labels in India: https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(20)30031-1/fulltext#:~:text=The%20Food%20Safety%20Standards%20Authority,available%20to%20the%20public%20online. <br>
Learn more about the studies in Singapore: https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-019-6496-8#:~:text=Singapore%2C%20the%20country%20of%20focus,encouraged%20by%20the%20Singapore%20government. and https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10305914/#:~:text=The%20world%20is%20witnessing%20a,7

Created by: Yug Patel [LinkedIn](https://www.linkedin.com/in/yugpatel8767/), Austin Sternberg [LinkedIn](https://www.linkedin.com/in/austin-sternberg-765620218/), and Anna Anello [LinkedIn](https://www.linkedin.com/in/anna-anello-0ba40526a/)