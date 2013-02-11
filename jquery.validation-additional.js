    //custom method
    jQuery.validator.addMethod("todayorfuturedateonly", function (value, element) {

        var newvalue = Date.parseExact(value, "d/M/yyyy");
        var currdate = new Date();
        var today = new Date(currdate.getFullYear(), currdate.getMonth(), currdate.getDate());
        return this.optional(element) || newvalue >= today;
    }, "Please enter current date or a future date in dd/MM/yyyy format");
	
	jQuery.validator.addMethod("todayorfuturedateonlybutdefault", function (value, element) {

        var newvalue = Date.parseExact(value, "d/M/yyyy");
        var currdate = new Date();
        var today = new Date(currdate.getFullYear(), currdate.getMonth(), currdate.getDate());
		if(value !=element.defaultValue)
			return this.optional(element) || newvalue >= today;
		else
			return true;
    }, "Please enter current date or a future date in dd/MM/yyyy format");
	
	/*
	jQuery.validator.addClassRules({
            holddaterule:
                {
                    todayorfuturedateonly: function (e) {
                        var existing = e.defaultValue;
                        var changed = ($(e).val() != e.defaultValue);
                        return changed;
                    }
                }
        });
		
		*/