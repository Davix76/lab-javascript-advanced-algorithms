function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function() {
  // return this.stackControl.length < 1 ? true : false;
  return this.stackControl.length < 1;
};

StackDataStructure.prototype.canPush = function() {
  return this.MAX_SIZE > this.stackControl.length;
  // if (this.MAX_SIZE > this.stackControl.length){
  //   return true;
  // } else {
  //   return false;
  // }
};

StackDataStructure.prototype.push = function(element) {
  this.stackControl.push(element);
  if (this.MAX_SIZE > this.stackControl.length) {
    return this.stackControl;
  } else {
    return ("Stack Overflow");
  }
};

StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length === 0) {
    return "Stack Underflow";
  } else {
    return this.stackControl.pop();
  }
};
