/**
 * Created by rishabhkhanna on 01/05/17.
 */
const gpio = require('rpi-gpio');
gpio.destroy(function () {
    console.log("all pins unexported");
});
gpio.setup(17, gpio.DIR_OUT,write);

function write() {
    gpio.write(17 , true , function () {
        console.log("written to pin");
    })
}