function formatText(event, command) {
  event.preventDefault();
  
  // Only apply formatting for text selected
  const selection = window.getSelection();
  if (!selection.isCollapsed) {
    document.execCommand(command, false, null);
  }
}

let currentColor = '#000000'; // Defult color black

// Pass defult color on first load
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("colorPreview").style.backgroundColor = currentColor;
});

// Color picker triger
function triggerColorPicker() {
  document.getElementById('ColorPicker').click();
}

// Color changer, Previewer
function changeColor(color) {
  document.execCommand("foreColor", false, color);
  document.getElementById("colorPreview").style.backgroundColor = color;
}

// Appling whole document
function alignText(alignment) {
  document.getElementById("editor").style.textAlign = alignment;
}

function undo() {
  document.execCommand('undo', false, null);
}

function redo() {
  document.execCommand('redo', false, null);
}