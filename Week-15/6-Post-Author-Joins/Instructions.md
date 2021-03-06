# Post Author Joins

In this activity we alter our current queries so that they return joined Post Author data.

## Instructions

1. Open the Unsolved Folder

2. Run `npm install`

3. Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

4. Navigate to the `post-api-routes.js` file.

5. Add the "include" option to the queries specified in the comments. This is a feature called "eager loading". We want to "include" the Author model. Examples can be found here:
<http://docs.sequelizejs.com/en/latest/docs/models-usage/?highlight=eager%20loading#eager-loading>

6. Navigate to the `author-api-routes.js` file and add the "include" option to the queries specified in the comments. Here we want to "include" the Post model.

7. If successful the application should now be fully functional. After you create a few Authors with a few posts, try navigating to either `localhost:8080/api/posts` or `localhost:8080/api/authors` to make sure the JSON returned for both routes includes all of the data.

**Hint**: The "include" key goes on the same options object as the "where" attribute we've been using. Examples can be found at the link supplied.
