function scuberGreetingForFeet(value){
  // Write your code here!
  if(value <= 400){
    return 'This one is on me!';
  }else if(value <= 2500){
    return 'I will gladly take your thirty bucks.';
  }else{
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city === 'NYC'){
    return 'Ok, sounds good.';
  }else{
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';;
    case 'not as generous':
      return 'Thank you.'; 
    default:
      return 'Bye.'; 
  }
}