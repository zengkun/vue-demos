<template>
    <div class="hello">
        <h1>Venn图测试</h1>
        <div id="venn"></div>
        <div id="venntooltip"></div>
    </div>
</template>
<script>
import * as d3 from "d3"
import * as venn from 'venn.js'

import vennData from '../venn-data.js'
export default {
    data() {
            return {
                vennData: vennData
            }
        },
        mounted: function() {
            var sets = this.vennData;
            var chart = venn.VennDiagram()
                .width(500)
                .height(500);

            // this.$nextTick(function() {
            var div = d3.select("#venn")
            var tooltip = d3.select("#venntooltip");
            div.datum(sets).call(chart);


            div.selectAll("path")
                .style("stroke-opacity", 0)
                .style("stroke", "#fff")
                .style("stroke-width", 3)

            div.selectAll("g")
                .on("mouseover", function(d, i) {
                    // sort all the areas relative to the current item
                    venn.sortAreas(div, d);

                    // Display a tooltip with the current size
                    tooltip.transition().duration(400).style("opacity", .9);
                    tooltip.text(d.size + " users");

                    // highlight the current path
                    var selection = d3.select(this).transition("tooltip").duration(400);
                    selection.select("path")
                        .style("fill-opacity", d.sets.length == 1 ? .4 : .1)
                        .style("stroke-opacity", 1);
                })

            .on("mousemove", function() {
                tooltip.style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })

            .on("mouseout", function(d, i) {
                tooltip.transition().duration(400).style("opacity", 0);
                var selection = d3.select(this).transition("tooltip").duration(400);
                selection.select("path")
                    .style("fill-opacity", d.sets.length == 1 ? .25 : .0)
                    .style("stroke-opacity", 0);
            });
            // })
        }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#venntooltip {
    position: absolute;
    text-align: center;
    width: 128px;
    height: 16px;
    background: #333;
    color: #ddd;
    padding: 2px;
    border: 0px;
    border-radius: 8px;
    opacity: 0;
}
</style>
