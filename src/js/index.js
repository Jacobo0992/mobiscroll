
$(function(){
    $('#category').mobiscroll().select({
        data: [
          { text: 'Beaches', value: 1 },
          { text: 'Mountains', value: 2 },
          { text: 'Towns', value: 3 },
          { text: 'Other', value: 4 },
        ],
        touchUi: false
    });
    $("#date").mobiscroll().calendar({  
        touchUi: false
    });
    $("#price").mobiscroll().number({  
        touchUi: false,
        step: 0.01
    });
});

$("#tour-form").submit((event)=>{

    event.preventDefault()
    let formData = new FormData(document.getElementById("tour-form"))
    let data = {};
    formData.forEach((value, key) => data[key] = value);
    $.ajax({
        type: "POST",
        url: "/api/tours/post",
        data: data,
        success: (data, status) => {}
    })
})