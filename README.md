# Receipt Generator

Receipt generator is a simple application built using node.js and express to calculate receipt details. 

  - Type your input in string or JSON object format
  - Click submit
  - Get the receipt

### Tech

Receipt generator uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework

## How to use ?
### Method 1 : Using Text String
Enter your order number followed by new line. 
Input should be in the format : 
```
<quantity> <imported:optional> <product name> at <price>
```
Example : 
Sample Input
```
Order 2:
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50
```
Sample Output : 
```
Order 2:
1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15
```

### Method 2 : Using JSON as input
Write a JSON object as your input 
Example : 
Sample Input :
```json
{
    "name": "order2",
    "items": [
        {
            "name": "box of chocolates",
            "category": "food",
            "quantity": 1,
            "price": 10,
            "imported": true
        },
        {
            "name": "bottle of perfume",
            "category": "perfume",
            "quantity": 1,
            "price": 47.50,
            "imported": true
        }
    ]
}
```
Sample Output : 
```
Order 2:
1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15
```


### Installation
1. Create a folder to hold your installation: 
```sh
$ mkdir tax
```
2. Copy the contents of the zip to your newly created folder
3. Install the dependencies  and start the server.

```sh
$ cd tax
```
4. Install dependencies:
```sh
$ npm install
```
5. install nodemon as a development dependency:
```sh
$ npm install --save-dev nodemon
```
6. Start application:
```sh
$ nodemon
```
7. Visit http://localhost:3000 in your browser


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   

