/* ### Задание 1

- Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
- Вызовите этот метод - сохраните в переменную.
- Раскройте promise при помощи then, выведите имя студента.  */


/* 
function getStudent(name, age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = { name, age }
            if(name === "Anri"){
                resolve(student)
            }else{
                reject(new Error("Student not found"))
            }
        }, 4000)
    })
}

getStudent("Andi", 32)
.then((student) => {console.log(student.name)})
.catch((e) => {console.log(e)}) */



function getStudent(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const student = {name:"Anri", age: 32};
        resolve(student);
    }, 4000);
});
}
let studentName;

getStudent()
.then(student => {
    studentName = student.name;
    console.log("Имя студента: ", studentName);
})
