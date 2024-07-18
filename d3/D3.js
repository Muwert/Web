document.addEventListener("DOMContentLoaded", function() {
    let svg = d3.select("svg").attr("width", 600).attr("height", 600);

    document.getElementById("animation_btn").addEventListener("click", function() {
        const animationSpeed = document.getElementById("animationSpeed").value;
        const scaleFactor = document.getElementById("scaleFactor").value;
        const rotationSpeed = 360;
        const rotate = document.getElementById("rotateCheckbox").checked;

        // Параметры эпициклоиды
        const R = 90; // радиус большого круга
        const r = 30;  // радиус малого круга
        const d = 30;  // расстояние от центра малого круга до точки

        const pathData = d3.range(0, 6 * Math.PI, 0.01).map(t => {
            const x = (R + r) * Math.cos(t) - d * Math.cos((R + r) * t / r);
            const y = (R + r) * Math.sin(t) - d * Math.sin((R + r) * t / r);
            return [x + 300, y + 300]; 
        });

        const path = svg.append("path")
            .attr("d", d3.line()(pathData))
            .attr("fill", "none")
            .attr("stroke", "blue");

        let movingCircle = svg.append("g");
        
        movingCircle.append("circle")
            .attr("r", 35)
            .attr("fill", "red");

        Primitive(movingCircle);

        let totalLength = path.node().getTotalLength();

        movingCircle.transition()
            .duration(animationSpeed)
            .ease(d3.easeLinear)
            .attrTween("transform", translateAndRotateAlong(path.node(), scaleFactor, rotationSpeed, rotate))
            .on("end", function() {
                d3.select(this).call(move);
            });

        function translateAndRotateAlong(path, scaleFactor, rotationSpeed, rotate) {
            return function() {
                return function(t) {
                    const point = path.getPointAtLength((1 - t) * totalLength); 
                    const scale = 1 + (scaleFactor - 1) * t;
                    const angle = rotate ? 360 * t : 0;
                    return `translate(${point.x},${point.y}) scale(${scale}) rotate(${angle})`;
                };
            };
        }
    });

    document.getElementById("clear_btn").addEventListener("click", function() {
        svg.selectAll("*").remove();
    });

    function Primitive(primitive) {
        primitive.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 100)
            .attr("y2", 100)
            .style("stroke", "blue")
            .style("stroke-width", "2");
        primitive.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", -200)
            .attr("y2", -200)
            .style("stroke", "blue")
            .style("stroke-width", "2");
        primitive.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 30).style("fill", "orange");
        primitive.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 25).style("fill", "yellow");
        primitive.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 20).style("fill", "green");
        primitive.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 15).style("fill", "blue");
        primitive.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 10).style("fill", "purple");
        primitive.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 5).style("fill", "blue");
    }
});