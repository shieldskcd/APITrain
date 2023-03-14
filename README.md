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
   - POST Requests
   - DELETE Requests
   - PUT/PATCH Requests
   - Consuming APIs
   - Common Satus Codes
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

### Real Life Use Case

APIs are meant to be simple, especially RESTful APIs. Here is a real life example:

- A website, skyscanner.com, uses API's to collect flight prices from other websites.
- There are several airline services connected to it, and once you request your flights, SkyScanner sends a request to all the partners
- It asks each website, via API, to present the prices for flights
- The data is then bundled up and sent to you, the requestor. This is considered a 1-To-Many relationship but most APIs are 1-to-1.

### Programming Languages

So what programming languages can use APIs?

- Most modern web languages can use APIs. However, it's important to remember that HTML is NOT a programming language so it cannot use APIs.
- Common languages include: Python, JavaScript, PHP, Java, C, and Ruby
- Each of these languages can use APIs but the way that you tell the language to communicate varies from language to language. Essentially, there is no single "One for all languages" way to use APIs.

### What are RESTful APIs

REST is a type of API and it stands for:
**RE**presentational
**S**tate
**T**ransfer

- In simple terms, any client computer asks another computer for data or to take action.
- In our restaurant example: the Chef is our server, you (the diner) are the client, and the waiter is the API.

### Introduction to JSON

Time to start learning about SWAPI - [The Star Wars API](https://swapi.co)!

- This site is an API site that lets you use their API to pull any Star wars data you could ever ask for. It's also a great way to quickly test an API function.
- If you place an API call to it such as `https://swapi.co/api/starships/9` the API will return a large list of data about the Death Star.
- The data will be presented in a special list of organized data known as JSON or _JavaScript Object Notation_, it is essentially a list of key pairs that you can interact with in an application.

### Using SWAPI Notes

Unfortunately the original SWAPI website is no longer maintained but it looks like someone else has taken over the management of the site. It is now available at http://swapi.dev

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
| **HTTP Methods for RESTful Requests** |
|-----------------|
| HTTP Method | CRUD Operation | Example URL(s)|
|-----------| -------------| ------------|
|GET | Read | HTTP GET http://website.com/api/users
