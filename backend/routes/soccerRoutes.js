import {
    addNewPlayer, 
    getPlayers,
    getPlayerWithID
} from "../controllers/playerControllers";

/**
 * We need to create a variable that will hold the routes, and then pass the app as an argument.  So we'll need to insert this route
 * into our index.js afterwards, and then pass in the app (the Express app) inside of that function.
 */

const routes = (app) => {
    app.route('/players')
        // GET endpoint
        .get(getPlayers)
        // POST endpoint
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
}

export default routes;