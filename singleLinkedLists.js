// _________________Class Node___________________

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
//_______________________Class Single Linked List________________

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

//_______________ Method Add________________
//________Insert a new node in the last position ____________

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

//_______________ Method AddFirst________________
//________Insert a new node in the first position ____________

	addFirst(value){
		let newNode = new Node(value)
		let currentNode = this.head;
		newNode.next = currentNode;
		this.head = newNode;
		this.length++;
		return this
	}
	//_______________ Method addAfter________________
	//________Insert a new node after the indicated position ____________
	addAfter(value, position){
		if(!this.head) return this.add(value);
		if(this.length < position) return 'position does not exist';
		if(this.length === position) return this.add(value);
		let newNode = new Node(value);
		let aux, count = 1;
		let current = this.head;
		while(count <= position){
			current = current.next
			count++
		}
		aux = current.next;
		newNode.next = aux;
		current.next = newNode;
		this.length++;
		return this;
	}

	//_______________ Method addAfter________________
	//________Insert a new node in order ____________

	addInOrder(value){
		if(!this.head) return this.add(value);
		if(!this.head.next || this.head.value > value) {
			if( this.head.value < value)
			return this.add(value);
			else
			return this.addFirst(value);
			}
		let count = 1;
		let current = this.head;
		if(current.value < value)
			while(current.next){
			if(current.next.value < value){
				current = current.next
				count++
			}else{
				return this.addAfter(value,count)
			}
			}
		if(!current.next){
			return this.add(value);
		}
			
	}

//_______________ Method Remove________________
//___________This method removes the last node and returns it____________

	remove() {
		if(!this.head) return null;
		let currentNode = this.head;
		let data= this.head.value;
		let holdingPointer;
		if (!this.head.next){
			this.head = null;
			this.length--;
			return data;
		}
		if (currentNode){
			while(currentNode.next){
				holdingPointer = currentNode;
				currentNode = currentNode.next;
			}
			data = currentNode.value
			holdingPointer.next = null;
		}
		this.length--;
		return data;
	}

//____________________Method Search____________
//______This method returns true if it finds the value; otherwise it returns false____________

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

	reverse(){
		let prev = null, next=null;
		let currentNode;
		if(!this.head) return null;
		currentNode = this.head;
		while(currentNode){
			next = currentNode.next;
			currentNode.next = prev;
			prev = currentNode;
			currentNode = next;
		}
		this.head = prev;
		return this;
	}  

	addInPos(value, position){
		if(!this.head) return false;
	
		if(position >= this.size()){
		  this.add(value);
		  return true;
		}
		
		const newNode = new Node(value);
		const firstPointer = this.getTheIndex(position - 1)
		const holdingPinter = firstPointer.next;
		firstPointer.next = newNode;
		newNode.next = holdingPinter;
		this.length++;

		return true;
	}  

	getTheIndex(index){
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++
		}
	   return currentNode;
	}

	size(){
		if(!this.head) return 0;
		if(!this.head.next) return 1;
		let currentNode = this.head, count = 1;
		while(currentNode.next){
		   currentNode = currentNode.next;
		   count++;
		}
		return count;
	}
}



//_______________________________Tests_________________

const list = new LinkedList();
console.log('A1',list.add('n1'))
console.log('A2',list.add('n2'))
console.log('A3',list.add('n3'))
console.log('A4',list.add('n4'))
console.log('L1',list)
console.log('Rm',list.remove())
console.log('Rm',list.remove())
console.log('Rm',list.remove())
console.log('Rm',list.remove())
console.log('Rm',list.remove())
console.log('L2',list)
console.log('S1',list.search("n1"))
console.log('S2',list.search("n2"))
console.log('S3',list.search("n3"))
console.log('S4',list.search("n4"))
console.log('L3',list)
list.addInOrder(5);
list.addInOrder(2);
list.addInOrder(6);
list.addInOrder(1);
list.addInOrder(7);
console.log('L3',list)
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.addFirst(3);
linkedList.addInOrder(2);
linkedList.addInPos(7,1);
linkedList.addAfter(8,1);

var revertedLinkedList = linkedList.reverse();
console.log(revertedLinkedList.head.value, "Deberia ser = 1");
console.log(revertedLinkedList.head.next.value, "Deberia ser = 3");
console.log(revertedLinkedList.head.next.next.value, "Deberia ser = 8");
console.log(revertedLinkedList.head.next.next.next.value, "Deberia ser = 7");
console.log(revertedLinkedList.head.next.next.next.next.value, "Deberia ser = 2");
console.log(revertedLinkedList.remove());
console.log(revertedLinkedList.remove());
console.log(revertedLinkedList.remove());