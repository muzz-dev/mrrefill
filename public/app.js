// $(document).ready(function(){
//     $("#addArea").validate({
//         rules:
//         {
//             txtAreaName:{
//                 required:true
//             }
//         },
//         messages:
//         {
//             txtAreaName:{
//                 required:"Please Enter Area Name"
//             }
//         }
//     })
// })

jQuery('#addArea').validate({
    rules:
    {
        txtAreaName:"required"
    },
    messages:
    {
        // txtAreaName:{
        //     required:"Please Enter Area Name"
        // }
    }
})