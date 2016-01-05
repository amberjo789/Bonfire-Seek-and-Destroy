function destroyer(arr) {
  // Remove all the values
  var array = arguments[0];
  var args = Array.prototype.slice.call(arguments,1);
 
  var filtered = array.filter(
    function (value) {
      return args.indexOf(value)===-1;;
    }
    );
  //return filtered;
  return filtered;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
