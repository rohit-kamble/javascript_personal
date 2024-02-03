
var person1 = {
    fullName: function() {
        var data = 'rohit';
        // console.log("this",this);
      return this.person2.firstName + " "+this.person.middle+" " + this.person2.lastName;
    },
    data :'SNJNS',

}
  var dat= 'sxmix';
  var person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  var person = {
      middle: 'jonny',
  }

  var x = person1.fullName.call({person,person2}); 
  console.log('person1',person1.data);