# vue-select-on-focus

[![Build Status](https://travis-ci.org/syropian/vue-select-on-focus.svg?branch=master)](https://travis-ci.org/syropian/vue-select-on-focus)

> Selects the text contents of inputs, textareas, and contenteditable elements on focus.

## Install

```
$ yarn add vue-select-on-focus
```

or

```
$ npm install vue-select-on-focus --save
```

**or** include the UMD build, hosted by [unpkg](https://unpkg.com) in a `<script>` tag.

```js
<script src="//unpkg.com/vue-select-on-focus" />
```

## Usage

### Globally

```js
import Vue from "vue";
import vSelectOnFocus from "vue-select-on-focus";

Vue.use(vSelectOnFocus);
```

### Per-component

```js
import { vSelectOnFocus } from "vue-select-on-focus";

export default {
  directives: {
    selectOnFocus: vSelectOnFocus
  },
  template: "<div><input type='text' value='Lorem Ipsum' v-select-on-focus /></div>"
};
```

The directive will work with any text input, textarea, or contenteditable element.

### Passing a custom range

If you don't want to select _all_ the text contents, you can pass in an object with `start` and `end` values to the directive.

```js
import { vSelectOnFocus } from "vue-select-on-focus";

export default {
  directives: {
    selectOnFocus: vSelectOnFocus
  },
  template: "<div><input type='text' value='Lorem Ipsum' v-select-on-focus='customRange' /></div>",
  data() {
    return {
      customRange: {
        start: 2,
        end: 5
      }
    };
  }
};
```

In this example the letters `rem` would be selected when the input is focused.

## Development

```bash
# To run the example
$ npm run example

# To run the tests
$ npm test

# To publish the dist file
$ npm run build
```

## License

MIT © [Collin Henderson](https://github.com/syropian)
