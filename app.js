function Encriptar(){
    let texto = document.getElementById("Texto-Area").value;
    let textoFinal = "";

        for(let i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoFinal = textoFinal + "ai"
            }
            else if(texto[i] == "e"){
                textoFinal = textoFinal + "enter"
            }
            else if(texto[i] == "i"){
                textoFinal = textoFinal + "imes"
            }
            else if(texto[i] == "o"){
                textoFinal = textoFinal + "ober"
            }
            else if(texto[i] == "u"){
                textoFinal = textoFinal + "ufat"
            }
            else{
                textoFinal = textoFinal + texto[i]
            }
        }
    
    document.getElementById("Texto-Encriptado").value = textoFinal;
    document.getElementById("Texto-Area").value="";
    return;  
    }

    function Desencriptar(){
        let texto = document.getElementById("Texto-Area").value;
        let textoFinal = "";
    
            for(let i = 0; i < texto.length; i++){
                if(texto[i] == "a"){
                    textoFinal = textoFinal + "a"
                    i=i+1;
                }
                else if(texto[i] == "e"){
                    textoFinal = textoFinal + "e"
                    i=i+4;
                }
                else if(texto[i] == "i"){
                    textoFinal = textoFinal + "i"
                    i=i+3;
                }
                else if(texto[i] == "o"){
                    textoFinal = textoFinal + "o"
                    i=i+3;
                }
                else if(texto[i] == "u"){
                    textoFinal = textoFinal + "u"
                    i=i+3
                }
                else{
                    textoFinal = textoFinal + texto[i]
                }
            }
        
        document.getElementById("Texto-Encriptado").value = textoFinal;
        document.getElementById("Texto-Area").value="";
        return;  
        }

function copy(){
    let copia = document.getElementById("Texto-Encriptado").select();
    document.execCommand('copy');
}


