export const showUserList = async ({setUserData}: any) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const result = await response.json();
    setUserData(result.users);
  }
  catch(error){
    console.log('error', error);
  }
};

export const selectDepartmentColor = (value: string) => {
  switch(value) {
  case 'Marketing': return 'indianred';
  case 'Services' : return 'greenyellow';
  case 'Business Development': return 'cadetblue';
  case 'Support': return 'bisque';
  case 'Accounting': return 'blanchedalmond';
  case 'Sales': return 'orangered';
  default : return 'burlywood';
  }
};