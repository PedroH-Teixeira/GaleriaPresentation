
function load() {
    var chapa = JSON.parse(dados);
    teste = "4000563453"

    for(count= 0; count<=775890 ; count++){
        if (teste === chapa[count].lote){
            document.write("<figure class='gallery-element' id="+count+"><a href='\\\\10.75.0.243\\PhotoStation\\ssData\\"+chapa[count].pasta+"\\Image.jpg'><img src='\\\\10.75.0.243\\\PhotoStation\\ssData\\"+chapa[count].pasta+"\\Image.jpg'><figcaption><h1>"+count+"</h1></figcaption></a></figure><!--gallery-element-->");
            document.write(chapa[count].pasta)
        }
    }
}