/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var abs = require( '@stdlib/math-base-special-abs' );
var max = require( '@stdlib/math-base-special-max' );
var randu = require( '@stdlib/random-base-randu' );
var FLOAT64_SQRT_EPSILON = require( './../lib' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
	var delta;
	var tol;

	delta = abs( a - b );
	tol = FLOAT64_SQRT_EPSILON * max( abs( a ), abs( b ) );

	return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
	a = randu() * 10.0;
	b = a + (randu()*5.0e-7) - 2.5e-7;
	bool = isApprox( a, b );
	console.log( '%d %s approximately equal to %d. Delta: %d.', a, ( bool ) ? 'is' : 'is not', b, abs( a - b ) );
}
