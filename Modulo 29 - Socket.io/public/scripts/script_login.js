// On "Login" screen
document.querySelector("#join-room-btn").addEventListener("click", () => {
  let username = document.querySelector("#username").value;
  localStorage.setItem("username", username);

  let chat_room_choosed = document.querySelector("#chat_room").value;
  switch (chat_room_choosed) {
    case "chat":
      setTimeout(() => {
        (window.location.href = "http://localhost:3000/chat_room.html"), 2000;
      });
      break;
    case "study":
      setTimeout(() => {
        (window.location.href = "http://localhost:3000/study_room.html"), 2000;
      });
      break;
    case "fun":
      setTimeout(() => {
        (window.location.href = "http://localhost:3000/fun_room.html"), 2000;
      });
      break;
  }
});
