//Did you know division that changes at given interval.
var facts = [
    'Every 2 seconds someone needs blood.',
    'Donated blood expires in 42 days.',
    'Donated platelets expire in 5 days.', //platelets = trombosit
    'One donation can potentially save up to 3 lives.',
    'On average, 45 units of blood are used for trauma-related injuries.',
    'Voluntary donors account for 100% of blood supplies in 57 countries.', 
    'Blood and platelets cannot be manufactured; they can only come from volunteer donors.', 
    'Around 112.5 million blood donations are collected globally every year.',
];
//chooses random number for selecting array index which will be text's array number
var shuffleTitle = function() {
  var index = Math.round(Math.random() * (facts.length - 1));
  document.getElementById('didyouknow').innerHTML = facts[index];
}
// Every 2 seconds "Did you know" text changes.
setInterval(shuffleTitle, 2000);

