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

const onClick = ()=> {
    
}