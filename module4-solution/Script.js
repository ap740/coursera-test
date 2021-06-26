(function(window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0);
    var firstLetter = firstLetter.toLowerCase();
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[i]); // byeSpeaker.xxxx
    } else {
      helloSpeaker.speak(names[i]); // helloSpeaker.xxxx
    }
  }
})(window);

