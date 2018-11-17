# nomad-beginner-js
초보자를 위한 바닐라 JavaScript - 노마드코더 정리

## Why JS

프론트엔드의 유일한 언어

## Super Powers of JS

- https://socket.io/demos/chat/ (실시간채팅)
- https://play.google.com/store/apps/details?id=co.nomadcoders.nomadmovies&hl=ko (네이티브앱)
- https://impactjs.com/ (게임)
- https://threejs.org/ (3D 그래픽)

## ES5, ES6 ESWTF?

ECMAScript - 설명문

## 변수

Create -> Initialize -> Use

## let, const, var

let : 초기화 후 변할 수 있음, 
const: 상수

## Data Types on JS

주석 - // , /**/

변수 선언시에는 기본 const로!

```js
//String
const what = "evan"
```

```js
// Boolean
const wat1 = false
const wat2 = true
```

```js
// Number
const wat = 333
```

## Organizing Data with Arrays

Array, Object

Array : 데이터를 저장하는 곳. 리스트 같이 저장

```js
const dayOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
console.log(dayOfWeek) // ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
console.log(dayOfWeek[2]) // Wed
```

## Organizing Data with Objects

```js
const nicoInfo = {
	name: "Nico",
	age: 33,
	gender: "Male",
	isHandsome: true,
	favMovie: ["Along the gods","LOTR", "Oldboy"],
	favFood: [{name:"Kimchi",fatty:false}, 
	{name: "Cheese burger", fatty: true}]
}

console.log(nicoInfo)
```

데이터를 정렬하는 두가지 방법 : Array, Object
리스트 데이터 : Array
데이터를 합쳐서 만들어야 한다면 : Object

## Your first JS Function

```js
const nicoInfo = {
	name: "Nico",
	age: 33,
	gender: "Male",
	isHandsome: true
}

console.log(nicoInfo, console)
```

내장함수 : console, alert 

```js
function sayHello(name, age) {
  console.log("Hello!", name, "you have", age, " years of age.")
}

sayHello("Nicolas", 15)
```