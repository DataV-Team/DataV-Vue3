export function copy(str: string) {
  const inputEle = document.createElement('input');
  inputEle.value = str;

  document.body.appendChild(inputEle);
  inputEle.select();
  document.execCommand('copy');

  inputEle.parentNode.removeChild(inputEle);
}
