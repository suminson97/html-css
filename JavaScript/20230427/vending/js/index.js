//colaGenerator 에서 수입
import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

//탑레벨 await : 최상위 모듈에서 실행되는 await
await colaGenerator.setup();
vendingMachineEvents.bindEvent();
