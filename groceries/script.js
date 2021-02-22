let groceries = []
groceries = prompt("Input a list of your groceries").split(',');
groceries = groceries.sort();
console.log(groceries);

groceries.forEach(function(grocery){
    console.log(grocery);
});