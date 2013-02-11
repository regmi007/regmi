    //custom method
    jQuery.validator.addMethod("todayorfuturedateonly", function (value, element) {
        var newvalue = Date.parseExact(value, "d/M/yyyy");
        var currdate = new Date();
        var today = new Date(currdate.getFullYear(), currdate.getMonth(), currdate.getDate());
        return this.optional(element) || newvalue >= today;
    }, "Please enter current date or a future date in dd/MM/yyyy format");
	