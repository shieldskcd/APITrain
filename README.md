# Understanding APIs and RESTful APIs Crash Course

This is a collection of notes from the "Understanding APIs and RESTful APIs Crash Course on Udemy by Kalob Taulien. It is not intended to teach one how to code, simply to provide a solid basic understanding of what an API is and how they work in Web Applications.

## Table of Contents

1. [Introduction](#introduction)
2. [Understanding API's and RESTful APIs](#understanding-apis-and-restful-apis)
   - [The API as a Waiter](#the-api-as-a-waiter)
   - [Real Life Use Case](#real-life-use-case)
   - [Programming Languages](#programming-languages)
   - [Introduction to RESTful APIs](#what-are-restful-apis)
   - [Introduction to JSON](#introduction-to-json)
   - [Using SWAPI Notes](#using-swapi-notes)
   - [Real JavaScript Example](#using-a-real-javascript-example)
   - [GET Requests](#get-requests)
   - [POST Requests](#post-requests)
   - [DELETE Requests](#delete-requests)
   - [PUT/PATCH Requests](#putpatch-requests)
   - [Consuming APIs](#consuming-apis)
   - [Common Satus Codes](#common-status-codes)
   - API Security
3. Summary
   - Resouurces
   - REST API Cheat Sheet

## Introduction

What exactly is an API?

- The simplest answer is that it is an interface between a computer and a web application.
- It means **A**pplication **P**rogrammable **I**nterface and is used all over the world for applications to interact
- It is an interface, although not a visual interface, used to exchange data between a web application and a local device.

## Understanding APIs and RESTful APIs

A concept such as an API can be complicated to grasp for a non-developer, but by use of metaphors, a clearer understanding can be achieved.

### The API as a Waiter

In the simplest sense, an API serves much like a waiter.

- The waiter comes to you, the visitor, and asks what you would like to order.
- You then order the "finest pizza" at the restaurant.
- The waiter acknowledges your order and takes it to the chef.
- The waiter explains the order you have made so that the chef can prepare it accordingly.
- Once the chef completes the order, the waiter will then bring you the order you requested
- You, the consumer, can then eat the pizza in whatever way you so choose.

[Back to Top](#table-of-contents)

### Real Life Use Case

APIs are meant to be simple, especially RESTful APIs. Here is a real life example:

- A website, skyscanner.com, uses API's to collect flight prices from other websites.
- There are several airline services connected to it, and once you request your flights, SkyScanner sends a request to all the partners
- It asks each website, via API, to present the prices for flights
- The data is then bundled up and sent to you, the requestor. This is considered a 1-To-Many relationship but most APIs are 1-to-1.

[Back to Top](#table-of-contents)

### Programming Languages

So what programming languages can use APIs?

- Most modern web languages can use APIs. However, it's important to remember that HTML is NOT a programming language so it cannot use APIs.
- Common languages include: Python, JavaScript, PHP, Java, C, and Ruby
- Each of these languages can use APIs but the way that you tell the language to communicate varies from language to language. Essentially, there is no single "One for all languages" way to use APIs.

[Back to Top](#table-of-contents)

### What are RESTful APIs

REST is a type of API and it stands for:
**RE**presentational
**S**tate
**T**ransfer

- In simple terms, any client computer asks another computer for data or to take action.
- In our restaurant example: the Chef is our server, you (the diner) are the client, and the waiter is the API.

[Back to Top](#table-of-contents)

### Introduction to JSON

Time to start learning about SWAPI - [The Star Wars API](https://swapi.co)!

- This site is an API site that lets you use their API to pull any Star wars data you could ever ask for. It's also a great way to quickly test an API function.
- If you place an API call to it such as `https://swapi.co/api/starships/9` the API will return a large list of data about the Death Star.
- The data will be presented in a special list of organized data known as JSON or _JavaScript Object Notation_, it is essentially a list of key pairs that you can interact with in an application.

[Back to Top](#table-of-contents)

### Using SWAPI Notes

Unfortunately the original SWAPI website is no longer maintained but it looks like someone else has taken over the management of the site. It is now available at http://swapi.dev

[Back to Top](#table-of-contents)

### Using a Real JavaScript Example

Of course, the best way to understand this technology is to use a real-world example.

- Open the SWAPI URL (https://swapi.dev/) and open a console in Google Chrome.
- In the console, you can type the following code:

```javascript
fetch("https://swapi.dev/api/people/")
  .then((res) => res.json())
  .then((response) => console.log(response));
```

- This will produce a JavaScript promise which then generates a list of data (in this case, 87 records).
- Most langauges have a data strucuture that looks like a JavaScript Object
- One day, someone decided that it should be a standard and JSON became a standard.

[Back to Top](#table-of-contents)

### GET Requests

There are mutliple _methods_ (ways) in which an API can be called in a web app. The list basically looks like this:

- HTTP GET
- HTTP POST
- HTTP PUT
- HTTP DELETE
- HTTP PATCH

How does a GET Request work?

- When you load a website, that's a GET request
- It's a request to get data from another computer
- You're simply asking for data and you are ont asking to perform a task
- You're not creating, updating, or deleting data
- This is the most common request type.

HTTPS Methods for RESTful Requests:
| HTTP Method | CRUD Operation | Example URL(s)|
| --- | --- | --- |
|GET | Read | HTTP GET http://website.com/api/users/1/|

- In the restaurant analogy, using a _GET_ request is essentially like asking the waiter to give you a menu

[Back to Top](#table-of-contents)

### POST Requests

How does a POST Request work?

- Does not go through the standard URL, but use a URL as the endpoint
- Ask another computer to create a new resource
- Returns data about the newly created resource
- A great example of one of these requests is if you are signing up for an account on some service. - You put in various information (name, email, phone, etc.)
  - The data is collected and _posted_ as an item linked to your user name
  - Now, when you need to use the object, you provide it your user name and the POST can provide you with that data (if you are the one authorized to have it)

| HTTP Method | CRUD Operation | Example URL                              |
| ----------- | -------------- | ---------------------------------------- |
| GET         | Read           | HTTP GET http://website.com/api/users/1/ |
| POST        | Create         | HTTP POST http://website.com/api/users/  |

- In the restaurant analogy, using a _POST_ request is the equivalent to telling the waiter "I want this pizza" and then the chef saying "Okay, here is the pizza you requested"

[Back to Top](#table-of-contents)

### DELETE Requests

How does a DELETE Request work?

- Do not go through the standard URL, but use a URL as the endpoint
- Ask another computer to delete a single resource or a list of resources
- **Use with caution!**

| HTTP Method | CRUD Operation | Example URL                                |
| ----------- | -------------- | ------------------------------------------ |
| GET         | Read           | HTTP GET http://website.com/api/users/1/   |
| POST        | Create         | HTTP POST http://website.com/api/users/    |
| DELETE      | Delete         | HTTP DELETE http://website.com/api/user/1/ |

- In the restaurant analogy, using a _DELETE_ request is similar to looking at your bill, seeing you were charged twice for your pizza, and then telling the waiter "Hey, I got charged twice, delete this other charge". The waiter would then put a request in to remove the second pizza charge from the bill.

[Back to Top](#table-of-contents)

### PUT/PATCH Requests

How does a PUT and PATCH request work?

**PATCH Requests**

- Do not go through the standard URL, but use a URL as the endpoint
- Ask another computer to _update a piece_ of a resource
- Are not fully supported by all browsers or frameworks, so we typcially fall back to _PUT_ requests
- Example: Updating a user's first name
- In the restaurant example, you get your bill and see that you were overcharged for your pizza. Rather than asking for them to redo the whole bill, you just ask the waiter to update the bill with the correct price for your pizza.

**PUT Requests**

- Do not go through the standard URL, but use a URL as the endpoint
- Ask another computer to _update an entire resource_
- If the requested doesn't exist, the API might decide to _CREATE_ the resource instead.
- In the restaurant example, this would be the equivalent of seeing your bill and you were charged for a steak and a salad that you did not order at all. You then tell the waiter to redo this whole bill because it is wrong.
- A _PUT_ request will generally replace the ENTIRE item.

| HTTP Method | CRUD Operation          | Example URL                                        |
| ----------- | ----------------------- | -------------------------------------------------- |
| GET         | Read                    | HTTP GET http://website.com/api/users/1/           |
| POST        | Create                  | HTTP POST http://website.com/api/users/            |
| DELETE      | Delete                  | HTTP DELETE http://website.com/api/users/1/        |
| PUT         | Update/Replace          | HTTP PUT http://website.com/api/user/1/            |
| PATCH       | _PARTIAL_ Update/Modify | HTTP PATCH http://website.com/api/user/1/firstname |

[Back to Top](#table-of-contents)

### Consuming APIs

- APIs can be **written** in almost any server-side language.
- APIs will generally return one of two types of data structures: _JSON_ or _XML_

**Example of JSON**

```json
{
  "key_val_example": "value",
  "array_example": ["array item 1", "array item 2"],
  "object_example": {
    "key1": "value1",
    "key2": "value2"
  }
}
```

**Example of XML**

```xml
<example>
   <field>
   Value
   </field>
   <secondField>
   Value
   </secondField>
   <nestedExample>
      <nestedField>
      Value
      </nestedField>
      <nestedSecondField>
      Value
      </nestedSecondField>
   </nestedExample>
</example>
```

- APIs can be _consumed_ in just about any language but generally:
  - Browsers use JavaScript for their API requests
  - Servers use any language that runs on that computer

[Back to Top](#table-of-contents)

### Common Status Codes

The difference between _REQUESTS_ and _RESPONSES_

- **Request** > When you request data from a server using GET, POST, PUT, PATCH, or DELETE... that is a REQUEST.
- **Response** > When the server returns your data ... that is a RESPONSE.

- **Responses will always come with an HTTP Status code**. These "status codes" tell you what's wrong (or right) without needing to give you text back to read.

**Healthy Responses (2xx)**

- 200 - Ok - request is accepted
- 201 - Created - POST requets often return 201s when a resource is created
- 202 - Accepted - When a request is accepted but its not done processing. Maybe the task goes into a queue.

**Redirect Responses (3xx)**

- 301 - Moved Permanently - When the endpoint has permanently changed. Update your endpoint
- 302 - Found - The endpoint you're accessing is temporarily moved to somewhere else

**Client Responses (4xx)**

- 400 - Bad Request - Server cannot or will not process your request. Often this is due to malformed API keys or an invalid payload
- 401 - Unauthorized - You're not allowed here. Usually this is because you are missing authentication credentials (API Key)
- 403 - Forbidden - The server understands your request but won't execute it. Your API keys might not have the right permissions or you're trying to use an endpoint you don't have access to.
- 404 - Not Found - There's nothing here. Move along, move along.
- 405 - Method Not Allowed - You're using the wrong HTTP method. The endpoint might only accept GET requests and you might POSTing to it, for example.

**Server Responses (5xx)**

- 500 - Internal Server Error - The server had a problem and couldn't process the request. This is the _only time_ you are not in control.

**Just for Fun**
For fun, what kind of error is 418? The correct answer is here: [418 Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418)

[Back to Top](#table-of-contents)

### API Security
