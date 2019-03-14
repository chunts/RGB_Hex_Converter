(function () {

    //input color of value
    const inputRed = document.getElementById('input-red')
    const inputGreen = document.getElementById('input-green')
    const inputBlue = document.getElementById('input-blue')

    //table block
    const tdRed = document.getElementById('td-red')
    const tdGreen = document.getElementById('td-green')
    const tdBlue = document.getElementById('td-blue')
    const tdHex = document.getElementById('td-hex-color')

    //submit convert
    const convert = document.getElementById('convert')

    //color HEX text
    let hexText = document.getElementById('hex-text')


    //監聽器
    inputRed.addEventListener('keyup', inputFocus, false)
    inputGreen.addEventListener('keyup', inputFocus, false)
    inputBlue.addEventListener('keyup', inputFocus, false)
    convert.addEventListener('click', btnClick)


    function inputFocus() {
        if (this.matches('#input-red')) {
            tdRed.style.backgroundColor = 'rgb(' + Number(inputRed.value) + ', 0, 0)';
        } else if (this.matches('#input-green')) {
            tdGreen.style.backgroundColor = 'rgb(0, ' + Number(inputGreen.value) + ', 0)';
        } else if (this.matches('#input-blue')) {
            tdBlue.style.backgroundColor = 'rgb(0, 0, ' + Number(inputBlue.value) + ')';
        }
    }

    function btnClick() {
        if (inputRed.value === '' || inputGreen.value === '' || inputBlue.value === '') {
            alert('請輸入 RGB 的數字！')
        } else {
            checkInputNumber()
        }
    }

    //檢查 input 是否為 0 - 255
    function checkInputNumber() {
        const checkNum = /^\d+$/            //判斷是否為正整數(包括0)

        if (checkNum.test(inputRed.value) && checkNum.test(inputGreen.value) && checkNum.test(inputBlue.value)) {
            if (inputRed.value <= 255 && inputGreen.value <= 255 && inputBlue.value <= 255) {
                tdHex.style.backgroundColor = 'rgb(' + Number(inputRed.value) + ', ' + Number(inputGreen.value) + ', ' + Number(inputBlue.value) + ')';
                hexText.value = rgbToHex(inputRed.value, inputGreen.value, inputBlue.value)
            } else {
                alert('請輸入小於等於 255 的數字！')
            }
        } else {
            alert('請輸入大於等於 0 的數字！')
        }
    }

    function rgbToHex(red, green, blue) {
        return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
    }

    //RGB 10進位 to HEX 16進位
    function componentToHex(rgb) {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

})();