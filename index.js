function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  var ranks = document.getElementsByClassName('ranked-list');
  
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  var result = document.querySelector('div#grand-node');
  
  while (result.children.length !== 0) {
    result = result.children[0];
  }
  
  return result;
}