
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const HORA= document.getElementById('hora');
const MAN = document.getElementById('man');
const VOL = document.getElementById('vol');
const VOL2 = document.getElementById('vol2');


CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    console.log('dato ingresado: ', DATO)
})

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    
    if (DATO>30){
        ERROR.style.display = 'none'
        
        SC=( (DATO* 4) + 7) / (DATO + 90);
        SC1500=Math.round(SC*1500);
        SC2000=Math.round(SC*2000);
        VOL.innerHTML = "SC 1500: "+ SC1500+"cc";
        VOL2.innerHTML = "SC 2000: "+ SC2000+"cc";
        VOL.style.display = 'block';
        VOL2.style.display = 'block';
        FLU.style.display = 'none';
        HORA.style.display= 'none';
        MAN.style.display = 'none';
    }
    else if (DATO <= 30){
        ERROR.style.display = 'none'

        if (DATO>20){
            let flujo=1500+((DATO-20)*20);
            let hora=Math.round(flujo/24);
            let mantenimiento = hora*1.5;
            FLU.innerHTML = flujo + ' cc';
            HORA.innerHTML = hora + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            HORA.style.display = 'block';
            MAN.style.display = 'block';
            VOL.style.display = 'none';
            VOL2.style.display = 'none';
        }else if (DATO>10){
            let flujo=1000+((DATO-10)*50);
            let hora=Math.round(flujo/24);
            let mantenimiento = hora*1.5;
            FLU.innerHTML = flujo + ' cc';
            HORA.innerHTML = hora + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            HORA.style.display = 'block';
            MAN.style.display = 'block';
            VOL.style.display = 'none';
            VOL2.style.display = 'none';
        }else{
            let flujo=DATO*100;
            let hora=Math.round(flujo/24);
            let mantenimiento = hora*1.5;
            FLU.innerHTML = flujo + ' cc';
            HORA.innerHTML = hora + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            HORA.style.display = 'block';
            MAN.style.display = 'block';
            VOL.style.display = 'none';
            VOL2.style.display = 'none';
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        HORA.style.display= 'none';
        MAN.style.display = 'none';
        VOL.style.display = 'none';
        VOL2.style.display = 'none';
    }
})


