//setup option show function
function setOption() {
  let option = document.getElementById("setup-option");
  let text = document.getElementById("set-relative");
  let showPt = document.getElementById("ptToDoSec");
  let reportSection = document.getElementById("report-section");
  showPt.style.display = "none";
  reportSection.style.display = "none";
  if (option.style.display === "block") {
    option.style.display = "none";
    text.innerHTML = "Setup";
  } else {
    option.style.display = "block";
    text.innerHTML = "Option";
  }
}
//doctor dialog box show function
function showDoctorDialog() {
  let show = document.getElementById("doctor-list");
  let table = document.getElementById("doc-table");
  let masterDialogBox = document.getElementById("master-parent");
  let billEdit = document.getElementById("bil-edit-parent");
  let project = document.getElementById("pDetailsSec");
  project.style.display = "none";
  billEdit.style.display = "none";
  show.style.display = "block";
  table.style.display = "block";
  masterDialogBox.style.display = "none";
}
//doctor dialog box remove
function ExitDialogBox() {
  let show = document.getElementById("doctor-list");
  let table = document.getElementById("doc-table");
  let option = document.getElementById("setup-option");
  let text = document.getElementById("set-relative");
  show.style.display = "none";
  table.style.display = "none";
  option.style.display = "none";
  text.innerHTML = "Setup";
}
//data sending function
function sentData() {
  let name = document.getElementById("name");
  let details = document.getElementById("details");
  let options = document.getElementById("options");
  let table = document.getElementById("table");

  if ((name.value === "") | (details.value === "") | (options.value === "")) {
    return alert("All fields are required!");
  }

  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerHTML = name.value;
  tr.appendChild(td);
  table.appendChild(tr);

  const td1 = document.createElement("td");
  td1.innerHTML = details.value;
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  td2.innerHTML = options.value;
  tr.appendChild(td2);
}
//function for text showing on body
// function bodyText(){
//     setTimeout(function (){
//         let bodyBox = document.getElementById('body-dialog');
//         bodyBox.style.display = 'block';
//     },1000);
// };
//function for removing dialog box from body
// function removeText(){
//     let bodyBox = document.getElementById('body-dialog');
//     bodyBox.style.display = 'none';
// };
// master dialog box showing function
function masterNav() {
  let masterDialogBox = document.getElementById("master-parent");
  let show = document.getElementById("doctor-list");
  let table = document.getElementById("doc-table");
  let billEdit = document.getElementById("bil-edit-parent");
  let project = document.getElementById("pDetailsSec");
  project.style.display = "none";
  billEdit.style.display = "none";
  masterDialogBox.style.display = "block";
  show.style.display = "none";
  table.style.display = "none";
}
//master dailog box removing function
function romoveMasterDialog() {
  let masterDialogBox = document.getElementById("master-parent");
  let option = document.getElementById("setup-option");
  masterDialogBox.style.display = "none";
  option.style.display = "none";
}
//save success
function saveSuccess() {
  document.getElementById("show-before").style.display = "block";
  let succesBox = document.getElementById("success-parent");
  succesBox.style.display = "block";
}
//bill edit save succes
function saveSuccessBiledit() {
  let succesBox = document.getElementById("success-parent");
  succesBox.style.display = "block";
}
//bill edit dialog show function
function billEditShow() {
  let billEdit = document.getElementById("bil-edit-parent");
  let show = document.getElementById("doctor-list");
  let masterDialogBox = document.getElementById("master-parent");
  let table = document.getElementById("doc-table");
  let showPt = document.getElementById("ptToDoSec");
  let option = document.getElementById("setup-option");
  let reportSection = document.getElementById("report-section");
  let project = document.getElementById("pDetailsSec");
  project.style.display = "none";
  option.style.display = "none";
  billEdit.style.display = "block";
  show.style.display = "none";
  masterDialogBox.style.display = "none";
  showPt.style.display = "none";
  table.style.display = "none";
  reportSection.style.display = "none";
}
//bill edit dialog remove function
function billEditRemove() {
  let billEdit = document.getElementById("bil-edit-parent");
  let option = document.getElementById("setup-option");
  billEdit.style.display = "none";
  option.style.display = "none";
}
//Patients name show function
function patientName() {
  let showBtn = document.getElementById("btnOne");
  let tables = document.getElementById("tables");

  if (tables.style.display === "none") {
    tables.style.display = "block";
    showBtn.innerHTML = "Hide";
  } else {
    tables.style.display = "none";
    showBtn.innerHTML = "Show";
  }
}
//report section showing
function reportSectionShow() {
  let reportSection = document.getElementById("report-section");
  let masterDialogBox = document.getElementById("master-parent");
  let billEdit = document.getElementById("bil-edit-parent");
  let showPt = document.getElementById("ptToDoSec");
  let project = document.getElementById("pDetailsSec");
  project.style.display = "none";
  billEdit.style.display = "none";
  showPt.style.display = "none";
  masterDialogBox.style.display = "none";
  if (reportSection.style.display === "none") {
    reportSection.style.display = "block";
  } else {
    reportSection.style.display = "none";
  }
  ExitDialogBox();
}
//report section removing
function removeReportSection() {
  let reportSection = document.getElementById("report-section");
  reportSection.style.display = "none";
}
//report tables showing
function showReportTables() {
  let showTables = document.getElementById("report-tables");
  let hideTableParent = document.getElementById("report-table-div");
  hideTableParent.style.display = "none";
  showTables.style.display = "block";
}
// success and update showing
function showSuccessBox() {
  let succesBox = document.getElementById("success-parent");
  succesBox.style.display = "block";
}
//remove success box
function spanhideSuccessBox() {
  let succesBox = document.getElementById("success-parent");
  succesBox.style.display = "none";
}
//ok button
// function hideSuccessBox() {
//     let successBox = document.getElementById('success-parent');
//     let billEdit = document.getElementById('bil-edit-parent');
//     let text = document.getElementById('set-relative');
//     billEdit.style.display = 'none';
//     successBox.style.display = 'none';
//     text.innerHTML = 'Setup';
// }
//save button functionality
function saveOptions() {
  let showTables = document.getElementById("report-tables");
  let succesBox = document.getElementById("success-parent");
  let hideTableParent = document.getElementById("report-table-div");
  let tables = document.getElementById("tables");
  let showBtn = document.getElementById("btnOne");
  showTables.style.display = "none";
  succesBox.style.display = "block";
  hideTableParent.style.display = "block";
  tables.style.display = "none";
  showBtn.innerHTML = "Show";
}
//patient to do list
let myNodelist = document.getElementsByClassName("ptlistLi");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ol");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
//add new element
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("patientInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write patient name here!");
  } else {
    document.getElementById("ptOl").appendChild(li);
  }
  document.getElementById("patientInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
//to do show
function showPtToDo() {
  let table = document.getElementById("doc-table");
  let showPt = document.getElementById("ptToDoSec");
  let show = document.getElementById("doctor-list");
  let text = document.getElementById("set-relative");
  let option = document.getElementById("setup-option");
  let billEdit = document.getElementById("bil-edit-parent");
  let reportSection = document.getElementById("report-section");
  let masterDialogBox = document.getElementById("master-parent");
  text.innerHTML = "Setup";
  show.style.display = "none";
  table.style.display = "none";
  option.style.display = "none";
  billEdit.style.display = "none";
  reportSection.style.display = "none";
  masterDialogBox.style.display = "none";
  showPt.style.display === "block"
    ? (showPt.style.display = "none")
    : (showPt.style.display = "block");
}
// scankbar
function showScnackbar() {
  setTimeout(function () {
    let snacbar = document.getElementById("snackbar");
    snacbar.className = "show";
    setTimeout(function () {
      snacbar.className = snacbar.className.replace("show", "");
    }, 5000);
  }, 3000);
}
// project details function
function readMoreAndLess() {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let btn = document.getElementById("pDetBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    more.style.display = "block";
    btn.innerHTML = "Read less";
  }
}
//show project details function
function showProjectDetails() {
  let project = document.getElementById("pDetailsSec");
  let show = document.getElementById("doctor-list");
  let table = document.getElementById("doc-table");
  let masterDialogBox = document.getElementById("master-parent");
  let billEdit = document.getElementById("bil-edit-parent");
  let showPt = document.getElementById("ptToDoSec");
  showPt.style.display = "none";
  billEdit.style.display = "none";
  masterDialogBox.style.display = "none";
  show.style.display = "none";
  table.style.display = "none";
  project.style.display = "block";
}
//remove project details
function removeProjectDetails() {
  setTimeout(() => {
    let project = document.getElementById("pDetailsSec");
    project.style.display = "none";
  }, 1500);
}
function removeToDO() {
  setTimeout(() => {
    let showPt = document.getElementById("ptToDoSec");
    showPt.style.display = "none";
  }, 2000);
}
