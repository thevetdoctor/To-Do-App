/* This script is designed to create a list of tasks as created by the user.*/

/* The function below is intended to create a new (li) element for every new task added*/
(function(){

  var todo = document.querySelector( '#todolist' ),
      form = document.querySelector( 'form' ),
      field = document.querySelector( '#newitem' );
    
    /* Here, an event listener is added to the form and this brings about a new task on submission of the form*/
    
  form.addEventListener( 'submit', function( ev ) {
    todo.innerHTML += '<li>' + field.value + '</li>';
    field.value = '';
    field.focus();
    storestate();
    ev.preventDefault();
  }, false);

/* Another event listener here deletes any task on  clicking of the specific task twice. */

  todo.addEventListener( 'click', function( ev ) {
    var t = ev.target;
    if ( t.tagName === 'LI' ) {
      if ( t.classList.contains( 'done' ) ) {
        t.parentNode.removeChild( t );
      } else {  
        t.classList.add( 'done' );
      }
      storestate();
    };
    ev.preventDefault();
  }, false);

/* The retrieve state is applied to call forth the last stored list of tasks from local storage.*/

  document.addEventListener( 'DOMContentLoaded', retrievestate, false );

/* storestate and retrievestate are meant to retain the last stored list into the local storage, and return it on refresh*/
  
  function storestate() {
    localStorage.todolist = todo.innerHTML;
  };

  function retrievestate() {
    if ( localStorage.todolist ) {
      todo.innerHTML = localStorage.todolist;
    }
  };

})();
