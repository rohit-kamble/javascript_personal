function interfaceTest(test) {
    var name = test.name;
    var age = test.age;
    var ischecked = test.ischecked;
    if (ischecked) {
        return name + " ," + age;
    }
}
console.log(interfaceTest({ name: 'rohit', age: 30, ischecked: true }));
