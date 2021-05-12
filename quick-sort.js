function quickSort (masyvas) {
    if(masyvas.length == 1) return masyvas;
    else {
        var pivot = masyvas[masyvas.length-1];
        var kaire = [];
        var desine = [];
        for(var i = 0; i<masyvas.length-1; i++){
            if(masyvas[i]<=pivot) kaire.push(masyvas[i]);
            else desine.push(masyvas[i]);
        }
        if(desine.length > 0 && kaire.length > 0){
            return (quickSort(kaire).concat(pivot,quickSort(desine)));
        } else if(desine.length > 0){
            return (kaire.concat(pivot,quickSort(desine)));
        } else{
            return (quickSort(kaire).concat(pivot,desine));
        }
    }
}

var masyvas = [5,8,9,3,0,4,1,2,-6,-10,2.2];
var isrusiuotas = quickSort(masyvas);
console.log("Neišrūšiuotas masyvas:", masyvas);
console.log("Išrūšiuotas masyvas:", isrusiuotas);
