/// <reference path="scripts/tsunit/tsunit.ts" />
/// <reference path="calculations.ts" />

module CalculationsTest {
	export class SimpleMathTests extends tsUnit.TestClass {

		private target = new Calculations.SimpleMath("");



		addTest1() {
			var result = this.target.add(1, 2);

			this.areIdentical(true, result);

		}


		addTest2() {
			var result = this.target.add(1, 2);

			this.areIdentical(false, result);

		}


	}
}
