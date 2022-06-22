/*************************************************************************************/
// -->Template Name: Bootstrap Press Admin
// -->Author: Themedesigner
// -->Email: niravjoshi87@gmail.com
// -->File: datatable_advanced_init
/*************************************************************************************/

//=============================================//
//    File export                              //
//=============================================//
window.SetDatatableData = (data) => {
    var tblArea = $('#tblArea');
    $('#tblArea').DataTable({
        "dom": "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6 col-form-label 'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 col-form-label 'p>>",
        "bDestroy": true,
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i class="fas fa-copy"></i> Copy',
                titleAttr: 'Copy',
                className: "btn btn-info",
                exportOptions: {
                    columns: [0, 1, 2, 3]
                },
                title: ""
            },
            {
                extend: 'csvHtml5',
                text: '<i class="fas fa-file"></i> CSV',
                titleAttr: 'CSV',
                className: "btn btn-info",
                exportOptions: {
                    columns: [0, 1, 2, 3]
                },
                title: "Users List"
            },
            {
                extend: 'excelHtml5',
                text: '<i class="fas fa-file-excel"></i> Excel',
                titleAttr: 'Excel',
                className: "btn btn-info",
                exportOptions: {
                    columns: [0, 1, 2, 3]
                },
                title: "Users List"
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fas fa-file-pdf"></i> PDF',
                titleAttr: 'PDF',
                className: "btn btn-info",
                exportOptions: {
                    columns: [0, 1, 2, 3]
                },
                title: "Users List",
                pageSize: 'A4', //A3 , A5 , A6 , legal , letter
                orientation: 'landscape',
                customize: function (doc) {
                    doc.content[1].table.widths =
                        Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    doc.content.splice(0, 1);
                    doc.pageMargins = [20, 60, 20, 30];
                    doc.defaultStyle.fontSize = 7;
                    doc.styles.tableHeader.fontSize = 7;


                    doc['header'] = (function () {
                        return {
                            columns: [

                                {
                                    alignment: 'left',
                                    italics: true,
                                    text: 'Users List',
                                    fontSize: 18,
                                    margin: [10, 0]
                                }
                            ],
                            margin: 20
                        }
                    });

                    doc['footer'] = (function (page, pages) {
                        return {
                            columns: [
                                {
                                    alignment: 'right',
                                    text: ['page ', { text: page.toString() }, ' of ', { text: pages.toString() }]
                                }
                            ],
                            margin: 20
                        }
                    });

                    var objLayout = {};
                    objLayout['hLineWidth'] = function (i) { return .5; };
                    objLayout['vLineWidth'] = function (i) { return .5; };
                    objLayout['hLineColor'] = function (i) { return '#aaa'; };
                    objLayout['vLineColor'] = function (i) { return '#aaa'; };
                    objLayout['paddingLeft'] = function (i) { return 4; };
                    objLayout['paddingRight'] = function (i) { return 4; };
                    doc.content[0].layout = objLayout;
                }
            },
            {
                extend: 'print',
                text: '<i class="fas fa-print"></i> Print',
                titleAttr: 'Print',
                className: "btn btn-info",
                exportOptions: {
                    columns: [0, 1, 2, 3]
                },
                title: "Users List"
            }
        ],
        data: data,
        "columnDefs": [
            { "width": "10%", "targets": 4 }
        ],
        "language": {
            "emptyTable": "No files found",
            "processing": '<i class="fas fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> '
        },
        "processing": true,
        order: [],
        columns: [
            { title: "Area Name", data: "areaName" },
            { title: "Is Active", data: "isActive" },
            { title: "Created At", data: "createdAt" },
            { title: "Updated At", data: "updatedAt" },
            {
                title: "Action", data: "id",
                render: function (data, type, row) {
                    return '<center><button type="button" class="btn btn-sc btn-sm mr-2" onClick="Window.GetUserInfoById(' + row.UserId + ')"><i class="fas fa-edit" data-toggle="tooltip" title="Edit User"></i></button><button type="button" class="btn btn-danger btn-sm" onclick="Window.DeleteUserInfo(' + row.UserId + ')" ><i class="fa fa-trash" aria-hidden="true" data-toggle="tooltip" data-placement="left" title="Delete User"></i></button></center>';
                },
                searchable: false, sortable: false

            },

        ]
    });
    window.SetDatatableInit();
}