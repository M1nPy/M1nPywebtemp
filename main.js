
var app1=new Vue({
    el:".vue-first",
    data:{
        nofo:true
    }
})

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

var app2=new Vue({
    el:".vue-second",
    data:{
        top_show:false,
    },
    methods: {
        handleScroll: function (evt, el) {
        if (window.scrollY > 50) {
            el.setAttribute(
              'style',
              'animation: headerbox 1s ease-out forwards'
            )
        }
        console.log(window.scrollY);
        if(window.scrollY == 0) {
            $('.navbar-collapse').collapse('hide');
            el.setAttribute(
                'style',
                'animation: headerboxback 1s ease-in forwards'
            )
        }
        }
    }
})

setTimeout(()=>(app1.nofo=false),4404);
setTimeout(()=>(app2.top_show=true),4404);
