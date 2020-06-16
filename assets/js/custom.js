/* global moment */

$(document).ready(function () {
    
    
    $('#footer-time').text(getTime());
    $('#footer-date').text(getDate());
    setInterval(function () {
        $('#footer-time').text(getTime());
        $('#footer-date').text(getDate());
    }, 1000);

});

function getDate() {
    var result = moment().format('DD MMMM YYYY');
    return result;
}

function getTime() {
    var result = moment().format('hh:mm:ss A');
    return result;
}
function konfirmasi(nip,halaman,action){
    var host = window.location.host;
    $BASE_URL = 'http://'+host+'/';  
    bootbox.confirm("Yakin Akan Menghapus ?", function(result) {
        if (result) {
            $.ajax({
                url : $BASE_URL+action+nip,
                dataType : 'json',
                data : 'nip='+nip,
                type : 'post',
                success : function(json) {
                    if(json.say == "ok") {
                        window.location.href = $BASE_URL+halaman;
                    }else{
                        $.gritter.add({title:"Informasi Penghapusan !",text: " Gagal !"});return false;
                    }
                }
            });             
        }
    });
}
