# Lightning Switch Component
Lightning Switch Component helps in writing more readable and manageable code compare to nested aura:if component.

### Using aura:if...
```sh
<apex:component>
    <aura:if isTrue="firstCondition">
        First section is displayed 
        <aura:set attribute="else">
            <aura:if isTrue="secondCondition">
                Second section is displayed
                <aura:set attribute="else">
                    <aura:if isTrue="thirdCondition">
                        Third section is displayed
                        <aura:set attribute="else">
                            <aura:if isTrue="fourthCondition">
                                Fourth section is displayed
                                <aura:set attribute="else">
                                    Fifth section is displayed
                                </aura:set>
                            </aura:if>
                        </aura:set>
                    </aura:if>
                </aura:set>
            </aura:if>
        </aura:set>
    </aura:if>
</apex:component>
```

### Using c:Switch...
```sh
<apex:component>
    <c:Switch activeSwitchCase="{!v.activeSwitchCaseName}">
        <c:SwitchCase name="firstSection">
            First section is displayed 
        </c:SwitchCase>
        <c:SwitchCase name="secondSection">
            Second section is displayed 
        </c:SwitchCase>
        <c:SwitchCase name="thirdSection">
            Third section is displayed 
        </c:SwitchCase>
        <c:SwitchCase name="fourthSection">
            Fourth section is displayed 
        </c:SwitchCase>
        <c:SwitchCase name="fifthSection">
            Fifth section is displayed 
        </c:SwitchCase>
    </c:Switch>
```

### Installation 
Install the Lightning Switch Component unmanaged package [here](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t7F000004ECsI).

### Contributors
[Sumit Gupta](https://github.com/sgupta9591),  Senior Technical Consultant at Salesforce