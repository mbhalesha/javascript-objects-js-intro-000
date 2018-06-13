var meals = {};

var meals = new Object();

var meals = { breakfast: "oatmeal"};

meals.breakfast
meals['breakfast']

meals[firstMeal]
meals.firstMeal

var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt';

meal.snack
meals['snack']
meals.lunch

meals['second breakfast'] = 'bagel'

var sweetMeal = 'dessert'
meals[sweetMeal] = 'cake'
meals.dessert
meals[sweetMeal]

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

var playlist = {Britney Spears : ""};
