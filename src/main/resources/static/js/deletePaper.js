function _delete(obj){
    var boo = window.confirm("确定要删除？")
    if(boo){
        while(obj.nodeName!="TR"){
            obj=obj.parentNode;
        }
        var idx = obj.rowIndex;
        var id = obj.getElementsByTagName("td")[1].innerHTML;
        $.ajax({
            type : "DELETE",
            url:"/api/exampaper/delete/id/"+id,
            success : function(data) {
                document.getElementById("tb").deleteRow(idx);
                new $.zui.Messager('试卷删除成功！', {
                    type: 'success',
                    icon: 'check',
                    placement: 'center',
                    time: 2000
                }).show();
                setTimeout(function () {
                    window.location.reload()
                }, 2000);
            },
            error:function (data) {
                new $.zui.Messager("试卷删除失败！" + data.responseText, {
                    type: 'danger',
                    icon: 'warning-sign',
                    placement: 'center',
                    time: 2000
                }).show();
            }
        });
    }
}
