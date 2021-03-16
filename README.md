# Connect Lambda Function To API Gateway From Scratch
If you are working with an existing amplify project jump down to 'Adding a Lambda Function'

## Project Setup
Prerequisites:
- Node.js v 10.x or later
- npm
- git
- An AWS Account

FOLLOW THIS TUTORIAL IF YOU GET STUCK CONFIGURING AWS: [Tutorial](https://docs.amplify.aws/start/getting-started/installation/q/integration/react)


## Install Amplify

Run:
### `npm install -g @aws-amplify/cli`

Then:
### `amplify configure`

Specify a us-west-2 for the region and a username of your choice. Then give the user AdministratorAccess. Once the user is created, Amplify CLI will ask you to provide the accessKeyId and the secretAccessKey to connect Amplify CLI with your newly created IAM user.

## Create React App
To create a react app run:
### `npx create-react-app .`

Run the project using:
 ### `npm start`

## Configure React Project to use Amplify
Create an Amplify backend by running:
### `amplify init`
Then fill out the information you are prompted for (hit enter for every question unless you know what you're doing). EXCEPT FOR THE LAST QUESTION, choose AWS Profile and use the AWS profile you created with the amplify configure command.

This is provisioning a backend for you in the cloud. Pretty cool!

Next install the amplify client and necessary dependencies:
### `npm install aws-amplify @aws-amplify/ui-react`

## Set up Frontend
Next, we need to configure Amplify on the client so that we can use it to interact with our backend services.

Open src/index.js and add the following code below the last import:
`import Amplify from "aws-amplify";`
`import awsExports from "./aws-exports";`
`Amplify.configure(awsExports);`


## Create API Gateway
To create an api run:
### `amplify add api`
- Choose: REST 
- Then give it a relevent name and path.
- Create a new Lambda Function 
- Choose node runtime
- Choose Hello World Template, unless you know what you're doing.
- No to advanced settings
- Yes to edit right now
- No to restrict API access 
- No to add another path

We will go over how to edit the lambda function below.

## Adding a Lambda Function (Start Here if API Gateway and Amplify are Configured)

To add a lambda function run:
### `amplify update api`

- Choose the api you want to add your lambda to
- Add another path
- Give it a name
- Create a new Lambda function 
- Give it a name
- Choose Node.js for runtime, unless you know what you're doing
- Hello World Template
- No to advanced settings
- Yes to edit right now

## Edit Lambda Function
To edit open amplify/backend/function/gfrFunc/index.js and read the comments to see how it's implemented.

Once your function is edited run:
### `amplify push`
And answer yes to any questions.
This is deploying your function in the cloud and will take a minute or two.

Pat yourself on the back, you now have a Lambda Function connected to API Gateway! 🥳





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
