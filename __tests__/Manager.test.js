const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("create new manager", () => {
    const manager = new Manager("Ryan");

    expect(manager).toBeInstanceOf(Manager)
    expect(manager.user).toBe("Ryan");
    expect(manager.id).toEqual(expect.any(String);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.number).toEqual(expect.any(String));

});

test("check manager functions", () => {
    const manager = new Manager("Ryan");

    expect(manager.getRole()).toBe("Manager");
    expect(manager.getEmail()).toBeDefined();
    expect(manager.getId()).toBeDefined();
    expect(manager.getName()).toBeDefined();
});