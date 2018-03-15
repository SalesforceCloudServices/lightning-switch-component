({
	afterRender: function(cmp, helper){
        helper.addSwitchCaseRegisterListener(cmp);
        cmp.superAfterRender();
    }
})