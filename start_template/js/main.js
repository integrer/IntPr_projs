$(document).ready(function() {
	$("#card_color").change(function(){
		var data_color_val = $("#card_color option:selected").attr("data-color");
		$(".card-images img").hide();
		switch (data_color_val) {
			case "0": $("#card_1_0").show("slow"); break;
			case "1": $("#card_1_1").show("slow"); break;
			case "2": $("#card_4_0").show("slow"); break;
			case "3": $("#card_4_1").show("slow"); break;
			case "4": $("#card_4_4").show("slow"); break;
			// By default, showing error message in console.
			default: console.error("Error: Unexpected value \'" + data_color_val + "\' of attribute \'data-color\'!");
		}
		//console.log("Selected color number is "+x);
	});
	$(".calc").change(function(){
		var final_edition = $("#card-edition option:selected").val()/30;
		var paper_price = parseFloat($("#card_paper option:selected").attr("data-paper-pice"));
		var card_price = parseInt($("#card_color option:selected").attr("data-color-file"));
		var price_imprint = parseInt($("#card_color option:selected").attr("data-color-imprint"))
		var final_price = (paper_price+price_imprint)*final_edition+card_price;
		console.log(final_price);
	});
});
