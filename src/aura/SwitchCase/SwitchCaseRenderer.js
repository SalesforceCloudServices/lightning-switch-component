({
	afterRender: function(cmp, helper){
        cmp.superAfterRender(); 
        helper.fireRegisterEvent(cmp);
    }
})