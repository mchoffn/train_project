import TrainData from './modules/TrainData.js'
import TrainMoving from './modules/TrainMoving.js'
import Trainmoving2 from './modules/Trainmoving2.js'
import Toggle from './modules/toggle.js';

let trainData = new TrainData;
trainData.getTrainTime();

new TrainMoving;
new Trainmoving2;
new Toggle;