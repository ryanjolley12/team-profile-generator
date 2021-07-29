
const Employee = require ('../lib/Employee')

test('create new Employee', () => {
    const employee = new Employee ('Ryan')

    expect(employee.user).toBe('Ryan')
    expect(employee.user).toEqual(expect.any(String))
});