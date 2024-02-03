const stdin = process.openStdin()

process.stdout.write('Enter number: ')

stdin.addListener('data', text => {
  const name = Math.ceil(Math.random() * 10);
  if (name == text){
    console.log('Your number match: ' + name)
  }
  

  stdin.pause() // stop reading
})