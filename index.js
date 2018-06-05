function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClass('target')[0];
}

function increaseRankBy(n) {
  var ranks = document.getElementsByClass('ranked-list');
  
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  var curr = document.querySelector('div#grand-node');
  var next;
  
  do {
    next = curr.children[0];
  } while (next !== undefined);
  
  return curr;
}