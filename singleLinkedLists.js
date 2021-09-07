class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	add(value) {
		let newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let currentNode = this.head;
			if (currentNode) {
				while (currentNode.next) {
					currentNode = currentNode.next;
				}
				currentNode.next = newNode;
			}
		}
		this.length++;
		return this;
	}
	remove() {
		if (!this.head) return null;
		else if (!this.head.next) {
			let data = this.head.value;
			this.head = null;
			this.length--;
			return data;
		} else {
			let currentNode = this.head;
			let holdingPointer;
			let data;
			if (currentNode) {
				while (currentNode.next) {
					holdingPointer = currentNode;
					currentNode = currentNode.next;
				}
				data = currentNode.value;
				holdingPointer.next = null;
				this.length--;
				return data;
			}
		}
	}
	search(value) {
		let currentNode = this.head;
		while (currentNode) {
			if (typeof value === "function") {
				if (value(currentNode.value) === true) return currentNode.value;
			}
			if (currentNode.value === value) return currentNode.value;
			else currentNode = currentNode.next;
		}
		return null;
	}
}
