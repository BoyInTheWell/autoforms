
const questionnaire = [
    {
        Type : "",
        Id : "",
        Size : 0,
        Required: false,
        Options: {}
    },
    {
        Type : "",
        Id : "",
        Size : 0,
        Required: false,
        Options: {}
    },
    {
        Type : "",
        Id : "",
        Size : 0,
        Required: false,
        Options: {}
    }
]

$(function() {
    $('.datepicker').datepicker({
        autoclose: true, 
        format: 'dd/mm/yyyy',
    /*     multidate: true,
        multidateSeparator: ', ', */
        daysOfWeekDisabled: '0',
        clearBtn: true,
        todayHighlight: true,
        weekStart: '1',
        datesDisabled: '26/03/2024'
    });
});