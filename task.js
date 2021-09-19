var task = new Vue({
  el: '#task',
  data: {
  Hi:"Hello!",
  name: "Pingweiyi Yu.",
  inf2:"I am currently studying at Deakin University and my major is Network and Cloud computing.",
  inf:"I am a online student from China. ",
  image:"",
  }
});

var wtg = new Vue({
  el: '#wth',
  data: {
  weather:true ,
   },
  });


  
var aaa = new Vue({
    el: '#aaa',
    data: {
      name: 'User'
    },

    methods: {
      hi: function () {
        
        alert('Hello ' + this.name + '!')

      }
    }
  })
  
var bbb = new Vue({
    el: '#bbb',
    data: {
      msg: "Please enter your user ID"
    }
  })
  