    function buscar(){
        
        c = document.getElementById('chapa').value;
        q = document.getElementById('quant').value;
        
        if(c>0 && c<9999999999){
            if(q>0 && q<71){
                var acao = document.querySelector("#formulario");
                acao.setAttribute('action', 'imagens.html');
            }else{
                alert("A sequência de chapas deve estar entre 1 e 70 chapas");
            }
        }else{
            alert("O número da chapa não corresponde ao padrão");
        }
    }
  
    function imagens(c,q,opcao) {
        
      if(c<9999999999 && q<71){
        var x = c+q-1;
            
            for(count= c; count<=x ; count++){
                
            
                
            if(opcao==="picstone"){      
                
                is_img("\\\\10.75.0.242\\photo\\Presentation\\"+count+".png");

                function is_img(file) {
                     var corrigeCount = count;
                     var img = document.createElement('img');
                     img.src = file;
                     img.onerror = function() {
                     document.getElementById(corrigeCount).style.display = 'none';
                     console.log('Essa imagem foi ocultada porque não existe no servidor');
                     };
                } 

                document.write("<figure class='gallery-element'id="+count+"><a href='\\\\10.75.0.242\\photo\\Presentation\\"+count+".png'><img id="+count+" src='\\\\10.75.0.242\\photo\\Presentation\\"+count+".png'><figcaption><h1>"+count+"</h1></figcaption></a></figure><!--gallery-element-->");
            }     
       
            if(opcao==="slabsmith"){
                
                is_img("https://stgimageneslotespro.blob.core.windows.net/cosentino/slab/"+count+".png");

                function is_img(file) {
                     var corrigeCount = count;
                     var img = document.createElement('img');
                     img.src = file;
                     img.onerror = function() {
                     document.getElementById(corrigeCount).style.display = 'none';
                     console.log('Essa imagem foi ocultada porque não existe no servidor');
                     };
                } 
                document.write("<figure class='gallery-element' id="+count+"><a href='https://stgimageneslotespro.blob.core.windows.net/cosentino/slab/"+count+".png'><img src='https://stgimageneslotespro.blob.core.windows.net/cosentino/slab/"+count+".png'><figcaption><h1>"+count+"</h1></figcaption></a></figure><!--gallery-element-->");
            }
        }
        }else{
            alert("Confira os valores informados em número da chapa e quantidade");
            location.href = "index.html";
        }
    }