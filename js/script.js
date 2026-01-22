const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${student.studentId}</td>
                <td>${student.fullName}</td>
                <td>${student.email}</td>
                <td>${student.department}</td>
                <td>${student.level}</td>
                <td><button onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
        studentId: document.getElementById("studentId").value,
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        level: document.getElementById("level").value
    };

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    form.reset();
    displayStudents();
});

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();
