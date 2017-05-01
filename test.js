/**
 * Created by rishabhkhanna on 01/05/17.
 */
const gpio = require('rpi-gpio');

gpio.setup(17, gpio.DIR_OUT,write);

function write() {
    gpio.write(17 , true , function (err) {
        if(err) throw err;
        console.log("written to pin");
    })
}