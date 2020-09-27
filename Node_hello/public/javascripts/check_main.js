var todo_list = [];
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-save").addEventListener("click", function () {
    // let todo_input = document.querySelector("input"); // 가장먼저 선택되는 input태그
    let todo_input = document.querySelector(
      //section.todo_main에 form에 input의 name = "todo" 를 todo_input에 담기
      "section.todo_main form input[name='todo']"
    );
    // todo_input에 있는 값을 todo_value에 담기
    let todo_value = todo_input.value;
    // 만약 todo_value가 비어있으면 아래 코드 실행
    if (todo_value === "") {
      alert("할일을 입력해주세요 :)");
      // 가장 첫번째에 있는 input박스에 focus가 된다
      // document.querySelectorAll("input")[0].focus;
      // document
      //   .querySelector("section.todo_main form input[name='todo']")
      //   .focus();
      todo_input.focus();
      // 위의 코드는 전부 같은 코드!
      return false;
    }
  });

  // 체크박스가 체크되거나 해제될때 발생하는 이벤트
  document.querySelector("#checkbox").addEventListener("click", function () {
    let todo_check = document.querySelector("#checkbox");
    // 만약 todo_check의 checked가 true면 if문 아래 코드 실행
    if (todo_check.checked == true) {
      document.querySelector("#contents").style.textDecoration = "line-through";
      document.querySelector("#contents").style.fontStyle = "italic";
    } else {
      document.querySelector("#contents").style.textDecoration = "none";
      document.querySelector("#contents").style.fontStyle = "normal";
    }
  });

  // document.querySelector("#btn-update").addEventListener("click", function () {
  //   let todo_delete = document.querySelector("#btn-update");
  //   let delete_value = todo_delete.value;

  //   if (delete_value === "수정") {
  //     document.location.href = "/update";
  //     alert("삭제하시겠습니까?");
  //   }
  // });
});
