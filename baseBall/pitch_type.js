/* 
Before creating the model, you need to prepare the training and test data. Create the file pitch_type.js in the baseball/ dir, 
and copy the following code into it. 
This code loads training and test data using the tf.data.csv API. It also normalizes the data 
(which is always recommended) using a min-max normalization scale.
*/
import {ts} from '@tensorflow/tfjs-node-gpu';
import {fs} from 'fs';

const normalize = (value, min, max) => {
    // check if min / max value have been assigned
    if(min === undefined || max === undefined)  {
        // return value were no min max is set
        return value;

    }
    return (value - min) / (max - min);
}

// data can be loaded from URLs or local file paths when running in Node.js.
// const training_data_file =  fs.readFile('/csv/pitch_type_test_data.csv', (error) => {
//     if(error) {
//     console.log(error);
//     return;
//     }
    
//    training_data_file();

// })

const TRAIN_DATA_PATH =
'https://storage.googleapis.com/mlb-pitch-data/pitch_type_training_data.csv';
const TEST_DATA_PATH =    'https://storage.googleapis.com/mlb-pitch-data/pitch_type_test_data.csv';


