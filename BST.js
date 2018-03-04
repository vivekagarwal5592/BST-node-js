function BST(value){

	this.value = value
	this.left = null
	this.right = null
}

BST.prototype.addNode = function addNode(value){

	if(value <=this.value){
		if(this.left == null){
			this.left =  new BST(value)
		}
		else{
			this.left.addNode(value)
		}
	}
	else if(value>this.value){
		if(this.right == null){
			this.right = new BST(value)
		}
		else{
			this.right.addNode(value)
		}
	}
}

BST.prototype.searchNode =  function searchNode(value) {
	if(this.value == value){
		console.log("value found")
	}
	if(this.left !=null){
		if(value <=this.left.value){
			this.left.searchNode(value)
		}
	}

	else if(this.right !=null){
		if (value>this.right.value){
			this.right.searchNode(Node)
		}
	}

	else{
		console.log("Value not found")
	}

}


BST.prototype.inorder =function inorder () {

	if(this == null)
		return

	if(this.left !=null){
		this.left.inorder()
	}

	console.log(this.value)

	if(this.right !=null){
		this.right.inorder()
	}
}


BST.prototype.postorder =function postorder () {

	if(this == null)
		return

	if(this.left !=null){
		this.left.postorder()
	}

	if(this.right !=null){
		this.right.postorder()
	}

	console.log(this.value)
}

BST.prototype.preorder =function preorder () {

	if(this == null)
		return

	console.log(this.value)

	
	if(this.left !=null){
		this.left.preorder()
	}

	

	if(this.right !=null){
		this.right.preorder()
	}
}


let root = new BST(2)

root.addNode(5)
root.addNode(7)
root.addNode(1)

console.log("Pre order:")
root.preorder()

console.log("Post order:")
root.postorder()

console.log("In order:")
root.inorder()

