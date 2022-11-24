# setting the things up 
## setting up keycloak with docker 
 docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -p 8080:8080  sleighzy/keycloak

or any other keycloak will work as 
after the server is up import the client setting provided in the same directory file name **keycloak-realm-export.json**

Once imported keycloack will run on Master realm


## Run the **npm start** to start the frontend server 

this should redirect you to login page and as we have setted username and password as **admin** this should take you to the homepage

- add users in keycloak for multiple users so that premium option can be checked 

**image of login page - keycloak**


**image of homepage page - keycloak**



