var result = "";

var myString = "مهلا";

var converted = toBinary(myString);
var encoded = btoa(converted);
console.log(encoded); // OCY5JjomOyY8Jj4mPyY=
var decoded = atob(encoded);
var original = fromBinary(decoded);
console.log(original);

function toBinary(string) {
  var codeUnits = new Uint16Array(string.length);
  for (var i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  var charCodes = new Uint8Array(codeUnits.buffer);
  var result = "";
  for (var i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

function fromBinary(binary) {
  var bytes = new Uint8Array(binary.length);
  for (var i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  var charCodes = new Uint16Array(bytes.buffer);
  var result = "";
  for (var i = 0; i < charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}
