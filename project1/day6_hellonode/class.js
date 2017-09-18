var student = require('./student');
var teacher = require('./teacher');

function add (teacherName,students){
    teacher.add(teacherName);

    students.forEach(function(element,index) {
        student.add(element);       
    });
}

exports.add = add;