/*!
 * Jumpshot linked-list that does not know at the time of the init its length
 */


const Node = function (value) {
  this.value = value;
  this.next = null;
};


/**
 * LinkedList constructor
 * @param {Array} arr If an array is provided, linked list will contain array elements. Zero element in the array will be first element in the list.
 */
class JumpshotLinkedList {
  constructor(arr) {
    this._first = null;
    this._last = null;
    this.head = null;
    if (arr && Array.isArray(arr)) {
      for (let i = arr.length - 1; i >= 0; i--) {
        this.add(arr[i]);
      }
    }
  }

  /**
   * Links a new node into LinkedList
   * @param {string}
   * @returns {LinkedNode}
   */
  add(value) {
    const newNode = new Node(value);
    if (this._first) {
      this._first.prev = newNode;
      newNode.next = this._first;
    } else {
      this._last = newNode;
    }
    this._first = newNode;
    return this;
  }

  /**
   * Get first element. If list is empty, returns null.
   */
  get first() {
    return this._first;
  }

  /**
   * Get last element. If list is empty, returns null.
   */
  get last() {
    return this._last;
  }

  /**
   * Get node from given position
   * @memberof LinkedList
   * @param {number} pos Zero-indexed position of node
   * @returns {Node} Returns reference to given node. If position is invalid, returns null.
   */
  findByPosition(pos) {
    if (pos == null) {
      return null;
    }
    if (pos >= this._count || pos < 0) {
      return null;
    }
    let node = this._first;
    if (pos === 0) return node;

    for (let i = 0; i < pos; i++) {
      if (node === null) {
        break;
      }
      node = node.next;
    }
    return node;
  }

  /**
   * Remove node from list
   * @memberof LinkedList
   * @param {Node} node Reference to node to be removed
   * @returns {Node} {LinkedList} Returns reference to this LinkedList object
   */
  removeNode(node) {
    if (!node && !(node instanceof (Node))) {
      return this;
    }
    const {
      prev,
    } = node;
    const {
      next,
    } = node;
    if (prev) {
      prev.next = next;
    } else {
      // removed node is first. Update this.first
      this._first = node.next;
      if (this._first) {
        this._first.prev = null;
      }
    }
    if (next) {
      next.prev = prev;
    } else {
      // removed node is last. Update this.last
      this._last = node.prev;
      if (this._last) {
        this._last.next = null;
      }
    }
    this._count--;
    return this;
  }

  /**
   * Returns the length of the list
   * @memberof LinkedList
   * @returns {Node} {LinkedList} Returns reference to this LinkedList object
   */
  countLength() {
    let cnt = 0;
    let node = this._first;
    if (!node && !(node instanceof (Node))) {
      return null;
    }
    while (node !== null) {
      node = node.next;
      cnt += 1;
    }
    this.length = cnt;
    return cnt;
  }

  removeMiddleItem() {
    if (!this.length || this.lenght === 0 || this.length === 1) {
      return null;
    }
    const middleNode = this.findByPosition(Math.floor(this.length * 0.5));
    this.removeNode(middleNode);
  }

  /**
   * Iterate through all elements in the list
   * @memberof LinkedList
   * @param {function} callback(value, node) Callback function
   * @returns {LinkedList} Returns reference to this LinkedList object
   */
  iterate(callback) {
    let node = this._first;
    while (node !== null) {
      callback(node.value, node);
      node = node.next;
    }
    return this;
  }

  /**
   * Returns list elements as array
   * @memberof LinkedList
   * @returns {Array} Returns list elements as array
   */
  toArray() {
    const arr = [];
    this.iterate((el) => {
      arr.push(el);
    });
    return arr;
  }
}

module.exports = JumpshotLinkedList;
