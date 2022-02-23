console.log('Hello World');

let addbtn = document.getElementById('addbtn');

addbtn.addEventListener("click", function(e) {
    e.preventDefault();
    let input=document.getElementById('nameinp');
   let name=input.value;
   //console.log(name);
   let roll=document.getElementById('rollinp');
    let rollno=roll.value;
    //console.log(rollno);
    let depter=document.getElementById('deptinp');
    let department=depter.value;
    //console.log(department);
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
    notesObj.push({name,rollno,department});
    console.log(notesObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    input.value="";
    roll.value="";
    depter.value="";
  showrecord();

  });

  function showrecord(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
      <tr>
      <td>${index + 1}</td>
      <td>${element.name}</td>
      <td>${element.rollno}</td>
      <td>${element.department}</td>
      <td><button onclick="deleterow(${index})" class="btn btn-danger">Delete</button></td>
      </tr>
      `;
    });
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = html;
 }

    function deleterow(index){
        notesObj.splice(index,1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showrecord();
        }
        showrecord();

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    let inputVal=search.value.toLowerCase();
    let tr=document.getElementsByTagName('tr');
    Array.from(tr).forEach(function(element){
        let td=element.getElementsByTagName('td')[1];
        if(td){
            let text=td.textContent;
            if(text.includes(inputVal)){
                element.style.display='table-row';
            }
            else{
                element.style.display='none';
            }
        }
    });
});