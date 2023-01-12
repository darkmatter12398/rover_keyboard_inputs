# Description
A program that allows you to use keyboard inputs to control the rover's movement. 

# How to use
1. Install [Node.js](https://nodejs.org/en/download/)
2. Use VScode, or any type of terminal, and run this command:
```bash
node server.js
```
3. Go to your local browser, and type in "localhost:3000" in the URL

# Functionality
## Arrow keys
You can control the direction of the rover depending on how you use the arrow keys. If you press the up arrow key, the rover will go forward, and vice verca for the corresponding arrow keys. A picture will display depending on where the rover is going
There is also combination keys, which allows the rover to go diagonally, depending on the 2 keys you combine (however, you can't combine up and down); so if you were to press the up arrow key and left arrow key at the same time, then the rover would go diagonally to the left (this can be done with the down key as well)

## Acceleration
You can also accelerate the rover at a given direction. You have to give the rover a certain direction, and hold the spacebar button to start accelerating at that direction. If there is no direction that the rover is going at, the rover will decelerate until it's velocity hits 0. The velocity range is 0-100km/h.

## Toggle keyboard
There is a toggle keyboard button in which if you press it, will disable/enable the keyboard depending on which state it is in. If it's clicked while the keyboard is usable, then you won't be able to moving the rover


