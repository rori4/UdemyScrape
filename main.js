$.getJSON("console.json", function(json) {
  let tableData = [];
  let jsonArr = json;
  jsonArr.forEach(element => {
      let toAdd = {
          id: element.id,
          name: element.course_label.title,
          competition: element.num_course,
          medianMoney: element.median_total_revenue === null ? element.median_total_revenue : element.median_total_revenue.replace(/[^0-9.]/g, ""),
          maxMoney: element.avg_top_revenue === null ? element.avg_top_revenue : element.avg_top_revenue.replace(/[^0-9.]/g, ""),
          searchVolume: element.search_volume_percentile
      }
      tableData.push(toAdd);
  });
  var table = new Tabulator("#table", {
    // height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:tableData, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Id", field:"id", width:10},
        {title:"Name", field:"name", width:150},
        {title:"Competition", field:"competition", align:"left", formatter:"progress"},
        {title:"Search Volume", field:"searchVolume", align:"left", formatter:"progress"},
        {title:"Median Money", field:"medianMoney", formatter:"money"},
        {title:"Max Money", field:"maxMoney",formatter:"money"},
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});
});
