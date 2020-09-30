
  // <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.

  // 컴포넌트 생성
  var app = new Vue({
    el: '#app',
    data: {
      message: 'This is a parent component'
    }
  });

  // 실습 #1 - `todo-footer` 컴포넌트 전역 등록
  Vue.component('todo-footer', {// Vue.component(뷰 컴포넌트)는 new Vue() (뷰의 선언) 보다는 상단에 와야 동작함
    template: '<div style="color:green"> 전역 컴포넌트가 등록! </div>'
  });

  new Vue({
    el: '#app2'
  });

  var local = {
    template: '<h1 style="color:red"> 지역 컴포넌트가 등록! </h1>'
  };

  new Vue({
    el:'#app3',
    components: {
      'todo-list': local
    }
  });
  // 실습 #2 - `todo-list` 컴포넌트 지역 등록
  /*var local = new Vue({
    el: '#app3',
    template: '<h1 style="color:red"> 지역 컴포넌트가 등록! </h1>',
    components:{
      'todo-list': local
    }
  });*/
