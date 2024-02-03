// function cconstructFun(val) {
//   this.head = {
//     next: null,
//     data: val,
//   };
//   this.tail = this.head;
//   this.count = 0;

//   this.appendList = (data) => {
//     let createDatas = {
//       data: data,
//       next: null,
//     };
//     this.tail.next = createDatas;
//     this.tail = createDatas;
//     this.count = this.count + 1;
//   };

//   this.trversing = () => {
//     let data = [];
//     let currentNode = this.head;
//     for (let i = 0; i < this.count; i++) {
//       currentNode = currentNode.next;
//       data.push(currentNode.data);
//     }
//     return data;
//   };

//   this.deleteNode = (idx) => {
//     console.log("delete");
//     let lead = this.head;
//     for (let i = 0; i < this.count; i++) {
//       if (i == idx - 1) {
//         this.head.next = lead.next.next;
//         this.count = this.count - 1;
//       } else {
//         lead = this.head.next;
//       }
//     }
//   };
// }
// const cal = new cconstructFun(100);
// cal.appendList(100);
// cal.appendList(200);
// cal.appendList(300);
// cal.appendList(400);
// const show = cal.trversing();
// console.log("show", show);
// cal.deleteNode(2);
// // console.warn(cal);


function conustructfun (val) {
  this.head = {
    data: val,
    next: null
  }
  this.tail = this.head;
  this.count = 0;

  this.appendList = (data) => {
    let newData ={
      data: data,
      next :null
    }
    this.tail.next = newData;
    this.tail =  newData;
    this.count = this.count + 1;
  }

  this.show = () => {
    let currentNode = this.head;
    let storeData = [];
    for(let i=0; i<this.count;i++){
      currentNode = currentNode.next;
      storeData[i] = currentNode.data;
    }
    return storeData;
  }
}
const show = new conustructfun();
show.appendList(10)
show.appendList(20)
show.appendList(30)
console.log(show.show())