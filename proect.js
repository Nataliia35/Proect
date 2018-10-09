var picture = function ( pictureURL ) {
        var pict = document.createElement ( 'img' )
        document.body.appendChild ( pict )
        pict.src = pictureURL
        pict.style.width = "200px"
        
}
setTimeout ( function () { picture ( "http://7oom.ru/wp-content/uploads/priroda-barcelony-02.jpg" ) }, 1000 )
setTimeout ( function () { picture ( "http://www.kartinki24.ru/uploads/gallery/main/374/kartinki24_ru_autumn_128.jpg" ) }, 2000 )
setTimeout ( function () { picture ( "https://files.adme.ru/files/news/part_78/780610/9458310-006-999-f4157468d0-1484579029.jpg" ) }, 3000 )
setTimeout ( function () { picture ( "https://otvet.imgsmail.ru/download/01edd1a26fd0b18eece9107d06f5c0e6_s-14695.jpg" ) }, 4000 )
setTimeout ( function () { picture (  "http://www.rulez-t.info/uploads/posts/2017-10/1509039001_rulez-t_info-krasivaya-priroda-1.jpg" ) }, 5000 )
setTimeout ( function () { picture (  "http://katyaburg.ru/sites/default/files/pictures/krasota_prirody/priroda_kartinki_foto_01.jpg" ) }, 6000 )
