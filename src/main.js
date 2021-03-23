import { GetJSON } from "./components/get-clients-list/get-json.js";
import { ClosestCustomer } from "./components/process-list/closest-customer.js"
import { DisplayResult } from "./components/display-list/display-result.js"

const url = "src/lib/customerss.txt";
const lat = 53.339428;
const long = -6.257664;

const jsonData = await GetJSON(url);
const closestCustomers = ClosestCustomer(jsonData, lat, long);

DisplayResult(closestCustomers);

//Test cases

describe("Get JSON", () => {
    it("should find a file", () => {
        expect(jsonData).toBeDefined();
    })
});

describe("Closest customer", () => {
    it("should recive an object", () => {
        expect(typeof(closestCustomers)).toBe("object");
    }),
    it("should have an exact number of", () => {
        expect(closestCustomers.length).toBe(13);
    })
});
