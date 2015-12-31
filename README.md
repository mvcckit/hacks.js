![logo](docs/img/logo.png)

# hack.js

The IE8 polyfills used for internal Moraine Valley Community College web applications.

It includes:

* [HTML5 Shiv](https://github.com/afarkas/html5shiv)
* [Respond](https://github.com/scottjehl/Respond)
* [Rem Unit Polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill)

## Building hacks.js

Once you have your environment setup, run:

    grunt package

## Including hacks.js

Paste this snippet before the closing `head` tag:

	<!--[if lt IE 9]>

		<script src="https://cdn.rawgit.com/mvcckit/hacks.js/0.5.0/builds/hacks.min.js"></script>

	<![endif]-->

## Browser Support

| Browser | Version |
| ------- | ------- |
| IE      | 8+      |
| Chrome  | 7+      |
| Firebox | 4+      |
| Safari  | 5+      |
| Opera   | 12+     |

## Thanks

Thanks to the authors of each of the polyfills.
