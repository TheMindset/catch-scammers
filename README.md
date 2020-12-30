# CSA (Catch Scammers Application)


## Technical stack
This project has been created with the following technologies :
- Node.js (v13.12)
- Yarn
- Express.js (v4.17.1) & Typescript (v3.9.7)
- Docker & Docker compose

This project also needs to follow eslint standards before a commit and push your code.
It uses Mocha + Chai to proceed unit testing and Docker to serve hot reload in development & production.

## Development
### Requirements
In order to work on this project, It's recommended to use **Docker & Docker-compose** on your machine.

### Launching
Here are the steps to launch a test server with hot reload :

You have just to launch a command using *Makefile* :
```bash
$ make start
```

### Testing
You can lunch *unit test* using the following command :
```bash
$ make test
``` 

PS: If you want more information on available commands please enter **make** in the terminal at the root of the project

## Production

### First launch
If it's the first time you launch this soft, then ensure you have **Docker & Docker-compose** on the production server.

**Please first make sure that you have the correct environment variables according to *.env.dist***

Then just use the following command at the root of the project :
```bash
$ make start
```



## Endpoints
Midas has 5 endpoints :
- GET /getAdsStatus : Return  the status of an ad according to the information provided.

### GET /getAdsStatus

It needs a body as following.

```json
{
  "contacts": {
    "firstname": "Christophe",
    "lastname": "Dupont",
    "email": "testdepot_@yopmail.fr",
    "phone1": {
      "value": "0607080901"
    }
  },
  "creationDate": "2020-01-09T09:02:22.610Z",
  "price": 29000,
  "publicationOptions": ["STRENGTHS", "BOOST_VO"],
  "reference": "B300053623",
  "vehicle": {
    "make": "HONDA",
    "model": "CR-V",
    "version": "IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
    "category": "SUV_4X4_CROSSOVER",
    "registerNumber": "AA123AA",
    "mileage": 100000
  }
}
```

##### Arguments
All arguments are **MANDATORY**

CSA sends a response as following:

*In cases where the ad **is not a scam***
```json
{
  "reference": "B300053623",
  "scam": false,
  "rules": []
}
```

*In cases where the ad **is a scam***
```json
{
  "reference": "B300053623",
  "scam": true,
  "rules": [
    "rule::lastname::length",
    "rule::alpha_rate",
    "rule::price:quotation_rate",
    "rule::registernumber::blacklist"
  ]
}
```


## /!\ What to upgrade on this project /!\

In the project:
- Add a database for save ads, in this case I recommend a NoSQL database like MongoDB, because the information in the ads can
- Add a middleware for centralize the management of errors (those of the internal and external services).
- A log file to catch errors and all the information related to this error

For deployment in production : 
- CI/CD: Travis CI, Github Actions, AWS Pipeline ==> For deployment on AWS servers/ECS/Fargate/EKS.
