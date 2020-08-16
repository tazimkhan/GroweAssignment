const students = [
    { name: 'rohan', subject: 'computer science' },
    { name: 'rohan', subject: 'computer science' }
]

function enrollStd(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log('student has been enrolled');
            const err = false;
            if (!err) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    })
}

function getStudent() {
    setTimeout(function () {
        let str = '';
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log('student have beeen fetched');
    }, 5000);
}


let newStd = { name: 'sunny', subject: 'math' }
enrollStd(newStd).then(getStudent).catch(function () {
    console.log('err occured');
});