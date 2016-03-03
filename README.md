# FCC Timestamp Microservice

This is a simple timestamp microservice. This API was made using JavaScript, Babel, Moment.js, Express.js, Jade, and Semantic UI.

## Instructions
- Pass either a natural language date (January 15 2016) or unix timestamp (1452834000) to the following API:
http://fcc-timestamp-service.herokuapp.com/
- If it is a valid date it will return the unix timestamp and the natural language form of the date
- If it is not a valid date it will return null for both of those properties

## Examples
- http://fcc-timestamp-service.herokuapp.com/January%2015%202016 will return ```{"unix": "1452834000", "natural": "January 15, 2016"}```

- http://fcc-timestamp-service.herokuapp.com/1454130000 will return ```{"unix": "1452834000", "natural": "January 15, 2016"}```

- http://fcc-timestamp-service.herokuapp.com/30%202016 will return ```{"unix": null, "natural": null}``

-  ```%20``` represents a space in a url. You can place spaces in the url and ```%20``` will be added automatically when the url is parsed.
