<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Square Root of Epsilon

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Square root][@stdlib/math/base/special/sqrt] of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

<section class="installation">

## Installation

```bash
npm install @stdlib/constants-float64-sqrt-eps
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var FLOAT64_SQRT_EPSILON = require( '@stdlib/constants-float64-sqrt-eps' );
```

#### FLOAT64_SQRT_EPSILON

[Square root][@stdlib/math/base/special/sqrt] of [double-precision floating-point epsilon][@stdlib/constants/float64/eps].

```javascript
var bool = ( FLOAT64_SQRT_EPSILON === 0.14901161193847656e-7 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var abs = require( '@stdlib/math-base-special-abs' );
var max = require( '@stdlib/math-base-special-max' );
var randu = require( '@stdlib/random-base-randu' );
var FLOAT64_SQRT_EPSILON = require( '@stdlib/constants-float64-sqrt-eps' );

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
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants/float64/eps`][@stdlib/constants/float64/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-float64-sqrt-eps.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-float64-sqrt-eps

[test-image]: https://github.com/stdlib-js/constants-float64-sqrt-eps/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/constants-float64-sqrt-eps/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-float64-sqrt-eps/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-float64-sqrt-eps?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-float64-sqrt-eps.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-float64-sqrt-eps/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-float64-sqrt-eps/tree/deno
[umd-url]: https://github.com/stdlib-js/constants-float64-sqrt-eps/tree/umd
[esm-url]: https://github.com/stdlib-js/constants-float64-sqrt-eps/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-float64-sqrt-eps/main/LICENSE

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt

<!-- <related-links> -->

[@stdlib/constants/float64/eps]: https://github.com/stdlib-js/constants-float64-eps

<!-- </related-links> -->

</section>

<!-- /.links -->
