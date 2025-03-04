if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (searchElement, fromIndex) {
      var fromIndex = fromIndex || 0;
      if (fromIndex < 0) {
        fromIndex = this.length + fromIndex;
      }
      for (var i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return true;
        }
      }
      return false;
    };
  }
  
  // Example usage
  var arr = [1, 2, 3, 4, 5];
  console.log(arr.customIncludes(3)); // Output: true
  console.log(arr.customIncludes(6)); // Output: false
  