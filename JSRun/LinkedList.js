class LinkedList{
  constructor(){
    this.head=null
this.tail=null
  }
  
  append(value){
    const newNode={value:value,next:null}
if(this.tail){
  this.tail.next=newNode;
}
this.tail=newNode;
if(!this.head){
  this.head=newNode
}
  }
  delete(value){
    if(!this.head){
      return null
    }
    while(this.head && this.head.value===value){
      this.head=this.head.next
    }
    let curNode=this.head
    while(curNode.next){
      if(curNode.next.value===value){
        curNode.next=curNode.next.next
      }else{
        curNode=curNode.next
      }
    }
    if(this.tail.value===value){
      this.tail=curNode;
    }
  }
  find(value){
    if(!this.head){
      return null;
    }
    let curNode=this.head
    while(curNode){
      if(curNode.value===value){
        return curNode;
      }
      curNode=curNode.next
    }
    return null
  }
  prepend(value){
    const newNode={value:value,next:this.head}
    this.head=newNode;
    if(!this.tail){
      this.tail=newNode;
    }
  }
  insertAfter(value,afterValue){
    const existingNode=this.find(afterValue);
    if(existingNode){
      const newNode={value:value,next:existingNode.next}
      existingNode.next=newNode
    }
  }
  toArray(){
    const ele=[]
    let curNode=this.head;
    while(curNode){
      ele.push(curNode)
      curNode=curNode.next;
    }
    return ele;
  }
}

const ll1=new LinkedList();
ll1.append(1)
ll1.append('pramod')
ll1.append('hello')
ll1.append(false)
ll1.append(8.95)
console.log(ll1.toArray())
ll1.prepend('hi')
ll1.delete('hello')
ll1.insertAfter(2,1)
console.log(ll1.find(2))
console.log(ll1.toArray())