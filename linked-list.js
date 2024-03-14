/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  traverse() {
      let currentNode = this.head;
      while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
      }
  }

  find(val) {
      let currentNode = this.head;
      while(currentNode) {
          if(currentNode.val === val) return true;
          currentNode = currentNode.next;
      }
      return false;
  }

  append(val) {
      const newNode = new Node(val);        
      if(!this.head) {
          this.head = newNode;
          this.tail = newNode;
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length = this.length += 1;
  }

  /** push(val): add new value to end of list. */

  push(val) {
      const newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
          this.length = 1;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
          this.length = this.length += 1;            
      }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head = newNode;           
      }
      this.length = this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
      let currentNode = this.head;
      
      if(currentNode.next == null) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return currentNode.val;
      }

      while(currentNode.next != this.tail) {          
          currentNode = currentNode.next;
      }
      let ret = currentNode.next;
      this.tail = currentNode;
      currentNode.next = null;  
      this.length = this.length -= 1;
      return ret.val;    
  }

  /** shift(): return & remove first item. */

  shift() {
      let currentNode = this.head;
      let ret = currentNode;
      if(currentNode == this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return currentNode.val;
      }
      currentNode = currentNode.next;
      this.head = currentNode;      
      this.length = this.length -= 1;

      return ret.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
      let c = this.head;
      let count = 0;

      while (c != null && count != idx) {
          count += 1;
          c = c.next;
      }

      return c.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
      let c = this.head;
      let count = 0;

      while (c != null && count != idx) {
          count += 1;
          c = c.next;
      }
      c.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
      if(idx == 0) return this.unshift(val);
      if(idx == this.length) {
        return this.push(val);
      }
      let c = this.head;
      let count = 0;

      // Get previous entry
      while (c != null && count != idx-1) {
          count += 1;
          c = c.next;
      }

      let newNode = new Node(val);
      newNode.next = c.next;
      c.next = newNode; 
      this.length += 1;   
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
      if(idx == 0) return this.shift();
      if(idx == this.length-1) return this.pop();

      let c = this.head;
      let count = 0;

      // Get previous entry
      while (c != null && count != idx-1) {
          count += 1;
          c = c.next;
      }
      
      let ret = c.next;
      c.next = c.next.next;
      this.length -= 1;
      return ret;        
  }

  /** average(): return an average of all values in the list */

  average() {
      if(this.head == null)   return 0;
      let currentNode = this.head;
      let count = currentNode.val;
      while(currentNode.next != null) {
          currentNode = currentNode.next;
          count += currentNode.val;            
      }
      return count / this.length;
  }
}

//module.exports = LinkedList;