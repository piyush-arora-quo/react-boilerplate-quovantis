function initialize() {
  window.storage = window.localStorage;
}
function logger() {
  window.log = window.console.log;
}
initialize();
logger();
