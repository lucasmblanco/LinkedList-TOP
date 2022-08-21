class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
       let node = new Node(data);
       let currentNode; 

       if(!this.head){
            this.head = node
        } else {
            currentNode = this.head;

            while(currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node
        }
        this.size++
    }

    prepend(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    tail(){
        let currentNode;
        currentNode = this.head;

        if(this.size === 1){
            return null
        } else {
            while(currentNode.nextNode){
                currentNode = currentNode.nextNode
            }
        }
        return currentNode
    }

    at(index = 0){
        let currentNode;
        
        if(index > this.size || index < 1 ) {
            return null
        } else {
            currentNode = this.head;
            for(let i = 1; i < index; i++){
                currentNode = currentNode.nextNode
            }
        }
       
         return currentNode
    }

    pop(){
        let currentNode; 
        let previousNode;

        if(this.size <= 1){
            this.head = null;
            this.size = 0;
        } else {
            currentNode = this.head;
            while(currentNode.nextNode){
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                
            }
            previousNode.nextNode = null;
            this.size--
        }
        
    }

    contains(value){
        let currentNode;
        currentNode = this.head;
        
        if(currentNode.value !== value){
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            return currentNode.value === value
        } 
        return true
    }

    find(value){
        let currentNode;
        let index = 1; 
        currentNode = this.head;

        while(currentNode.value !== value && currentNode.nextNode) {
                currentNode = currentNode.nextNode;
                index+=1
        }
        return currentNode.value === value ? index : false
    }

    toString(){
        let currentNode = this.head;
        let nodeValueString = '';

        while(currentNode){
            nodeValueString += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }

        nodeValueString += "null"
        return nodeValueString
    }

    insertAt(data, index){
        let node = new Node(data)
        let previousNode;
        let currentNode = this.head;

        for(let i = 0; i < index; i++){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        previousNode.nextNode = node;
        node.nextNode = currentNode; 
        this.size++
        
    }

    removeAt(index){
        let currentNode = this.head;
        let previousNode;
        let nextNode; 

        for(let i = 1; i < index; i++){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            nextNode = currentNode.nextNode;
        }
        previousNode.nextNode = nextNode;
        this.size--
    }
}

class Node {
    constructor(value, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}