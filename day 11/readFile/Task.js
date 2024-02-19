
let XLSX = require('xlsx')
let XlsxPopulate = require('xlsx-populate');

let data = XLSX.readFile("./readFile/employee_data_.xlsx");

let Emp = []
let workSheet = data.SheetNames[0];

let json_file = XLSX.utils.sheet_to_json(data.Sheets[workSheet])


Emp = json_file


// Calculating Bonuses

const CalculatingBonuses = () => {
    try {
        let newData = [];
        for (let i = 0; i < Emp.length; i++) {
            let bonus = 0;
            let EmpTd = Emp[i].EmployeeID;
            let Salary = Emp[i].AnnualSalary;
            if (Salary <= 50000) {
                bonus = 5
            }
            if (Salary > 50000 && Salary < 100000) {
                bonus = 7;
            }
            if (Salary > 100000) {
                bonus = 10
            }

            let Obj = {
                EmployeeID: EmpTd,
                AnnualSalary: Salary,
                bonus
            }
            newData.push(Obj)
        }
        return newData;


    }
    catch (error) {
        console.log(error);
    }

}

console.log(CalculatingBonuses());
console.log('*'.repeat(20));
const WriteNewFile = (newData) => {
    
    XlsxPopulate.fromBlankAsync()
        .then(workbook => {
            workbook.sheet('Sheet1').cell(`A${1}`).value('EmployeeID');
            workbook.sheet('Sheet1').cell(`B${1}`).value('AnnualSalary');
            workbook.sheet('Sheet1').cell(`C${1}`).value('Bonus');
            for (let i = 0; i < newData.length; i++) {
                
                workbook.sheet('Sheet1').cell(`A${i+2}`).value(newData[i].EmployeeID);
                workbook.sheet('Sheet1').cell(`B${i+2}`).value(newData[i].AnnualSalary);
                workbook.sheet('Sheet1').cell(`C${i+2}`).value(newData[i].bonus);
            }
            return workbook.toFileAsync('newFile.xlsx')
        })
}

console.log(WriteNewFile(CalculatingBonuses()));


