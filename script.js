const defaults = {
  name: "민지",
  message: "너는 이미 충분히 잘하고 있어. 오늘도 네 편이 여기 있어.",
};

const displayName = document.querySelector("#displayName");
const displayMessage = document.querySelector("#displayMessage");
const nameInput = document.querySelector("#nameInput");
const messageInput = document.querySelector("#messageInput");
const copyLinkButton = document.querySelector("#copyLinkButton");
const copyStatus = document.querySelector("#copyStatus");

const params = new URLSearchParams(window.location.search);

function valueFromUrl(key) {
  const value = params.get(key);
  return value && value.trim() ? value.trim() : defaults[key];
}

function render() {
  const name = nameInput.value.trim() || defaults.name;
  const message = messageInput.value.trim() || defaults.message;

  displayName.textContent = name;
  displayMessage.textContent = message;

  const url = new URL(window.location.href);
  url.searchParams.set("name", name);
  url.searchParams.set("message", message);
  window.history.replaceState({}, "", url);
}

async function copyShareLink() {
  render();

  try {
    await navigator.clipboard.writeText(window.location.href);
    copyStatus.textContent = "지금 보이는 이름과 문구가 담긴 주소를 복사했어요.";
  } catch {
    copyStatus.textContent = "주소창의 링크를 복사하면 지금 문구 그대로 공유돼요.";
  }
}

nameInput.value = valueFromUrl("name");
messageInput.value = valueFromUrl("message");
render();

nameInput.addEventListener("input", render);
messageInput.addEventListener("input", render);
copyLinkButton.addEventListener("click", copyShareLink);
