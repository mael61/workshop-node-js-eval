exports.run = function(input) {
  var sortie =[]
  for (var i = 0; i < input.length; i++) {
  if (input[i] <= 6){
    sortie.push(input[i])
    }
  }
  return sortie.toString()
}
