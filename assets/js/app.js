var host = window.location.host;
$BASE_URL = 'http://'+host+'/';  
jQuery(document).ready(function(){
    jQuery("#tombol").hide("slow");
    jQuery("#tombollaporan").hide("slow");
    jQuery("#lappertanggal").hide();
    jQuery("#lapperperiode").hide();
    jQuery("#lapperbulan").hide();
    jQuery("#laprekap").hide();
    jQuery("#data_saran").hide('slow');
    jQuery("#bulan").hide();
    jQuery("#tombolx").hide();
    jQuery("#periode").hide();
    jQuery("#mhs").hide();
    jQuery("#perhari").hide();
    jQuery("#perngajar").hide();
    jQuery("#info").hide();
    jQuery(".mk").click(function(){
        jQuery("#pil").slideToggle();
    });
    jQuery(".uniforms").click(function (){
      var checked_value = jQuery(".uniforms:checked").val();
        if(checked_value==1){
            jQuery("#bulan").show("slow");
        jQuery("#tombolx").show("slow");
            jQuery("#periode").hide("slow");
            jQuery("#mhs").hide("slow");
            jQuery("#perhari").hide("slow");
            jQuery("#perngajar").hide("slow");
        }else if(checked_value==0){
            jQuery("#perhari").hide("slow");
        jQuery("#tombolx").show("slow");
            jQuery("#bulan").hide("slow");
            jQuery("#periode").show("slow");
            jQuery("#mhs").hide("slow");
            jQuery("#perngajar").hide("slow");
        }else if(checked_value==2){
        jQuery("#tombolx").show("slow");
            jQuery("#bulan").hide("slow");
            jQuery("#periode").hide("slow");
            jQuery("#perhari").show("slow");
            jQuery("#mhs").hide("slow");
            jQuery("#perngajar").hide("slow");
        }else if(checked_value==3){
        jQuery("#tombolx").show("slow");
            jQuery("#bulan").hide("slow");
            jQuery("#periode").hide("slow");
            jQuery("#perhari").hide("slow");
            jQuery("#perngajar").show("slow");
            jQuery("#mhs").hide("slow");
        }
    });
    
    jQuery(".lap").click(function (){
      var checked_value = jQuery(".lap:checked").val();
        if(checked_value==0){
            jQuery("#tombollaporan").show("slow");
            jQuery("#lappertanggal").show("slow");
            jQuery("#laprekap").hide("slow");
            jQuery("#lapperbulan").hide("slow");
            jQuery("#lapperperiode").hide("slow");
        }else if(checked_value==1){
            jQuery("#tombollaporan").show("slow");
            jQuery("#lappertanggal").hide("slow");
            jQuery("#laprekap").hide("slow");
            jQuery("#lapperbulan").hide("slow");
            jQuery("#lapperperiode").show("slow");
        }else if(checked_value==2){
            jQuery("#tombollaporan").show("slow");
            jQuery("#lappertanggal").hide("slow");
            jQuery("#laprekap").hide("slow");
            jQuery("#lapperbulan").show("slow");
            jQuery("#lapperperiode").hide("slow");
        }else if(checked_value==3){
            jQuery("#tombollaporan").show("slow");
            jQuery("#lappertanggal").hide("slow");
            jQuery("#lapperbulan").hide("slow");
            jQuery("#lapperperiode").hide("slow");
            jQuery("#laprekap").show("slow");
        }
    });
    

    jQuery("#tambahjadwal").click(function(){
        var no = jQuery("#tbladdjadwal tr").length;
        var hari = jQuery("#hari").val();
        var kls = jQuery("#kls").val();
        var mulai = jQuery("#mulai").val();
        var selesai = jQuery("#selesai").val();
        var guru = jQuery("#guru").val();
        var matkul = jQuery("#matkul").val();
        if(hari!="" && kls!="" && hari!="" && guru!="" && mulai!="" && selesai!="" && matkul !=""){ 
            jQuery('#tbladdjadwal > tbody:first').append("<tr id='"+no+"''><td><input style='width:80px' class='form-control' type='text' readonly='readonly' value='"+ hari + "' name='harina[]' /></td><td><input style='width:80px' readonly='readonly' class='form-control' type='text' value='"+ kls + "' name='klsna[]'  /></td><td><input type='text' value='"+ mulai + "' name='mulaix[]' readonly='readonly' class='form-control' style='width:80px'/></td><td><input type='text' readonly='readonly' value='"+ selesai + "' name='selesaix[]' class='form-control' style='width:80px'/></td><td><input type='text' value='"+ guru + "' name='guruna[]' class='form-control' readonly='readonly' style='width:250px'/></td><td><input type='text' readonly='readonly' value='"+ matkul + "' name='matkulna[]' class='form-control' style='width:200px'/></td><td><button id='delRow' style=\"text-align:center\" class=\"btn btn-primary btn-xs m-r-5\" onclick=\"delrow('"+no+"');return false;\"><i class=\"fa fa-remove\"></i></button></td></tr>"); 
            jQuery("#tombol").show("slow");
            // jQuery("#hari").val('0');
            // jQuery("#kls").val('0');
            jQuery("#mulai").val('');
            jQuery("#selesai").val('');
            // jQuery("#guru").val('0');
            // jQuery("#matkul").val('0');
            // jQuery("#matkul").focus();
        }else{
            $.gritter.add({title:"Informasi !",text: " Data Tidak Boleh Kosong !"});return false;
        }
    });

    jQuery("#simpan_jadwal").click(function(){
        jQuery.blockUI({
        css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: 0.5, 
            color: '#fff' 
        },
          message : 'Sedang Melakukan Penyimpanan Data, Mohon menunggu ... '
        });
        jQuery.post($BASE_URL+"jadwalpel/proses_add", jQuery("#form").serialize(),
        function(data){
            jQuery.unblockUI();
            window.location.href = $BASE_URL+'jadwalpel';
        });
        return true;
    });
})
function cek_inbox(){
      var
      $http,
      $self = arguments.callee;
      if (window.XMLHttpRequest) {
          $http = new XMLHttpRequest();
      }else if (window.ActiveXObject) {
          try {
              $http = new ActiveXObject('Msxml2.XMLHTTP');
          } catch(e) {
              $http = new ActiveXObject('Microsoft.XMLHTTP');
          }
      }
      if($http) {
          $http.onreadystatechange = function(){
              if (/4|^complete$/.test($http.readyState)) {
                  document.getElementById('inbox').innerHTML = $http.responseText;
                  setTimeout(function(){$self();}, 10000);
              }
          };
          $http.open('GET', $BASE_URL+'dashboard/cek_inbox' + '/' + new Date().getTime(), true);
          $http.send(null);
      }
      else{
          document.getElementById('inbox').innerHTML = $http.responseText;
      }
}
function cek_bel(){
      var
      $http,
      $self = arguments.callee;
      if (window.XMLHttpRequest) {
          $http = new XMLHttpRequest();
          }else if (window.ActiveXObject) {
              try {
                  $http = new ActiveXObject('Msxml2.XMLHTTP');
              } catch(e) {
                  $http = new ActiveXObject('Microsoft.XMLHTTP');
              }
          }
          if($http) {
              $http.onreadystatechange = function(){
                  if (/4|^complete$/.test($http.readyState)) {
                      document.getElementById('bel').innerHTML = $http.responseText;
                      setTimeout(function(){$self();}, 1000);
                  }
              };
              $http.open('GET', $BASE_URL+'dashboard/cek_bel' + '/' + new Date().getTime(), true);
              $http.send(null);
          }
          else{
          document.getElementById('bel').innerHTML = $http.responseText;
      }
}
function tampil(kode,nip){
    jQuery.blockUI({
        css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: 0.5, 
            color: '#fff' 
        },
        message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
    });
    jQuery.ajax({
        url : $BASE_URL+"jadwalpel/caridetil/"+kode+"/"+nip,
        type : 'POST',
        data : kode,
        success: function(msg){ 
            jQuery("#detilna").show('slow');    
            jQuery("#detilna").html(msg);    
            jQuery.unblockUI();                   
        }
    });
}
function nyumput () {
    jQuery("#detilna").hide('slow');
}
function delrow(id){
  jQuery("#"+id).remove();
}
function date_time(id){
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('Januari', 'Pebruari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
    h = date.getHours();
    if(h<10){
        h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10){
        m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10){
        s = "0"+s;
    }
    result = ''+days[day]+', '+d+'-'+months[month]+'-'+year+' '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("'+id+'");','1000');
    return true;
}
function waktos(id){
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('Januari', 'Pebruari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
    h = date.getHours();
    if(h<10){
        h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10){
        m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10){
        s = "0"+s;
    }
    result = ' '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('waktos("'+id+'");','1000');
    return true;
}
function kaping(id){
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('Januari', 'Pebruari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');
    h = date.getHours();
    if(h<10){
        h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10){
        m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10){
        s = "0"+s;
    }
    result = ''+days[day]+', '+d+'-'+months[month]+'-'+year+'';
    document.getElementById(id).innerHTML = result;
    setTimeout('kaping("'+id+'");','1000');
    return true;
}
function rbstatus (jns,id,page,link){
	if(jns=="aktif"){
		bootbox.confirm("Non aktifkan " +page+ " ini ?", function(result) {
			if (result) {
				$.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
				setTimeout(function(){
	                $.unblockUI();
	            },1000);
				jQuery.post($BASE_URL+link+"/ubah_status/"+jns+"/"+id, jQuery("#form1").serialize(),
	            function(data){
					$.unblockUI();
	                window.location.href = $BASE_URL+link;
	            });
			}
		});
	}else{
		bootbox.confirm("Aktifkan " +page+ " ini ?", function(result) {
			if (result) {
				$.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
				setTimeout(function(){
	                $.unblockUI();
	            },1000);
				jQuery.post($BASE_URL+link+"/ubah_status/"+jns+"/"+id, jQuery("#form1").serialize(),
	            function(data){
					$.unblockUI();
	                window.location.href = $BASE_URL+link;
	            });
			}
		});
	}
}
function hapus(id,page,link,action){
	bootbox.confirm("Yakin Akan Menghapus " +page+ " Berikut ?", function(result) {
		if (result) {
			$.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
			setTimeout(function(){
                $.unblockUI();
            },1000);
			$.ajax({
				url : $BASE_URL+link+'/'+action+'/'+id,
				dataType : 'json',
				type : 'post',
				success : function(json) {
					$.unblockUI();
					if(json.say == "ok") {
						window.location.href = $BASE_URL+link;
					}else{
						$.gritter.add({title:"Informasi Penghapusan !",text: page+ " ini tidak bisa dihapus,terkait dengan database lain !"});return false;
					}
				}
			});				
			
		}
	});
}
function backupdb(){
    bootbox.confirm("Yakin Akan Membackup Database ?", function(result) {
        if (result) {
            $.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Backup Database <br/> Mohon menunggu ... '
            });
            setTimeout(function(){
                $.unblockUI();
            },1000);
            $.ajax({
                url : $BASE_URL+'backup/proses_backup',
                dataType : 'json',
                type : 'post',
                success : function(json) {
                    $.unblockUI();
                    if(json.say == "ok") {
                        $.gritter.add({title:"Informasi Backup Database !",text: " Database Berhasil Di Backup !"});return false;
                    }else{
                        $.gritter.add({title:"Informasi Backup Database !",text: " Backup Database Gagal !"});return false;
                    }
                }
            });             
            
        }
    });
}
function hapuspegawai(id,page,link,action){
    bootbox.confirm("Yakin Akan Menghapus " +page+ " Berikut ?", function(result) {
        if (result) {
            $.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
            setTimeout(function(){
                $.unblockUI();
            },1000);
            $.ajax({
                url : $BASE_URL+link+'/'+action+'/'+id,
                dataType : 'json',
                type : 'post',
                success : function(json) {
                    $.unblockUI();
                    if(json.say == "ok") {
                        window.location.href = $BASE_URL+link;
                    }else{
                        $.gritter.add({title:"Informasi Penghapusan !",text: page+ " ini tidak bisa dihapus,terkait dengan database lain !"});return false;
                    }
                }
            });             
            
        }
    });
}
function edit(id,page,link){
	bootbox.confirm("Yakin Akan Mengedit " +page+ " Berikut ?", function(result) {
		if (result) {
			$.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
			setTimeout(function(){
                $.unblockUI();
            },1000);
			$.ajax({
				url : $BASE_URL+link+'/cekdata/'+id,
				dataType : 'json',
				type : 'post',
				success : function(json) {
					$.unblockUI();
					if (json.say == "ok") {
						window.location.href = $BASE_URL+link+'/edit/'+id;
					}else{
						$.gritter.add({title:"Informasi Pengeditan !",text: page+ " ini tidak ditemukan di database !"});return false;
					}
				}
			});				
			
		}
	});
}
function detil(id,page,link){
    bootbox.confirm("Yakin Akan Mengedit " +page+ " Berikut ?", function(result) {
        if (result) {
            $.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
            setTimeout(function(){
                $.unblockUI();
            },1000);
            $.ajax({
                url : $BASE_URL+link+'/cekdata/'+id,
                dataType : 'json',
                type : 'post',
                success : function(json) {
                    $.unblockUI();
                    if (json.say == "ok") {
                        window.location.href = $BASE_URL+link+'/detil/'+id;
                    }else{
                        $.gritter.add({title:"Informasi Data !",text: page+ " ini tidak ditemukan di database !"});return false;
                    }
                }
            });             
            
        }
    });
}

function logout(nama){
	bootbox.confirm(nama+" apakah yakin akan keluar ?", function(result) {
		if (result) {
			$.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
	            message : 'Sedang Melakukan Proses Log Out, Mohon menunggu ... '
            });
			setTimeout(function(){
                $.unblockUI();
            },1000);
			$.ajax({
				url : $BASE_URL+'dashboard/log_out',
				complete : function(response) {
					$.unblockUI();
					window.location.href = $BASE_URL;
				}
			});				
			
		}
	});
}
function histori(id,page,link){
    bootbox.confirm("Yakin Akan Melihat Histori " +page+ " Berikut ?", function(result) {
        if (result) {
            $.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
            setTimeout(function(){
                $.unblockUI();
            },1000);
            $.ajax({
                url : $BASE_URL+link+'/cekdata/'+id,
                dataType : 'json',
                type : 'post',
                success : function(json) {
                    $.unblockUI();
                    if (json.say == "ok") {
                        window.location.href = $BASE_URL+link+'/histori/'+id;
                    }else{
                        $.gritter.add({title:"Informasi Histori !",text: page+ " ini tidak ditemukan di database !"});return false;
                    }
                }
            });             
            
        }
    });
}
function ubahmenu (jns,id,page,link){
    if(jns=="aktiv"){
        bootbox.confirm("Non aktifkan " +page+ " ini ?", function(result) {
            if (result) {
                $.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                jQuery.post($BASE_URL+link+"/ubah_status/"+jns+"/"+id, jQuery("#form1").serialize(),
                function(data){
                    $.unblockUI();
                    window.location.href = $BASE_URL+link;
                });
            }
        });
    }else{
        bootbox.confirm("Aktifkan " +page+ " ini ?", function(result) {
            if (result) {
                $.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                jQuery.post($BASE_URL+link+"/ubah_status/"+jns+"/"+id, jQuery("#form1").serialize(),
                function(data){
                    $.unblockUI();
                    window.location.href = $BASE_URL+link;
                });
            }
        });
    }
}
function ubahsubmenu (jns,id,page,link){
    if(jns=="aktiv"){
        bootbox.confirm("Non aktifkan " +page+ " ini ?", function(result) {
            if (result) {
                $.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                jQuery.post($BASE_URL+link+"/ubah_submenu/"+jns+"/"+id, jQuery("#form1").serialize(),
                function(data){
                    $.unblockUI();
                    window.location.href = $BASE_URL+link;
                });
            }
        });
    }else{
        bootbox.confirm("Aktifkan " +page+ " ini ?", function(result) {
            if (result) {
                $.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                jQuery.post($BASE_URL+link+"/ubah_submenu/"+jns+"/"+id, jQuery("#form1").serialize(),
                function(data){
                    $.unblockUI();
                    window.location.href = $BASE_URL+link;
                });
            }
        });
    }
}
function ubahsubmenux (jns,id,page,link){
    if(jns=="aktiv"){
        bootbox.confirm("Non aktifkan " +page+ " ini ?", function(result) {
            if (result) {
                $.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                jQuery.post($BASE_URL+link+"/ubah_submenux/"+jns+"/"+id, jQuery("#form1").serialize(),
                function(data){
                    $.unblockUI();
                    window.location.href = $BASE_URL+link;
                });
            }
        });
    }else{
        bootbox.confirm("Aktifkan " +page+ " ini ?", function(result) {
            if (result) {
                $.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 2, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                jQuery.post($BASE_URL+link+"/ubah_submenux/"+jns+"/"+id, jQuery("#form1").serialize(),
                function(data){
                    $.unblockUI();
                    window.location.href = $BASE_URL+link;
                });
            }
        });
    }
}
function download_data(kode,id,page,link){
    bootbox.confirm("Yakin Akan Mendownload Data Presensi Pegawai Berikut ?", function(result) {
        if (result) {
            $.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
            setTimeout(function(){
                $.unblockUI();
            },1000);
            jQuery.post($BASE_URL+"dpresensi/download_data/"+kode,
                function(data){
                    if(data==1){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Harus Login Terlebih Dahulu !"});return false;
                    }else if(data==2){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Tidak Punya Akses Untuk Halaman Ini !"});return false;
                    }else if(data==3){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Tidak Punya Akses Untuk Halaman Ini !"});return false;
                    }else if(data==4){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Belum Ada Mesin Yang Terpasang Pastikan Juga Untuk Mengaktifkan Mesin !"});return false;
                    }else if(data==5){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Belum Ada Koneksi dengan Mesin Pastikan Mesin Sudah Terhubung Dengan Perangkat Komputer Anda !"});return false;
                    }else if(data==6){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Belum Ada Histori Presensi Terbaru Pada Mesin !"});return false;
                    }else if(data==7){
                        jQuery.unblockUI();
                        jQuery.blockUI({
                            css: { 
                                border: 'none', 
                                padding: '15px', 
                                backgroundColor: '#000', 
                                '-webkit-border-radius': '10px', 
                                '-moz-border-radius': '10px', 
                                opacity: 0.5, 
                                color: '#fff' 
                            },
                            message : 'Sedang Melakukan Penarikan Data, Mohon menunggu ... '
                            });
                            jQuery.ajax({
                                url         : $BASE_URL+"dpresensi/generate_absen/",
                                data        : data,
                                dataType    : 'html',
                                type        : "POST",
                            complete : function(response) {
                                    jQuery.unblockUI();
                                    $.gritter.add({title:"Download Berhasil",text: " Data Presensi Dari Mesin Berhasil Di Download !"});return false;
                            }
                        });
                    }
                });
        }
    });
}
function download_presensi(ip,namamesin,halaman,link,idna){
    bootbox.confirm("Yakin Akan Mendownload Data Presensi ? <br/> <strong>Nama Mesin : "+namamesin+"</strong><br/> <strong>IP Address : "+ip+"</strong>", function(result) {
        if (result) {
            $.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
            setTimeout(function(){
                $.unblockUI();
            },1000);
            jQuery.post($BASE_URL+link+"/download_data/"+idna,
                function(data){
                    if(data==1){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Harus Login Terlebih Dahulu !"});
                    }else if(data==2){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Tidak Punya Akses Untuk Halaman Ini !"});
                    }else if(data==3){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Tidak Punya Akses Untuk Halaman Ini !"});
                    }else if(data==4){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Belum Ada Mesin Yang Terpasang Pastikan Juga Untuk Mengaktifkan Mesin !"});
                    }else if(data==5){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Belum Ada Koneksi dengan Mesin Pastikan Mesin Sudah Terhubung Dengan Perangkat Komputer Anda !"});
                    }else if(data==6){
                        jQuery.unblockUI();
                        jQuery.blockUI({
                            css: { 
                                border: 'none', 
                                padding: '15px', 
                                backgroundColor: '#000', 
                                '-webkit-border-radius': '10px', 
                                '-moz-border-radius': '10px', 
                                opacity: 0.5, 
                                color: '#fff' 
                            },
                            message : 'Sedang Melakukan Penarikan Data, Mohon menunggu ... '
                            });
                            jQuery.ajax({
                                url         : $BASE_URL+"dpresensi/generate_absen/"+idna,
                                data        : data,
                                dataType    : 'html',
                                type        : "POST",
                                complete : function(response) {
                                    jQuery.unblockUI();
                                    $.gritter.add({title:"Download Berhasil",text: " Data Presensi Dari Mesin Berhasil Di Download !"});return false;
                            }
                        });
                    }
                });
        }
    });
}
function upload(kode,page,link){
    bootbox.confirm("Yakin Akan Mengupload Data Guru Berikut ?", function(result) {
        if (result) {
            $.blockUI({
                css: { 
                    border: 'none', 
                    padding: '15px', 
                    backgroundColor: '#000', 
                    '-webkit-border-radius': '10px', 
                    '-moz-border-radius': '10px', 
                    opacity: 2, 
                    color: '#fff' 
                },
                message : 'Sedang Melakukan Pengecekan Data <br/> Mohon menunggu ... '
            });
            setTimeout(function(){
                $.unblockUI();
            },1000);
            jQuery.post($BASE_URL+"guru/upload_guru/"+kode,
                function(data){
                    if(data==1){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Harus Login Terlebih Dahulu !"});return false;
                    }else if(data==2){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Tidak Punya Akses Untuk Halaman Ini !"});return false;
                    }else if(data==3){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Anda Tidak Punya Akses Untuk Halaman Ini !"});return false;
                    }else if(data==4){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Belum Ada Mesin Yang Terpasang Pastikan Juga Untuk Mengaktifkan Mesin !"});return false;
                    }else if(data==5){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Maaf Belum Ada Koneksi dengan Mesin Pastikan Mesin Sudah Terhubung Dengan Perangkat Komputer Anda !"});return false;
                    }else if(data==6){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Koneksi Gagal !",text: " Belum Ada Histori Presensi Terbaru Pada Mesin !"});return false;
                    }else if(data==7){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Upload Berhasil !",text: " Data Guru Berhasil Di Upload !"});return false;
                    }else if(data==8){
                        jQuery.unblockUI();
                        $.gritter.add({title:"Upload Gagal !",text: " Data Guru Telah Di Upload Sebelumnya !"});return false;
                    }
                });
        }
    });
}
function repall(){
        if(jQuery('#m').is(':checked')) {
            if(jQuery("#kelas").val()!=""){
                var id = jQuery("#kelas").val();
        jQuery.blockUI({
            css: { 
                border: 'none', 
                padding: '15px', 
                backgroundColor: '#000', 
                '-webkit-border-radius': '10px', 
                '-moz-border-radius': '10px', 
                opacity: 0.5, 
                color: '#fff' 
            },
            message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
        });
        var page = 'b_jadwalpel';
                jQuery.ajax({
                    url     : $BASE_URL+page+"/perkelas/"+id,
                    type        : 'POST',
                    success: function(msg){
              jQuery.unblockUI();
              window.location.href = $BASE_URL+page+"/perkelas/"+id;
                    }
                });
                return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Jadwalpelajaran!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#nm').is(':checked')) {
            if(jQuery("#matpel").val()!=""){
        var matpel = jQuery("#matpel").val();
        jQuery.blockUI({
            css: { 
                border: 'none', 
                padding: '15px', 
                backgroundColor: '#000', 
                '-webkit-border-radius': '10px', 
                '-moz-border-radius': '10px', 
                opacity: 0.5, 
                color: '#fff' 
            },
            message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
        });
        var page = 'b_jadwalpel';
        jQuery.ajax({
          url     : $BASE_URL+page+"/permatpel/"+matpel,
          type    : 'POST',
          success: function(msg){
              jQuery.unblockUI();
              window.location.href = $BASE_URL+page+"/permatpel/"+matpel;
          }
        });
        return false;
      }else{
        jQuery.unblockUI();
        $.gritter.add({title:"Informasi Jadwalpelajaran!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
      }
        }else if (jQuery('#nmm').is(':checked')) {
            if(jQuery("#hari").val()!=""){
        var hari = jQuery("#hari").val();
        jQuery.blockUI({
            css: { 
                border: 'none', 
                padding: '15px', 
                backgroundColor: '#000', 
                '-webkit-border-radius': '10px', 
                '-moz-border-radius': '10px', 
                opacity: 0.5, 
                color: '#fff' 
            },
            message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
        });
        var page = 'b_jadwalpel';
        jQuery.ajax({
          url     : $BASE_URL+page+"/perhari/"+hari,
          type    : 'POST',
          success: function(msg){
              jQuery.unblockUI();
              window.location.href = $BASE_URL+page+"/perhari/"+hari;
          }
        });
        return false;
      }else{
        jQuery.unblockUI();
        $.gritter.add({title:"Informasi Jadwalpelajaran!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
      }
        }else if (jQuery('#nmmm').is(':checked')) {
            if(jQuery("#guru").val()!=""){
        var guru = jQuery("#guru").val();
        jQuery.blockUI({
            css: { 
                border: 'none', 
                padding: '15px', 
                backgroundColor: '#000', 
                '-webkit-border-radius': '10px', 
                '-moz-border-radius': '10px', 
                opacity: 0.5, 
                color: '#fff' 
            },
            message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
        });
        var page = 'b_jadwalpel';
        jQuery.ajax({
          url     : $BASE_URL+page+"/perguru/"+guru,
          type    : 'POST',
          success: function(msg){
              jQuery.unblockUI();
              window.location.href = $BASE_URL+page+"/perguru/"+guru;
          }
        });
        return false;
      }else{
        jQuery.unblockUI();
        $.gritter.add({title:"Informasi Jadwalpelajaran!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
      }
        }
}

function tampilkan(link){
        if(jQuery('#pertgl').is(':checked')) {
            if(jQuery("#mulaip").val()!="" && jQuery("#gurupertanggal").val()==""){
                var mulai = jQuery("#mulaip").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                $.ajax({
                    url : $BASE_URL+link+'/cekdata/'+mulai,
                    dataType : 'json',
                    type : 'post',
                    success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tanggal Tidak Boleh Kosong !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Guru Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+'/pertanggal/'+mulai;
                        }
                    }
                });             
            }else if(jQuery("#mulai").val()!="" && jQuery("#gurupertanggal").val()!=""){
                var mulai = jQuery("#mulaip").val();
                var guru = jQuery("#gurupertanggal").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                $.ajax({
                    url : $BASE_URL+link+'/cekdata/'+mulai,
                    dataType : 'json',
                    type : 'post',
                    success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tanggal Tidak Boleh Kosong !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Guru Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+'/pertanggal_guru/'+mulai+"/"+guru;
                        }
                    }
                });             
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#perperiode').is(':checked')) {
            if(jQuery("#mulaiperiode").val()!="" && jQuery("#selesaiperiode").val() !="" && jQuery("#guruperperiode").val() ==""){
                var mulai = jQuery("#mulaiperiode").val();
                var selesai = jQuery("#selesaiperiode").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perperiode/"+mulai+"/"+selesai,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+'/perperiode/'+mulai+"/"+selesai;
                  }
                });
                return false;
            }else if(jQuery("#mulaiperiode").val()!="" && jQuery("#selesaiperiode").val() !="" && jQuery("#guruperperiode").val() !=""){
                var mulai = jQuery("#mulaiperiode").val();
                var selesai = jQuery("#selesaiperiode").val();
                var guru = jQuery("#guruperperiode").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perperiode_guru/"+mulai+"/"+selesai+"/"+guru,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+'/perperiode_guru/'+mulai+"/"+selesai+"/"+guru;
                  }
                });
                return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#perbulan').is(':checked')) {
            if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#guruperbulan").val()==""){
                var lapbln = jQuery("#lapbln").val();
                var lapthnbln = jQuery("#lapthnbln").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perbulan/"+lapbln+"/"+lapthnbln,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+"/perbulan/"+lapbln+"/"+lapthnbln;
                  }
                });
                return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#guruperbulan").val()!=""){
                var lapbln = jQuery("#lapbln").val();
                var lapthnbln = jQuery("#lapthnbln").val();
                var guru = jQuery("#guruperbulan").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perbulan_guru/"+lapbln+"/"+lapthnbln+"/"+guru,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+"/perbulan_guru/"+lapbln+"/"+lapthnbln+"/"+guru;
                  }
                });
                return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#rekap').is(':checked')) {
            if(jQuery("#laprekapbln").val()!="" && jQuery("#laprekapthn").val()!="" && jQuery("#gururekap").val()==""){
                var laprekapbln = jQuery("#laprekapbln").val();
                var laprekapthn = jQuery("#laprekapthn").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/rekap/"+laprekapbln+"/"+laprekapthn,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+"/rekap/"+laprekapbln+"/"+laprekapthn;
                  }
                });
                return false;
            }else if(jQuery("#laprekapbln").val()!="" && jQuery("#laprekapthn").val()!="" && jQuery("#gururekap").val()!=""){
                var laprekapbln = jQuery("#laprekapbln").val();
                var laprekapthn = jQuery("#laprekapthn").val();
                var gururekap = jQuery("#gururekap").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                var page = 'lap_presensi';
                jQuery.ajax({
                  url     : $BASE_URL+link+"/rekap_guru/"+laprekapbln+"/"+laprekapthn+"/"+gururekap,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+"/rekap_guru/"+laprekapbln+"/"+laprekapthn+"/"+gururekap;
                  }
                });
                return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }
}
function tampilkan_siswa(link){
        if(jQuery('#pertgl').is(':checked')) {
            if(jQuery("#mulaip").val()!="" && jQuery("#siswapertanggal").val()!=""){
                var mulai = jQuery("#mulaip").val();
                var kls = jQuery("#siswapertanggal").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                $.ajax({
                    url : $BASE_URL+link+'/cekdata/'+mulai+"/"+kls,
                    dataType : 'json',
                    type : 'post',
                    success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tanggal Tidak Boleh Kosong !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Siswa Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+'/pertanggal/'+mulai+"/"+kls;
                        }else if(json.say=="8"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong"});return false;
                        }
                    }
                });             
            }else if(jQuery("#mulaip").val()!="" && jQuery("#siswapertanggal").val()==""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong !"});return false;         
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#perperiode').is(':checked')) {
            if(jQuery("#mulaiperiode").val()!="" && jQuery("#selesaiperiode").val() !="" && jQuery("#guruperperiode").val() ==""){
                var mulai = jQuery("#mulaiperiode").val();
                var selesai = jQuery("#selesaiperiode").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perperiode/"+mulai+"/"+selesai,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+'/perperiode/'+mulai+"/"+selesai;
                  }
                });
                return false;
            }else if(jQuery("#mulaiperiode").val()!="" && jQuery("#selesaiperiode").val() !="" && jQuery("#guruperperiode").val() !=""){
                var mulai = jQuery("#mulaiperiode").val();
                var selesai = jQuery("#selesaiperiode").val();
                var guru = jQuery("#guruperperiode").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perperiode_guru/"+mulai+"/"+selesai+"/"+guru,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+'/perperiode_guru/'+mulai+"/"+selesai+"/"+guru;
                  }
                });
                return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#perbulan').is(':checked')) {
            if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#siswaperbulan").val()!=""){
                var lapbln = jQuery("#lapbln").val();
                var lapthnbln = jQuery("#lapthnbln").val();
                var kls = jQuery("#siswaperbulan").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/cekdata_siswa/"+lapbln+"/"+lapthnbln+"/"+kls,
                  dataType : 'json',
                  type : 'post',
                  success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Tahun Ajaran Belum Di Setting </br> Silahkan Aktifkan Dulu Data Tahun Ajaran !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Siswa Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+"/perbulan/"+lapbln+"/"+lapthnbln+"/"+kls;
                        }else if(json.say=="8"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong"});return false;
                        }
                    }
                });
                return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#siswaperbulan").val()==""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong !"});return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()=="" && jQuery("#siswaperbulan").val()!=""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tahun Ajaran Tidak Boleh Kosong !"});return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#rekap').is(':checked')) {
            if(jQuery("#laprekapthn").val()!="" && jQuery("#laprekapbln").val()!="" && jQuery("#kelasrekap").val()!=""){
                var laprekapthn = jQuery("#laprekapthn").val();
                var laprekapbln = jQuery("#laprekapbln").val();
                var kelasrekap = jQuery("#kelasrekap").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/cekdata_rekap/"+laprekapbln+"/"+laprekapthn+"/"+kelasrekap,
                  dataType : 'json',
                  type : 'post',
                  success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Tahun Ajaran Belum Di Setting </br> Silahkan Aktifkan Dulu Data Tahun Ajaran !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Siswa Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+"/rekap/"+laprekapbln+"/"+laprekapthn+"/"+kelasrekap;
                        }else if(json.say=="8"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong"});return false;
                        }
                    }
                });
                return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#siswaperbulan").val()==""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong !"});return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()=="" && jQuery("#siswaperbulan").val()!=""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tahun Ajaran Tidak Boleh Kosong !"});return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }
}
function tampilkan_presensi(link){
        if(jQuery('#pertgl').is(':checked')) {
            if(jQuery("#mulaip").val()!="" && jQuery("#siswapertanggal").val()!="" && jQuery("#nis").val()!=""){
                var mulai = jQuery("#mulaip").val();
                var kls = jQuery("#siswapertanggal").val();
                var nis = jQuery("#nis").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                setTimeout(function(){
                    $.unblockUI();
                },1000);
                $.ajax({
                    url : $BASE_URL+link+'/cekdata_siswa/'+mulai+"/"+kls+"/"+nis,
                    dataType : 'json',
                    type : 'post',
                    success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tanggal Tidak Boleh Kosong !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Siswa Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+'/pertanggal_siswa/'+mulai+"/"+kls+"/"+nis;
                        }else if(json.say=="8"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong"});return false;
                        }
                    }
                });             
            }else if(jQuery("#mulaip").val()!="" && jQuery("#siswapertanggal").val()==""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong !"});return false;         
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#perperiode').is(':checked')) {
            if(jQuery("#mulaiperiode").val()!="" && jQuery("#selesaiperiode").val() !="" && jQuery("#guruperperiode").val() ==""){
                var mulai = jQuery("#mulaiperiode").val();
                var selesai = jQuery("#selesaiperiode").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perperiode/"+mulai+"/"+selesai,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+'/perperiode/'+mulai+"/"+selesai;
                  }
                });
                return false;
            }else if(jQuery("#mulaiperiode").val()!="" && jQuery("#selesaiperiode").val() !="" && jQuery("#guruperperiode").val() !=""){
                var mulai = jQuery("#mulaiperiode").val();
                var selesai = jQuery("#selesaiperiode").val();
                var guru = jQuery("#guruperperiode").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/perperiode_guru/"+mulai+"/"+selesai+"/"+guru,
                  type    : 'POST',
                  success: function(msg){
                      jQuery.unblockUI();
                      window.location.href = $BASE_URL+link+'/perperiode_guru/'+mulai+"/"+selesai+"/"+guru;
                  }
                });
                return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#perbulan').is(':checked')) {
            if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#siswaperbulan").val()!="" && jQuery("#nisperbulan").val()!=""){
                var lapbln = jQuery("#lapbln").val();
                var lapthnbln = jQuery("#lapthnbln").val();
                var kls = jQuery("#siswaperbulan").val();
                var nis = jQuery("#nisperbulan").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/cekdata_siswa/"+lapbln+"/"+lapthnbln+"/"+kls+"/"+nis,
                  dataType : 'json',
                  type : 'post',
                  success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Tahun Ajaran Belum Di Setting </br> Silahkan Aktifkan Dulu Data Tahun Ajaran !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Siswa Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+"/perbulan_siswa/"+lapbln+"/"+lapthnbln+"/"+kls+"/"+nis;
                        }else if(json.say=="8"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong"});return false;
                        }
                    }
                });
                return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#siswaperbulan").val()==""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong !"});return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()=="" && jQuery("#siswaperbulan").val()!=""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tahun Ajaran Tidak Boleh Kosong !"});return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }else if (jQuery('#rekap').is(':checked')) {
            if(jQuery("#laprekapthn").val()!="" && jQuery("#laprekapbln").val()!="" && jQuery("#kelasrekap").val()!=""){
                var laprekapthn = jQuery("#laprekapthn").val();
                var laprekapbln = jQuery("#laprekapbln").val();
                var kelasrekap = jQuery("#kelasrekap").val();
                jQuery.blockUI({
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: 0.5, 
                        color: '#fff' 
                    },
                    message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
                });
                jQuery.ajax({
                  url     : $BASE_URL+link+"/cekdata_rekap/"+laprekapbln+"/"+laprekapthn+"/"+kelasrekap,
                  dataType : 'json',
                  type : 'post',
                  success : function(json) {
                        $.unblockUI();
                        if(json.say == "1") {
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Tahun Ajaran Belum Di Setting </br> Silahkan Aktifkan Dulu Data Tahun Ajaran !"});return false;
                        }else if(json.say=="2"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Silahkan Login Terlebih Dahulu !"});
                            window.location.href = $BASE_URL+"dashboard/log_out";
                        }else if(json.say=="3"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="4"){
                            window.location.href = $BASE_URL+"error";
                        }else if(json.say=="5"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Ups Ini Hari Libur !"});return false;
                        }else if(json.say=="6"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Data Siswa Belum Tersedia !"});return false;
                        }else if(json.say=="ok"){
                            window.location.href = $BASE_URL+link+"/rekap/"+laprekapbln+"/"+laprekapthn+"/"+kelasrekap;
                        }else if(json.say=="8"){
                            $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong"});return false;
                        }
                    }
                });
                return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()!="" && jQuery("#siswaperbulan").val()==""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Data Kelas Tidak Boleh Kosong !"});return false;
            }else if(jQuery("#lapbln").val()!="" && jQuery("#lapthnbln").val()=="" && jQuery("#siswaperbulan").val()!=""){
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tahun Ajaran Tidak Boleh Kosong !"});return false;
            }else{
                jQuery.unblockUI();
                $.gritter.add({title:"Informasi Laporan Presensi!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
            }
        }
}
function tampilsaran(){
    jQuery.blockUI({
        css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: 0.5, 
            color: '#fff' 
        },
        message : 'Sedang Melakukan Pengecekan Data, Mohon menunggu ... '
    });
    var tipe = jQuery("#tipe").val();
    if(tipe!=""){
        if(tipe=="0"){
/*ALL*/
            var page = 'saran_kritik';
            jQuery.ajax({
                url     : $BASE_URL+page+"/all/"+tipe,
                type    : 'POST',
                success: function(msg){
                    jQuery("#data_saran").show('slow');
                    jQuery('#data_saran').html(msg)
                } 
            }); 
            jQuery.unblockUI();
        }else if(tipe='1'){
/*Guru*/
            
            jQuery.unblockUI();
        }else{
/*Siswa*/
        }
    }else{
        jQuery.unblockUI();
        $.gritter.add({title:"Informasi Saran & Kritik!",text: " Pastikan Tipe Laporan Sudah Terpilih !"});return false;
    }
}