//New Typescript Function
function log(message: string): void {
  let testLog = "Hello There!";
  if (typeof window.console !=='undefined') {
    window.console.log(message);
  }
}