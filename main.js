// importing  decision tree module
var DecisionTree = require('decision-tree');

// Load IRIS flower  training data set.
var data = require( './flower.json' );
var training_set = data;

//splitting the data set into training set and test set
const split_number = 0.2*data.length;
//console.log(split_number);
var i=0;
var test_set = [];
while(i< split_number)
{
	var val = Math.floor((Math.random() * 1000) + 1);
	if((val<(training_set.length))&&(val>=0))
	{
		test_set.push(training_set[val]);
		training_set.splice(val,1);
		i++;
	}

}

//console.log(training_set.length);
//console.log(test_set.length);



//setup target class used for prediction
var class_name = "species";

//setup Features to be used by decision tree:
var features = ["sepal_length", "sepal_width","petal_length","petal_width"];

//creating decision tree and train module
 
 var dt = new DecisionTree(training_set, class_name, features);
 var predicted_class = dt.predict(
 {
   	sepal_length : 5.6,
   	sepal_width : 2.5,
   	petal_length : 3.4,
   	petal_width : 0.9
 });
  
console.log(`the predicted classification of the IRIS flower species is ${predicted_class}`);

// evaluate  model on a dataset
var accuracy = dt.evaluate(test_set);
console.log(`The accuracy of the prediction is ${accuracy}`);



