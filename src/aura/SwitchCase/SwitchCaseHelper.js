({
	fireRegisterEvent: function(cmp) {
		cmp.getElement().parentElement.dispatchEvent(this.createCustomEvent(cmp, "SWITCH_CASE_REGISTER"));
    },
    createCustomEvent: function(cmp, name) {
    	return new CustomEvent(name, { detail: { name: cmp.get("v.name"), target: cmp }});
    }
})