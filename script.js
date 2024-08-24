function addRow() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;
    var table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1);
    var genderCell = newRow.insertCell(2);
    var courseCell = newRow.insertCell(3);
    var emailCell = newRow.insertCell(4);
    var actionCell = newRow.insertCell(5);

    
    nameCell.textContent = name;
    ageCell.textContent = age;
    genderCell.textContent = gender;
    courseCell.textContent = course;
    emailCell.textContent = email;

    
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        removeRow(this);
    };
    actionCell.appendChild(removeButton);

    
    document.getElementById("dataForm").reset();
}

function removeRow(button) {
    
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
