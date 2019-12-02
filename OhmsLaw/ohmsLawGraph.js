let tempData = {
    labels: [],
    datasets: [
        {
            label: "IV CURVE",
            fillColor: "rgba(254,99,131,0.2)",  
            strokeColor: "rgba(254,99,131,1)",
            pointColor: "rgba(254,99,131,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        },
    ]
};

function displayLineChart() {
    let data = {
        labels: [1,2,3,4],
        datasets: [
            {
                label: "IV CURVE",
                fillColor: "rgba(254,99,131,0.2)",  
                strokeColor: "rgba(254,99,131,1)",
                pointColor: "rgba(254,99,131,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [1,2,3,4]
            },
        ]
    };
    let ctx = document.getElementById("lineChart").getContext("2d");
    let options = {
        layout: {
            padding: {
                left: 300,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }
    Object.assign(data, tempData);
    let lineChart = new Chart(ctx).Line(data, options);
    
}