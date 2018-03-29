import { shallow, createLocalVue } from "@vue/test-utils";
import { vSelectOnFocus } from "../src";

const localVue = createLocalVue();
localVue.directive("selectOnFocus", vSelectOnFocus);

describe("vue-highlight-on-focus", () => {
  describe("text inputs", () => {
    const Component = {
      template: '<div><input type="text" v-select-on-focus value="Lorem Ipsum"/></div>'
    };

    it("selects the content when focused", () => {
      const $wrapper = shallow(Component, {
        localVue
      });
      const $input = $wrapper.find("input");

      $input.trigger("focus");

      const selectedChars = getSelectedCharacters($input.element);

      expect(selectedChars).toBe("Lorem Ipsum");
    });

    it("works with range options", () => {
      const Component = {
        template: '<div><input type="text" v-select-on-focus="range" value="Lorem Ipsum"/></div>',
        data() {
          return {
            range: {
              start: 2,
              end: 5
            }
          };
        }
      };

      const $wrapper = shallow(Component, {
        localVue
      });

      const $input = $wrapper.find("input");

      $input.trigger("focus");

      const selectedChars = getSelectedCharacters($input.element);

      expect(selectedChars).toBe("rem");
    });
  });

  describe("textareas", () => {
    const Component = {
      template: "<div><textarea v-select-on-focus>Lorem Ipsum</textarea></div>"
    };

    it("selects the content when focused", () => {
      const $wrapper = shallow(Component, {
        localVue
      });
      const $input = $wrapper.find("textarea");

      $input.trigger("focus");

      const selectedChars = getSelectedCharacters($input.element);

      expect(selectedChars).toBe("Lorem Ipsum");
    });

    it("works with range options", () => {
      const Component = {
        template: "<div><textarea v-select-on-focus='range'>Lorem Ipsum</textarea></div>",
        data() {
          return {
            range: {
              start: 2,
              end: 5
            }
          };
        }
      };

      const $wrapper = shallow(Component, {
        localVue
      });

      const $input = $wrapper.find("textarea");

      $input.trigger("focus");

      const selectedChars = getSelectedCharacters($input.element);

      expect(selectedChars).toBe("rem");
    });
  });
});

const getSelectedCharacters = $el => {
  return $el.value.substr($el.selectionStart, $el.selectionEnd - $el.selectionStart);
};
