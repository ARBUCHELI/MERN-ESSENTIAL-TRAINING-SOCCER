import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

// Create a Player from the mongoose model that we just imported
const Player = mongoose.model('Player', PlayerSchema)

// Now we are going to create our first controller.

// Controlers are basically the functions that interact with the Database, when we are making a request to the API

/** FLOW:
 * The request sends the request to the API with the route, and the controller executes the function in the database.
 * The first controller we are going to create is the addNewPlayer, the post.
*/

export const addNewPlayer = (req, res) => {
    /** First we create a temporary variable called newPlayer, and we'll insert a Player object the we created in line 5.  And
     *  we'll insert inside of that new variable, the body of our request.  So whatever data we are going to send from the request
     * is going to be inserted inside of that particular variable.
     * Then the newPlacer will be saved in the database.
    */
    let newPlayer = new Player(req.body);

    /*newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    })*/

    newPlayer.save()
        .then(function (Player) {
            res.json(Player);
        })
        .catch(function (err) {
            console.log(err);
        })
}


