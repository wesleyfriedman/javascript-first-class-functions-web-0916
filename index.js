function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction(){
  return function name(){
    console.log('Why so serious?')
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log('WAT?!?!')
  }
}
