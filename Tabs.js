let tabs = function() {
  let button = document.querySelectorAll('.button');
  let tab = document.querySelectorAll('.tab');

  function addClassItem(array, i){
    array.forEach( item => {
      item.forEach( i => {
        i.classList.remove('is-active');
      });
      item[i].classList.add('is-active');
    })
  }

  function selectItem(array){
    array.forEach( (item, index) => {
      item.addEventListener('click', function(){
        addClassItem([button, tab], index)
      })
    });
  }

  selectItem(button);
};

tabs();
