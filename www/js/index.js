(function(){
  
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    
    //Save value to the list
     document.getElementById("addBtn").addEventListener('click',function(e){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    },false)

    //Mark task as done and delete
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');     
      }
      store();
    },false)
    
    //Store data in local storage
    function store() {
      window.localStorage.myitems = list.innerHTML;
    }
    
    //getting data from local storage
    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {
        list.innerHTML = '';
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
  }
    
  )();

var app = {
    // Application Constructor
    initialize: function() {
        //DeviceReady 
       document.addEventListener('deviceready', this.devicereadyListener.bind(this), false);
    },
       devicereadyListener: function(){
            alert ("The application is loaded.")
        },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
    }
};

app.initialize();