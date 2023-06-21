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
    const newPlayer = new Player(req.body);
    newPlayer
      .save()
      .then((savedPlayer) => {
        res.json(savedPlayer);
      })
      .catch((err) => {
        console.error('An error occurred while saving the new player:', err);
        res.status(500).json({ error: 'An error occurred while saving the new player.' });
      });
  };


export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    res.json(players);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getPlayerWithID = async (req, res) => {
  try {
    const player = await Player.findById(req.params.PlayerId).exec();
    res.json(player);
  } catch (err) {
    res.status(500).send(err);
  }
};
  
export const UpdatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, { new: true })
        .then((player) => {
            res.json(player);
        })
        .catch((err) => {
            res.send(err);
        });
};

/*export const deletePlayer = (req, res) => {
  Player.remove({ _id: req.params.PlayerId}, (err, Player) => {
      if (err) {
          res.send(err);
      }
      res.json({ message: 'Successfully deleted player'});
  });
};*/

export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.deleteOne({ _id: req.params.PlayerId }).exec();
    if (player.deletedCount === 1) {
      res.json({ message: 'Successfully deleted player' });
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};





