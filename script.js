//Android Button
document.getElementById("android").addEventListener("click", androidBtn);

function androidBtn() {
  document.getElementById("apple-vs-android").src = "images/Android-Logo.jpg";
  document.getElementById("exp-deb").innerHTML = `Android Home`;
  document.getElementById("exp-deb").style.backgroundColor = `#a4c93b`;
  document.getElementById("exp-deb").href = `https://android.com.`;
  document.getElementById("HTML").style.backgroundColor = `#a4c93b`;
  document.getElementById("HTML").style.fontFamily = `'Roboto', sans-serif`;
  document.getElementById("android").classList.remove("active");
}

//Apple Button
document.getElementById("apple").addEventListener("click", appleBtn);

function appleBtn() {
  document.getElementById("apple-vs-android").src = "images/Apple-Logo.jpg";
  document.getElementById("exp-deb").innerHTML = `Apple Home`;
  document.getElementById("exp-deb").style.backgroundColor = `#b6bcca`;
  document.getElementById("exp-deb").href = `https://apple.com/`;
  document.getElementById("HTML").style.backgroundColor = `#b6bcca`;
  document.getElementById("HTML").style.fontFamily = `'Brygada 1918', serif`;
  document.getElementById("apple").classList.remove("active");
}
