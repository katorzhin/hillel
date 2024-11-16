function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);

    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.addGrade = function(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log('Оцінка повинна бути від 0 до 100');
        }
    };

    this.getAverageGrade = function() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    };

    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log('Всі заняття вже відмічені.');
        }
    };

    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log('Всі заняття вже відмічені.');
        }
    };

    this.summary = function() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return 'Молодець!';
        } else if (avgGrade <= 90 && avgAttendance <= 0.9) {
            return 'Редиска!';
        } else {
            return 'Добре, але можна краще';
        }
    };

    this.getAverageAttendance = function() {
        const attendedClasses = this.attendance.filter(day => day === true).length;
        const totalClasses = this.attendance.filter(day => day !== null).length;
        return totalClasses > 0 ? attendedClasses / totalClasses : 0;
    };
}

const student1 = new Student('Іван', 'Петров', 2002);
student1.addGrade(99);
student1.addGrade(89);
student1.addGrade(99);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
console.log(`Вік студента: ${student1.getAge()}`);
console.log(`Середня оцінка: ${student1.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student1.getAverageAttendance()}`);
console.log(student1.summary());

console.log('---');

const student2 = new Student('Марія', 'Сидорова', 2003);
student2.addGrade(70);
student2.addGrade(85);
student2.present();
student2.present();
student2.present();
student2.absent();
console.log(`Вік студента: ${student2.getAge()}`);
console.log(`Середня оцінка: ${student2.getAverageGrade()}`);
console.log(`Середня відвідуваність: ${student2.getAverageAttendance()}`);
console.log(student2.summary());
