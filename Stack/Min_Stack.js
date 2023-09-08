/**
 * Problem: Min Stack (LeetCode #155)
 * 
 * Problem Description:
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant 
 * time.
 * 
 * - push(x) -- Push element x onto the stack.
 * - pop() -- Removes the element on the top of the stack.
 * - top() -- Get the top element.
 * - getMin() -- Retrieve the minimum element in the stack.
 * 
 * Example:
 * 
 * const minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // Returns -3
 * minStack.pop();
 * minStack.top();    // Returns 0
 * minStack.getMin(); // Returns -2
 */

var MinStack = function() {
    this.stack=[]
    this.min=[]
};


MinStack.prototype.push = function(val) {
    if(this.min.length==0 || this.min[this.min.length-1] >= val) this.min.push(val)
    this.stack.push(val)
};


MinStack.prototype.pop = function() {
     let val=this.stack.pop()
     if(val==this.min[this.min.length-1]) this.min.pop()
};


MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};
