"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Test_1 = __importDefault(require("./Test/Test"));
// Test.TEST_TaskInitialize()
// Test.TEST_TaskUpdate()
// Test.TEST_TaskTerminate()
// Test.TEST_SequenceTwoChildrenFails()
// Test.TEST_SequenceTwoChildrenContinues()
// Test.TEST_SequenceOneChildPassThrough()
// Test.TEST_SelectorTwoChildrenContinues()
// Test.TEST_SelectorTwoChildrenSucceeds()
// Test.TEST_SelectorOneChildPassThrough()
// Test.TEST_ParallelSucceedRequireAll()
// Test.TEST_ParallelSucceedRequireOne()
// Test.TEST_ParallelFailureRequireAll()
// Test.TEST_ParallelFailureRequireOne()
// Test.TEST_ActiveBinarySelector()
Test_1.default.TEST_TaskInitialize_Node();
Test_1.default.TEST_TaskUpdate_Node();
Test_1.default.TEST_TaskTerminate_Node();
Test_1.default.TEST_SequenceTwoFails();
Test_1.default.TEST_SequenceTwoContinues();
Test_1.default.TEST_SequenceOnePassThrough();
//# sourceMappingURL=index.js.map