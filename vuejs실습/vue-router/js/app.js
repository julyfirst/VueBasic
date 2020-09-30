
// Main, Login 컴포넌트 정의
var Main = { template: '<h1 style="color:red">main</h1>'};
var Login = { template: '<h1 style="color:blue">login</h1>'};

// 각 URL에 맞춰 표시할 컴포넌트 지정
var routes = [
  { path: '/main', component: Main},
  { path: '/login', component: Login}
];

// 뷰 라우터 정의
var router = new VueRouter({
  
  routes
});

// 뷰 인스턴스에 라우터 추가
var app = new Vue({
  router
}).$mount('#app');
