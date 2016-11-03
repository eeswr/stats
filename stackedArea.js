d3.json('data.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.stackedAreaChart()
                  .margin({right: 100})
                  .x(function (d) { return new Date(d[0])})
                  .y(function(d) { return d[1] })
                  .useInteractiveGuideline(true)
                  .rightAlignYAxis(true)
                  .showControls(true)
                  .clipEdge(true);

    chart.xAxis
        .tickFormat(function(d) {
          return d3.time.format('%d-%b')(new Date(d))
    });

    chart.yAxis
        .tickFormat(d3.format(',.2f'));

    d3.select('#chart svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
})
