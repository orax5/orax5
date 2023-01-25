import user from "./user";

describe("actions", () => {
  it("should create actions", () => {
    const expectedActions = [{ type: "user/JOIN" }];
    const actions = [user.signUp()];
    expect(actions).toEqual(expectedActions);
  });
});
