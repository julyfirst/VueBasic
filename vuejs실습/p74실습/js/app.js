// #1
// sibling-component를 이름으로 하는 새로운 컴포넌트를 아래에 등록하기
// options: template, props

Vue.component('sibling-component',{
  props:['sibling'],
  template: '<p>{{ sibling }}</p>'
});

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',
    // #2
    // data 속성을 1개 더 지정하고 (ex : anotherMessage) 임의의 문자열 값으로 대입해 보기
    // 새로 지정한 data 속성은 위 sibling-component에 props로 전달함
    anotherMessage: '전달되라ㅡㅡ'
  }


});
