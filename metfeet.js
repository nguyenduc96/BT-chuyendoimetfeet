function feettoMeter(feet){
    let meter = feet * 0.305;
    return meter;
}
function metertoFeet(meter){
    let feet = meter * 3.279;
    return feet;
}
function chanGe() {
    let text;
    let number = document.getElementById('input').value;
    let select = document.getElementById('change').value;
    if (select == 'meter'){
        let m = feettoMeter(number);
        text = m +' meters';
    }
    else {
        let f = metertoFeet(number);
        text = f + ' feet';
    }
    document.getElementById('output').innerHTML = text;
}
