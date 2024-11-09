/**
 * @jest-environment jsdom
 */
import { logout } from "../src/js/api/auth/index.js";
import { remove } from "../src/js/storage/index.js";

jest.mock("../src/js/storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  beforeEach(() => {
    remove.mockClear();
  });

  test("clears the token and profile from storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
    expect(remove).toHaveBeenCalledTimes(2);
  });
});
