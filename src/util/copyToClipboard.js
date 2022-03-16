function fallbackCopyTextToClipboard(text, callback) {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    callback();
  } catch (error) {
    console.error("Error on copy");
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text, callback) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, callback);
    return;
  }
  navigator.clipboard.writeText(text).then(callback);
}

export default copyTextToClipboard;
