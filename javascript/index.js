const $modalContainer = document.querySelector(".modal-container");

const showModal = ($modalContent) => {
  $modalContainer.append($modalContent);
  $modalContainer.classList.remove("hide");
};

const makeModalContent = (innerHTMLString) => {
  const $modalContent = document.createElement("div");

  $modalContent.classList.add("modal-content");

  $modalContent.innerHTML = innerHTMLString;

  $modalContent.querySelector("button").addEventListener("click", () => {
    const $modalContainer = document.querySelector(".modal-container");

    $modalContainer?.classList?.add?.("hide");
    if ($modalContainer.innerHTML) {
      $modalContainer.innerHTML = "";
    }
  });

  return $modalContent;
};

const liList = document.querySelectorAll("li");

liList.forEach(($li) => {
  $li.addEventListener("click", () => {
    const itemText = $li.innerText;
    // alert(`you clicked ${$li.innerText}`);
    showModal(
      makeModalContent(
        `
             <h1>${itemText}</h1>
             <button>Close</button>
        `
      )
    );
  });
});
