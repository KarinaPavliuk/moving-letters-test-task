const textInput = document.querySelector('.text-input');
const applyButton = document.querySelector('.apply-button');
const displayText = document.querySelector('.display-text');

applyButton.addEventListener('click', function () {
  const text = textInput.value.trim();
  if (text !== '') {
    displayText.textContent = text;
  }
});

displayText.addEventListener('mousedown', startDragging);

function startDragging(event) {
  const initialX = event.clientX;
  const initialY = event.clientY;
  const initialLeft = displayText.offsetLeft;
  const initialTop = displayText.offsetTop;

  document.addEventListener('mousemove', dragElement);
  document.addEventListener('mouseup', stopDragging);

  function dragElement(event) {
    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    const newLeft = initialLeft + deltaX;
    const newTop = initialTop + deltaY;

    displayText.style.left = newLeft + 'px';
    displayText.style.top = newTop + 'px';
  }

  function stopDragging() {
    document.removeEventListener('mousemove', dragElement);
    document.removeEventListener('mouseup', stopDragging);
  }
}
