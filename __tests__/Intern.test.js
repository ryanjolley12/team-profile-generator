const Intern = require('../lib/Intern');

test('test new Intern', () => {
    const intern = new Intern('Colby');
    expect(intern.user).toBe('Colby');
})

test("check intern functions", () => {
    const intern = new Intern("Ryan");

    expect(intern.getRole()).toBe("Intern");
    expect(intern.getEmail()).toBeDefined();
    expect(intern.getId()).toBeDefined();
    expect(intern.getName()).toBeDefined();
    expect(intern.getSchool()).toBeDefined();
});