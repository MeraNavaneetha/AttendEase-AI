// -------- TEACHER LOGIN ----------
function teacherLogin() {
    let email = document.getElementById("teacherEmail").value.trim();
    let pass = document.getElementById("teacherPass").value.trim();

    if (!email.endsWith("@cmrec.ac.in")) {
        alert("Only CMREC teacher emails allowed!");
        return;
    }

    if (pass !== "cmrec@teacher1234") {
        alert("Wrong password!");
        return;
    }

    // Firebase sign-in
    auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
        window.location.href = "teacher-dashboard.html";
    })
    .catch(error => {
        alert(error.message);
    });
}

// -------- STUDENT LOGIN ----------
function studentLogin() {
    let email = document.getElementById("studentEmail").value;
    let pass = document.getElementById("studentPass").value;

    if (!email.endsWith("@cmrec.ac.in")) {
        alert("Only CMREC student emails allowed!");
        return;
    }

    if (pass !== "cmrec@1234") {
        alert("Wrong student password!");
        return;
    }

    auth.signInWithEmailAndPassword(email, "cmrec@1234")
    .then(() => {
        window.location.href = "student-dashboard.html";
    })
    .catch(err => alert(err.message));
}

// -------- TEACHER DASHBOARD (Load students) -------
if (location.pathname.includes("teacher-dashboard.html")) {
    db.collection("students").onSnapshot(snapshot => {
        let box = document.getElementById("studentList");
        box.innerHTML = "";

        snapshot.forEach(doc => {
            let s = doc.data();

            box.innerHTML += `
                <div class="student-row">
                    <span>${s.rollno} - ${s.name}</span>
                    <div>
                        <button onclick="mark('${s.rollno}','Present')">P</button>
                        <button onclick="mark('${s.rollno}','Absent')">A</button>
                    </div>
                </div>
            `;
        });
    });
}

function mark(roll, status) {
    db.collection("attendance").add({
        rollno: roll,
        status: status,
        date: new Date().toISOString().split("T")[0]
    });
}

// -------- STUDENT DASHBOARD ----------
if (location.pathname.includes("student-dashboard.html")) {
    auth.onAuthStateChanged(user => {
        if (!user) return;

        db.collection("attendance")
          .where("rollno", "==", user.email.split("@")[0])
          .onSnapshot(snapshot => {

            let box = document.getElementById("myAttendance");
            box.innerHTML = "";

            snapshot.forEach(doc => {
                let a = doc.data();
                box.innerHTML += `
                    <div class="student-row">
                        <span>${a.date}</span>
                        <span>${a.status}</span>
                    </div>
                `;
            });
        });
    });
}