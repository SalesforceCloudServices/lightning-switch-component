({
    addSwitchCaseRegisterListener: function(cmp) {
        cmp.getElement().addEventListener('SWITCH_CASE_REGISTER', $A.getCallback(this.switchCaseRegisterEventHandler.bind(this, cmp)));
    },
    switchCaseRegisterEventHandler: function(cmp, event) {
        event.stopPropagation();
        this.registerSwitchCase(cmp, event.detail.target);
    },
    registerSwitchCase: function(cmp, switchCase){
    	console.log("registerSwitchCase", switchCase.get("v.name"), this.getActiveSwitchCase(cmp));
    	switchCase.set("v.active", switchCase.get("v.name") === this.getActiveSwitchCase(cmp));
		var switchCases = this.getSwitchCases(cmp);
    	switchCases.push(switchCase);
    	this.setSwitchCases(cmp, switchCases);
    },
    getSwitchCases: function(cmp){
    	return this.ensureArray(cmp.get("v.switchCases"));
    },
    setSwitchCases: function(cmp, switchCases){
    	return cmp.set("v.switchCases", this.ensureArray(switchCases));
    },
    getActiveSwitchCase: function(cmp){
    	return cmp.get("v.activeSwitchCase");
    },
    changeActiveCase: function(cmp){
    	console.log("changeActiveCase", cmp.get("v.activeSwitchCase"));
    	var switchCases = this.getSwitchCases(cmp);
    	var activeSwitchCase = this.getActiveSwitchCase(cmp);
    	for(var i = 0, l = switchCases.length; i < l; i++){
    		var switchCase = switchCases[i];
    		switchCase.set("v.active", switchCase.get("v.name") === activeSwitchCase);
    	}
    },
    ensureArray: function(list){ 
        return ($A.util.isArray(list) ? list : (!$A.util.isUndefinedOrNull(list) ? [list] : [])); 
    }
})