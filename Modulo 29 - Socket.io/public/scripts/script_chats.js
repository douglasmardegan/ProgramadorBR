// On "Chat room" screen
let room = window.location.pathname.replaceAll("/", "");
const socket = io(`http://localhost:3000/${room}`);

// Receiving message emitted from backend to frontend
socket.on("update_messages", (messages) => {
  updateMessagesOnScreen(messages);
});

function updateMessagesOnScreen(messages) {
  const display_messages = document.querySelector(".display-messages");

  let list_messages = "<ul>";
  messages.forEach((message) => {
    list_messages += `<li>${message.username}: ${message.msg}</li>`;
  });
  list_messages += "</ul>";

  display_messages.innerHTML = list_messages;
}

document.addEventListener("DOMContentLoaded", () => {
  const messageForm = document.querySelector("#message_form");
  messageForm.addEventListener("submit", (event) => {
    // 'preventDefault' removes the default behavior of a given event, in this case form submission
    event.preventDefault();

    // This is similar to using document.querySelector("#message").value to take the content typed in the input
    const message = document.forms["message_form_name"]["msg"].value;

    if (message !== "" ) {
      
      const username = localStorage.getItem("username");

      // Sending the message to the backend
      socket.emit("new_message", { username: username, msg: message });

      // Clearing the input field after clicking the "submit" button
      document.forms["message_form_name"]["msg"].value = "";
    } else {
      alert("The input field is empty! Please try again.");
    }
  });
});

document.querySelector("#leave-room-btn").addEventListener("click", () => {
  setTimeout(() => {
    localStorage.removeItem("username");

    window.location.href = "http://localhost:3000/index.html";
  }, 1500);
});
