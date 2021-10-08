
<h1 align="center">
  Site-Preview-API
</h1>

<p> Site Preview API is a link unfurling API that returns metadata of a website . The endpoint returns a parsed version of the html content of the url parsed and returns it in the form of a JSON Object  </p>

## Frameworks used for the API
Nest JS https://nestjs.com/ </br>
Prisma database orm https://www.prisma.io/


## 🛠 Installation & Set Up

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Start the development server

   ```sh
   npm run start:dev
   ```

## Endpoints 

 ```sh
  GET   https://localhost:3000/api/parse:url
   ```

## API Call

https://localhost:3000/api/parse?url={url of website}


## Code Examples :

 https://localhost:3000/api/parse?url=https://nextjs.org/docs/api-routes/dynamic-api-routes



## Query Parameters 

url -  required  - This is the url that will be parsed to get the metadata with includes title,description and favicon of the website



  ## Responses

  ![alt text](https://github.com/rafiquecudjoe/link_unfurling_api/blob/main/response.png?raw=true)


## Status and Errors

Status 200 = Success

Status 500 = Server Error

Response code 999 = (Request denied)


