# node checklist 프로젝트

- 간단하게 할일 한가지만 입력하여 저장하고 필요에 따라 중요도를 선택 할 수 있게 하고 완료가 되면 완료되었다는 표식을 붙이는 형태

- localstorage DB 연동

## Nodejs + MongoDB 연동 Check List

- nodejs express와 mongoDB를 연동한 Todo List 프로젝트
- model : t_text String, t_date String, t_time String
- Todo List CRUD 구현

## client에서 데이터를 보내는 3가지 방법

1. query String 방식
   http://localhost:3000/?변수1=변수값&변수2=변수값
   let 변수1 = req.query.변수1
   let 변수2 = req.query.변수2
2. Path Varriable 방식 : URL처럼 값을 보내는 방법
   http://localhost:3000/값1/값2
   router.get("/:변수1/:변수2")
   let 변수1 = req.params.변수1
   let 변수2 = req.params.변수2
3. form에 input에 값을 담아서 post로 보내는 방법  
   form(method="POST")
   input(name="변수1")
   input(name="변수2")
   let 변수1 = req.body.변수1
   let 변수2 = req.body.변수2

# JS의 Query 선택자

- document.querySelector()
  : id가 지정된 tag를 선택할때 = 결과 1개
  document.querySelector("#id값")
  만약 tag와 class에 querySelector()를 적용하면
  조건에 맞는 첫번째 element만 가져올수 있다
  보통 본문에 해당하는 tag나 class가 1개만 있을때 사용하기도 한다
- document.querySelectAll()
  : class가 지정된 tag나 tag이름으로 선택할때 = 결과가 배열
  document.querySelectAll("tag이름")
  document.querySelectAll(".class값")
