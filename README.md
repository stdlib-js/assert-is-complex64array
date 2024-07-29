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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isComplex64Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [Complex64Array][@stdlib/array/complex64].



<section class="usage">

## Usage

To use in Observable,

```javascript
isComplex64Array = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex64array@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isComplex64Array = require( 'path/to/vendor/umd/assert-is-complex64array/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex64array@v0.2.2-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isComplex64Array;
})();
</script>
```

#### isComplex64Array( value )

Tests if a value is a [`Complex64Array`][@stdlib/array/complex64].

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

var bool = isComplex64Array( new Complex64Array( 10 ) );
// returns true

bool = isComplex64Array( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex64array@v0.2.2-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isComplex64Array( new Complex64Array( 10 ) );
// returns true

bool = isComplex64Array( new Complex128Array( 10 ) );
// returns false

bool = isComplex64Array( new Float64Array( 10 ) );
// returns false

bool = isComplex64Array( new Int8Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint8Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint8ClampedArray( 10 ) );
// returns false

bool = isComplex64Array( new Int16Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint16Array( 10 ) );
// returns false

bool = isComplex64Array( new Int32Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint32Array( 10 ) );
// returns false

bool = isComplex64Array( new Float32Array( 10 ) );
// returns false

bool = isComplex64Array( new Array( 10 ) );
// returns false

bool = isComplex64Array( {} );
// returns false

bool = isComplex64Array( null );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-complex`][@stdlib/assert/is-complex]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit or 128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert-is-complex64`][@stdlib/assert/is-complex64]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert-is-complex128array`][@stdlib/assert/is-complex128array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex128Array.</span>
-   <span class="package-name">[`@stdlib/assert-is-complex-typed-array`][@stdlib/assert/is-complex-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a complex typed array.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-complex64array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-complex64array

[test-image]: https://github.com/stdlib-js/assert-is-complex64array/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/assert-is-complex64array/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-complex64array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-complex64array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-complex64array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-complex64array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-complex64array/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-complex64array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-complex64array/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-complex64array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-complex64array/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-complex64array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-complex64array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-complex64array/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

<!-- <related-links> -->

[@stdlib/assert/is-complex]: https://github.com/stdlib-js/assert-is-complex/tree/umd

[@stdlib/assert/is-complex64]: https://github.com/stdlib-js/assert-is-complex64/tree/umd

[@stdlib/assert/is-complex128array]: https://github.com/stdlib-js/assert-is-complex128array/tree/umd

[@stdlib/assert/is-complex-typed-array]: https://github.com/stdlib-js/assert-is-complex-typed-array/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
