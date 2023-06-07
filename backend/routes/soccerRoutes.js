import { addNewPlayer, getPlayers } from "../controllers/playerControllers";

/**
 * We need to create a variable that will hold the routes, and then pass the app as an argument.  So we'll need to insert this route
 * into our index.js afterwards, and then pass in the app (the Express app) inside of that function.
 */

const routes = (app) => {
    app.route('/players')
    .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);
}

export default routes;