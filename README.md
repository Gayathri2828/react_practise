API: Application Programming Interface

Instagram :

methods : get, post, delete, put

get api call (server to client)
post call(clinet to server)
delete (client to server)
put (clinet to server)

fetch : fetch is used to happen https calls in clinet
fetch return promise

fetching data in react application on page load :
ways for fetching dsta in react data app:

1. fetch
2. axios
3. swr
4. react query

fetch(URL).then().catch()

ComponentDidMount : This method is used to cause the side effects with in the class component

side effects : api calls(https calls),Dom manipulations, Event listeners, Timers

componentDidMount is self invoked method
componentDidMount runs only once in a lifecycle
componentDidMount will invoke after the render method

fetch and axios difference :

1. fetch doesn't convet to json, we need to manually
2. fetch doesn't provide status codes
3. fetch is provided by the browser web api
4. fetch doesn't intercept the response and request

5. axios converts to json automatically
6. we will get the status code, based on the status codes, we will show the user interface
7. axios is the third party library
8. axios supports intercept the response and request
