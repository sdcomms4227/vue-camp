(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{554:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"뷰-라우터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-라우터"}},[t._v("#")]),t._v(" 뷰 라우터")]),t._v(" "),a("p",[t._v("뷰 라우터는 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리입니다.")]),t._v(" "),a("h2",{attrs:{id:"뷰-라우터-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-라우터-설치"}},[t._v("#")]),t._v(" 뷰 라우터 설치")]),t._v(" "),a("p",[t._v("프로젝트에 뷰 라우터를 설치하는 방법은 CDN 방식과 NPM 방식 2가지가 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"cdn-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn-방식"}},[t._v("#")]),t._v(" CDN 방식")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("2022년 2월 7일부터 Vue.js 라이브러리와 Vue Router 라이브러리의 CDN 주소는 Vue 3 기반의 라이브러리 코드를 들고 옵니다. 따라서, Vue 2로 학습하고 개발하시는 분들은 위와 같이 3.5.3 버전을 사용해 주세요 😃")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("위 변경 사항이 궁금하시면 다음 글을 참고해 보세요 😃 "),a("a",{attrs:{href:"https://joshua1988.github.io/web-development/vuejs/vue3-as-default/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 3, 기본 버전이 되다"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"npm-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-방식"}},[t._v("#")]),t._v(" NPM 방식")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-router\n")])])]),a("h2",{attrs:{id:"뷰-라우터-등록"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-라우터-등록"}},[t._v("#")]),t._v(" 뷰 라우터 등록")]),t._v(" "),a("p",[t._v("뷰 라우터를 설치하고 나면 아래 코드와 같이 라우터 인스턴스를 하나 생성하고 뷰 인스턴스에 등록합니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 라우터 인스턴스 생성")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 라우터 옵션")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 인스턴스에 라우터 인스턴스를 등록")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" router\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"뷰-라우터-옵션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-라우터-옵션"}},[t._v("#")]),t._v(" 뷰 라우터 옵션")]),t._v(" "),a("p",[t._v("위와 같이 라우터를 등록하고 나면 그 다음에 할 일은 라우터에 옵션을 정의하는 일입니다. 대부분의 SPA 앱에서는 아래와 같이 2개 옵션을 필수로 지정합니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("routes")]),t._v(" : 라우팅 할 URL과 컴포넌트 값 지정")]),t._v(" "),a("li",[a("strong",[t._v("mode")]),t._v(" : URL의 해쉬 값 제거 속성")])]),t._v(" "),a("p",[t._v("그럼 위 옵션으로 라우터를 정의해보겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LoginComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HomeComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("위 코드는 라우팅을 할 때 URL에 "),a("code",[t._v("#")]),t._v(" 값을 제거하고, URL 값이 "),a("code",[t._v("/login")]),t._v("과 "),a("code",[t._v("/home")]),t._v("일 때 각각 로그인 컴포넌트와 홈 컴포넌트를 뿌려줍니다.")]),t._v(" "),a("h2",{attrs:{id:"router-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-view"}},[t._v("#")]),t._v(" router-view")]),t._v(" "),a("p",[t._v("브라우저의 주소 창에서 URL이 변경되면, 앞에서 정의한 routes 속성에 따라 해당 컴포넌트가 화면에 뿌려집니다. 이 때 뿌려지는 지점이 템플릿의 "),a("code",[t._v("<router-view>")]),t._v("입니다.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- LoginComponent 또는 HomeComponent --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("앞에서 정의한 라우팅 옵션 기준으로 "),a("code",[t._v("/login")]),t._v("은 로그인 컴포넌트를 "),a("code",[t._v("/home")]),t._v("은 홈 컴포넌트를 화면에 표시합니다.")]),t._v(" "),a("h2",{attrs:{id:"router-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-link"}},[t._v("#")]),t._v(" router-link")]),t._v(" "),a("p",[t._v("일반적으로 웹 페이지에서 페이지 이동을 할 때는 사용자가 url을 다 쳐서 이동하지 않습니다. 이 때 화면에서 특정 링크를 클릭해서 페이지를 이동할 수 있게 해줘야 하는데 그게 바로 "),a("code",[t._v("<router-link>")]),t._v(" 입니다.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("이동할 URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("실제 코드 예시는 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("위 코드를 실행하면 화면에서는 "),a("code",[t._v("<a>")]),t._v(" 태그로 변형되서 나옵니다. 따라서 "),a("code",[t._v("<a>")]),t._v(" 태그를 클릭하면 "),a("code",[t._v("/login")]),t._v(" URL로 이동합니다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);