elementsTable = []

let massaProton = 1.007276;
let massaNeutron = 1.008665;
let massaElectron = 0.000549;

let cSquared = 931;

let massagetal = 16;
let atoomnummer = 8;
let atoommassa = "15,99491";



let p,n,e,kernmassa,kernmassaX,massadeficit,bindingsenergie,sBindingsenergie = 0;



function calculate() {
    massagetal = document.getElementById("massagetal").value;
    atoomnummer = document.getElementById("atoomnummer").value;
    atoommassa = document.getElementById("atoommassa").value;
    
    if(!(atoommassa || massagetal || atoomnummer)){
        alert("Misschien helpt het om getallen in te vullen ...");
        return
    }

    try {
        massagetal = parseInt(massagetal);
        atoomnummer = parseInt(atoomnummer);
        atoommassa = parseFloat(atoommassa.replace(",","."));
        
        p = atoomnummer;
        n = massagetal - atoomnummer;
        e = atoomnummer;
        
        kernmassa = (p * massaProton + n * massaNeutron).toFixed(5);
        
        kernmassaX = (atoommassa - e*massaElectron).toFixed(5);
        massadeficit = (kernmassa - kernmassaX).toFixed(5);
        //console.log(massadeficit,cSquared,massadeficit*cSquared);
        bindingsenergie = massadeficit * cSquared;
        //sBindingsenergie = bindingsenergie/massagetal;
        //bindingsenergie = bindingsenergie.replace(".",",")
        //console.log(bindingsenergie);
        document.getElementById("kerndeeltjes").innerHTML = `p<sup>+</sup>: ${p}, n<sup>0</sup>: ${n}, e<sup>-</sup>: ${e}`;
        document.getElementById("kernmassa").innerHTML = `m<sub>kern</sub> = ${(p*massaProton + n*massaNeutron).toFixed(5).toString().replace(".",",")}u`;
        document.getElementById("massadeficit1").innerHTML = `${kernmassa.replace(".",",")}u - ${kernmassaX.replace(".",",")}u = ${massadeficit.replace(".",",")}u`;
        
        document.getElementById("massadeficit2").innerHTML = `
            BE = ${massadeficit.toString().replace(".",",")}u
            <span class="math-box">
            <span class="strut" style="height: 2.008em; vertical-align: -0.686em;"></span>
            <span class="vstack">
                <div style="top: 0.686em;">u</div>
                <div style="top: -0.677em;">931 MeV</div>
                <div style="top: -0.23em;"><span class="frac-line"></span></div>
                <span class="baseline-fix"></span>
            </span>
            </span>
           = ${bindingsenergie.toFixed(5).toString().replace(".",",")} MeV
        `;

        document.getElementById("specifiekebindingsenergie").innerHTML = `
            SBE = 
            <span class="math-box">
                <span class="strut" style="height: 2.008em; vertical-align: -0.686em;"></span>
                <span class="vstack">
                    <div style="top: 0.686em;">${massagetal}</div>
                    <div style="top: -0.677em;">${bindingsenergie.toFixed(5).toString().replace(".",",")} MeV</div>
                    <div style="top: -0.23em;"><span class="frac-line"></span></div>
                    <span class="baseline-fix"></span>
                </span>
            </span>
            = ${(bindingsenergie/massagetal).toFixed(5).toString().replace(".",",")} MeV
        `;

    } catch(err) {
        alert("Error: foute getallen ingegeven, probeer opnieuw!");
        console.log(err)
    }
    




    //console.table([["p","n","e"],[p,n,e]]);
    //console.table([["Massagetal","Atoomnummer","Atoommassa"],[massagetal,atoomnummer,atoommassa]]);
    
}