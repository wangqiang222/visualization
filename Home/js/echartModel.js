function renderLayer01Right(params) {
    var xData, yData
    if (params == 'all') {
        xData = ["空间", "承重", "电力", "冷量", "网络"];
        yData = [0.63, 0.78, 0.86, 0.58, 0.90];
    } else if (params == '0-0') {
        xData = ["空间", "承重", "电力", "冷量", "网络"];
        yData = [0.75, 0.94, 0.66, 0.58, 0.95];
    } else if (params == '0-1') {
        xData = ["空间", "承重", "电力", "冷量", "网络"];
        yData = [0.55, 0.53, 0.76, 0.58, 0.73];
    } else if (params == '0-3') {
        xData = ["空间", "承重", "电力", "冷量", "网络"];
        yData = [0.85, 0.58, 0.63, 0.58, 0.67];
    }
    var myChart = echarts.init(document.getElementById("layer01_right_chart"));
    myChart.clear()
    var option = {
        //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: xData,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgba(255,255,255,.9)",
                    fontSize: '12',
                },
            },
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 1,
            axisLabel: {
                //formatter: '{value} %'
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.9)",
                    fontSize: '12',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
                type: 'bar',
                data: yData,
                barWidth: '10', //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


function renderLayer02Right(params, f) {
    console.log(params,f);
    var xData, yData
    if (params == 'all') {
        xData = ['电气', '暖通', '安防', '消防', '机柜', 'IT'];
        yData = [{
            name: '电气',
            value: 336
        }, {
            name: '暖通',
            value: 400
        }, {
            name: '安防',
            value: 250
        }, {
            name: '消防',
            value: 666
        }, {
            name: '机柜',
            value: 753
        }, {
            name: 'IT',
            value: 863
        }];
    } else if (params == '电气') {
        xData = ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6'];
        yData = [{
            name: '设备1',
            value: 336
        }, {
            name: '设备2',
            value: 452
        }, {
            name: '设备3',
            value: 642
        }, {
            name: '设备4',
            value: 532
        }, {
            name: '设备5',
            value: 134
        }, {
            name: '设备6',
            value: 863
        }];
    } else if (params == '暖通') {
        xData = ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6'];
        yData = [{
            name: '设备1',
            value: 336
        }, {
            name: '设备2',
            value: 341
        }, {
            name: '设备3',
            value: 543
        }, {
            name: '设备4',
            value: 532
        }, {
            name: '设备5',
            value: 778
        }, {
            name: '设备6',
            value: 863
        }];
    } else if (params == '安防') {
        xData = ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6'];
        yData = [{
            name: '设备1',
            value: 234
        }, {
            name: '设备2',
            value: 832
        }, {
            name: '设备3',
            value: 642
        }, {
            name: '设备4',
            value: 1245
        }, {
            name: '设备5',
            value: 685
        }, {
            name: '设备6',
            value: 863
        }];
    } else if (params == '消防') {
        xData = ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6'];
        yData = [{
            name: '设备1',
            value: 123
        }, {
            name: '设备2',
            value: 222
        }, {
            name: '设备3',
            value: 421
        }, {
            name: '设备4',
            value: 1245
        }, {
            name: '设备5',
            value: 122
        }, {
            name: '设备6',
            value: 111
        }];
    } else if (params == '机柜') {
        xData = ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6'];
        yData = [{
            name: '设备1',
            value: 632
        }, {
            name: '设备2',
            value: 452
        }, {
            name: '设备3',
            value: 642
        }, {
            name: '设备4',
            value: 1453
        }, {
            name: '设备5',
            value: 345
        }, {
            name: '设备6',
            value: 863
        }];
    } else if (params == 'IT') {
        xData = ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6'];
        yData = [{
            name: '设备1',
            value: 642
        }, {
            name: '设备2',
            value: 621
        }, {
            name: '设备3',
            value: 642
        }, {
            name: '设备4',
            value: 1344
        }, {
            name: '设备5',
            value: 566
        }, {
            name: '设备6',
            value: 863
        }];
    }
    var myChart = echarts.init(document.getElementById("layer02_right_chart"), 'infographic');
    myChart.clear()
    var option = {
        title: {
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            bottom: '1%',
            data: xData,
            textStyle: {
                color: '#fff'
            }
        },

        label: {
            normal: {
                textStyle: {
                    color: 'red' // 改变标示文字的颜色
                }
            }
        },
        series: [{
            name: '资产分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '45%'],
            data: yData,

            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,

                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }

        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


function electricalStatistics() {



}

function get10MinutesScale() {
    var currDate = new Date();
    var odd = currDate.getMinutes() % 10;
    var returnArr = new Array();
    currDate.setMinutes(currDate.getMinutes() - odd);
    for (var i = 0; i < 7; i++) {
        returnArr.push(currDate.getHours() + ":" + (currDate.getMinutes() < 10 ? ("0" + currDate.getMinutes()) : currDate.getMinutes()));
        currDate.setMinutes(currDate.getMinutes() - 10);
    }
    return returnArr;
}