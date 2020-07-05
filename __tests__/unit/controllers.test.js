const UserController = require("../../src/controllers/UserController");
const ParkController = require("../../src/controllers/ParkController");
const PaymentController = require("../../src/controllers/PaymentController");
const RestaurantController = require("../../src/controllers/RestaurantController");

describe("Modules test", () => {
  it("has a module UserController", () => {
    expect(UserController).toBeDefined();
  });

  it("has a module ParkController", () => {
    expect(ParkController).toBeDefined();
  });

  it("has a module PaymentController", () => {
    expect(PaymentController).toBeDefined();
  });

  it("has a module RestaurantController", () => {
    expect(RestaurantController).toBeDefined();
  });
});
