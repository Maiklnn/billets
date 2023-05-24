// mask
class Mask {

  constructor(options) {
    this.events();
  }

  events() {

    document.addEventListener('click', (e) => {
      this.element = e.target;

      // mask
      if (this.element.dataset.mask) this.mask();
    });

  }

  mask() {
    let maskInput = this.element.dataset.mask;
    console.log(1)

    let getInputNumbersValue = input => input.value.replace(/\D/g, '');

    if(maskInput === 'tel') {

      let onInput = function (e) {
        let input = e.target;
        let	inputNumbersValue = getInputNumbersValue(input);
        let	selectionStart = input.selectionStart;
        let	formattedInputValue = "";

        if (input.value.length != selectionStart) {
          if (e.data && /\D/g.test(e.data)) {
            input.value = inputValue;
          }
          return;
        }

        var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }





        input.value = formattedInputValue;
      }

      let onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
          var pastedText = pasted.getData('Text');
          if (/\D/g.test(pastedText)) {
            // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
            // formatting will be in onPhoneInput handler
            input.value = inputNumbersValue;
            return;
          }
        }
      }

      let onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
          e.target.value = "";
        }
      }

      this.element.addEventListener('keydown', onPhoneKeyDown);
      this.element.addEventListener('input', onInput, false);
      this.element.addEventListener('paste', onPhonePaste, false);
    }

    if(maskInput === 'date') {
      let onInput = function (e) {
        let input = e.target;
        let	inputValue = getInputNumbersValue(input);
        let formattedInputValue = '';
        let	selectionStart = input.selectionStart;

        if (input.value.length != selectionStart) {
          if (e.data && /\D/g.test(e.data)) input.value = inputValue;
          return;
        }

        if (inputValue.length > 0 && parseInt(inputValue[0]) < 4) formattedInputValue += inputValue.substring(0, 1);
        if (inputValue.length >= 2) formattedInputValue += inputValue.substring(1, 2);
        if (inputValue.length >= 3 && parseInt(inputValue[2]) < 2) formattedInputValue += '.' + inputValue.substring(2, 3);
        if (inputValue.length >= 4) formattedInputValue += inputValue.substring(3, 4);
        if (inputValue.length >= 5) formattedInputValue += '.' + inputValue.substring(4, 6);
        input.value = formattedInputValue;
      }
      this.element.addEventListener('input', onInput, false);
    }



  }

}


new Mask();
