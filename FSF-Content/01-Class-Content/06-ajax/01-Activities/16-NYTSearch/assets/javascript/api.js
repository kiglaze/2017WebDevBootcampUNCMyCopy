$(document).ready(function(){
	$("#runSearch").on('click', function(){
		var searchTerm = $("#searchTerm").val();
		var noOfRecords = $("#numRecordsSelect").val();
		var startYr = $("#startYear").val();
		var endYr = $("#endYear").val();
		var startDate = startYr + "0101";
		var endDate = endYr + "1231";

		// debugger;
		if(!(searchTerm==="") && (noOfRecords>0) ){
	// 			var queryURL = "https://api.nytimes.com/svc/search/v2/?q=" + searchTerm + "&fq=" + noOfRecords + "&begin_date=" + 
	// startDate + "&end_date=" + endDate + "&apiKey=70cfd4f6d3294d9f969acbcf81937da5&fl=" + noOfRecords;
			//var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=70cfd4f6d3294d9f969acbcf81937da5&q=tom+hanks";
			///svc/search/v2/articlesearch.json?api-key=70cfd4f6d3294d9f969acbcf81937da5&q=tom+hanks";
			// debugger;
			var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + 
            startDate + "&end_date=" + endDate + "&apiKey=70cfd4f6d3294d9f969acbcf81937da5&fl=" + noOfRecords;
			$.ajax({
				url: queryURL,
				method: 'GET'
			}).done(function(response){
				console.log(response);
				debugger;
			});
		}

	});
})