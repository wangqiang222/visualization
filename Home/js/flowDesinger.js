function init() {
  if (window.goSamples) goSamples(); // 这些样本的init - 你不需要调用它
  var $ = go.GraphObject.make; // 为了简洁定义模板
  myDiagram =
    $(go.Diagram, "myDiagramDiv", // 必须命名或引用div HTML元素
      {
        // grid: $(go.Panel, "Grid",
        //     $(go.Shape, "LineH", {
        //         stroke: "lightgray",
        //         strokeWidth: 0.5
        //     }),
        //     $(go.Shape, "LineH", {
        //         stroke: "gray",
        //         strokeWidth: 0.5,
        //         interval: 10
        //     }),
        //     $(go.Shape, "LineV", {
        //         stroke: "lightgray",
        //         strokeWidth: 0.5
        //     }),
        //     $(go.Shape, "LineV", {
        //         stroke: "gray",
        //         strokeWidth: 0.5,
        //         interval: 10
        //     })
        // ),
        allowDrop: true, // 必须是真的才能接受调色板中的液滴
        "draggingTool.dragsLink": true,
        "draggingTool.isGridSnapEnabled": true,
        "linkingTool.isUnconnectedLinkValid": true,
        "linkingTool.portGravity": 20,
        "relinkingTool.isUnconnectedLinkValid": true,
        "relinkingTool.portGravity": 20,
        "relinkingTool.fromHandleArchetype": $(go.Shape, "Diamond", {
          segmentIndex: 0,
          cursor: "pointer",
          desiredSize: new go.Size(8, 8),
          fill: "tomato",
          stroke: "darkred"
        }),
        "relinkingTool.toHandleArchetype": $(go.Shape, "Diamond", {
          segmentIndex: -1,
          cursor: "pointer",
          desiredSize: new go.Size(8, 8),
          fill: "darkred",
          stroke: "tomato"
        }),
        "linkReshapingTool.handleArchetype": $(go.Shape, "Diamond", {
          desiredSize: new go.Size(7, 7),
          fill: "lightblue",
          stroke: "deepskyblue"
        }),
        rotatingTool: $(TopRotatingTool), // 定义如下
        "rotatingTool.snapAngleMultiple": 15,
        "rotatingTool.snapAngleEpsilon": 15,
        "undoManager.isEnabled": true
      });
  // 当文档被修改时，为标题添加一个“*”并启用“保存”按钮
  myDiagram.addDiagramListener("Modified", function (e) {
    var button = document.getElementById("SaveButton");
    if (button) button.disabled = !myDiagram.isModified;
    var idx = document.title.indexOf("*");
    if (myDiagram.isModified) {
      if (idx < 0) document.title += "*";
    } else {
      if (idx >= 0) document.title = document.title.substr(0, idx);
    }
  });

  //单击事件
  myDiagram.addDiagramListener("ObjectSingleClicked", onObjectSingleClicked);

  // 双击事件
  myDiagram.addDiagramListener("ObjectDoubleClicked", onObjectDoubleClicked);
  // 定义一个创建通常透明的“端口”的函数。
  //“name”用作GraphObject.portId，“spot”用于控制链接的连接方式
  // 以及端口在节点上的位置以及布尔型“输出”和“输入”参数
  // 控制用户是否可以从端口或从端口获取链接。
  function makePort(name, spot, output, input) {
    // 港口基本上只是一个小透明的广场
    return $(go.Shape, "Circle", {
      fill: null, // 没有看到，默认情况下; 通过showSmallPorts设置为半透明灰色，如下定义
      stroke: null,
      desiredSize: new go.Size(10, 10),
      alignment: spot, // 对齐主Shape中的端口
      alignmentFocus: spot, // 只是在形状内
      portId: name, // 声明这个对象是一个“端口”
      fromSpot: spot,
      toSpot: spot, // 声明链接可能在此端口连接的位置
      fromLinkable: output,
      toLinkable: input, // 声明用户是否可以在此处绘制链接 
      cursor: "pointer" // 显示不同的光标以指示潜在的链接点
    });
  }

  var nodeSelectionAdornmentTemplate =
    $(go.Adornment, "Auto",
      $(go.Shape, {
        fill: null,
        stroke: "deepskyblue",
        strokeWidth: 1.5,
        strokeDashArray: [4, 2]
      }),
      $(go.Placeholder)
    );
  var nodeResizeAdornmentTemplate =
    $(go.Adornment, "Spot", {
        locationSpot: go.Spot.Right
      },
      $(go.Placeholder),
      $(go.Shape, {
        alignment: go.Spot.TopLeft,
        cursor: "nw-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        alignment: go.Spot.Top,
        cursor: "n-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        alignment: go.Spot.TopRight,
        cursor: "ne-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        alignment: go.Spot.Left,
        cursor: "w-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        alignment: go.Spot.Right,
        cursor: "e-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        alignment: go.Spot.BottomLeft,
        cursor: "se-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        alignment: go.Spot.Bottom,
        cursor: "s-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        alignment: go.Spot.BottomRight,
        cursor: "sw-resize",
        desiredSize: new go.Size(6, 6),
        fill: "lightblue",
        stroke: "deepskyblue"
      })
    );
  var nodeRotateAdornmentTemplate =
    $(go.Adornment, {
        locationSpot: go.Spot.Center,
        locationObjectName: "CIRCLE"
      },
      $(go.Shape, "Circle", {
        name: "CIRCLE",
        cursor: "pointer",
        desiredSize: new go.Size(7, 7),
        fill: "lightblue",
        stroke: "deepskyblue"
      }),
      $(go.Shape, {
        geometryString: "M3.5 7 L3.5 30",
        isGeometryPositioned: true,
        stroke: "deepskyblue",
        strokeWidth: 1.5,
        strokeDashArray: [4, 2]
      })

    );
  myDiagram.nodeTemplate =
    $(go.Node, "Auto", {
        locationSpot: go.Spot.Center
      },
      {
        toolTip:// this tooltip Adornment is shared by all nodes
        $(go.Adornment, "Auto",
        $(go.Shape, { fill: "#000000" }),
        $(go.TextBlock, { margin: 4 }, // the tooltip shows the result of calling nodeInfo(data)
        new go.Binding("text", "binding", function (v) {
           return "aaa"

        })
        )
            ),
        // 绑定上下文菜单
        contextMenu: makePartContextMenu()
    },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), {
        selectable: true,
        selectionAdornmentTemplate: nodeSelectionAdornmentTemplate
      }, {
        resizable: true,
        resizeObjectName: "PANEL",
        resizeAdornmentTemplate: nodeResizeAdornmentTemplate
      }, {
        rotatable: true,
        rotateAdornmentTemplate: nodeRotateAdornmentTemplate
      },

      $(go.Shape, {
        fill: null,
        stroke: "deepskyblue",
        strokeWidth: 2,
      }),

      new go.Binding("angle").makeTwoWay(),
      //主要对象是围绕具有形状的TextBlock的面板
      $(go.Panel, "Horizontal", {
          background: '#F5F5F5'
        },

        $(go.Picture, {
            name: "Picture",
            desiredSize: new go.Size(70, 70),
            margin: 1.5,
          },
          new go.Binding("source", "pic", function (v) {
            return v;
          })),

        // define the panel where the text will appear
        $(go.Panel, "Table", {
            minSize: new go.Size(130, NaN),
            maxSize: new go.Size(150, NaN),
            margin: new go.Margin(6, 10, 0, 6),
            defaultAlignment: go.Spot.Left
          },
          $(go.RowColumnDefinition, {
            column: 2,
 
          }),
          $(go.TextBlock, 'name', textStyle(), // the name
            {
              row: 0,
              column: 0,
              columnSpan: 5,
              font: "12pt Segoe UI,sans-serif",
              editable: false,
              isMultiline: false,
              minSize: new go.Size(10, 16)
            },
            new go.Binding("text", "text", function (v, e) {
              return v;
            })),

          $(go.TextBlock, textStyle(), {
              row: 1,
              column: 1
            },
            new go.Binding("text", "status", function (v) {
              if (v) {
                return "状态: " + '已绑定';
              } else {
                return "状态: " + '未绑定';
              }


            })),
          $(go.TextBlock, 'Boss', textStyle(), {
              name: "boss",
              row: 2,
              column: 1,
            },  
            new go.Binding("text", "binding", function (v) {
              if (v.name == undefined) {
                return ''
              } else {
                return "绑定设备: " + v.name;
              }

            }) ),
            

        ) // end Table Panel
      ), // end Horizontal Panel


         
      // 四个小的有名港口，每边一个：



      makePort("T", go.Spot.Top, true, true),
      makePort("L", go.Spot.Left, true, true),
      makePort("R", go.Spot.Right, true, true),
      makePort("B", go.Spot.Bottom, true, true), { // 处理鼠标进入/离开事件以显示/隐藏端口
        mouseEnter: function (e, node) {
          showSmallPorts(node, true);
        },
        mouseLeave: function (e, node) {
          showSmallPorts(node, false);
        }
      }
    );

  function showSmallPorts(node, show) {
    node.ports.each(function (port) {
      if (port.portId !== "") { // 不要更改默认端口，这是一个很大的形状
        port.fill = show ? "rgba(0,0,0,.3)" : null;
      }
    });
  }

  var linkSelectionAdornmentTemplate =
    $(go.Adornment, "Link",
      $(go.Shape,
        // isPanelMain声明这个Shape共享Link.geometry
        {
          isPanelMain: true,
          fill: null,
          stroke: "red",
          strokeWidth: 0
        }) // 使用选择对象的strokeWidth
    );
  myDiagram.linkTemplate =
    $(go.Link, // 整个链接面板
      {
        selectable: true,
        selectionAdornmentTemplate: linkSelectionAdornmentTemplate
      }, {
        relinkableFrom: true,
        relinkableTo: true,
        reshapable: true
      }, {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver,
        corner: 5,
        toShortLength: 4
      },
      new go.Binding("points").makeTwoWay(),
      $(go.Shape, // the link path shape
        {
          isPanelMain: true,
          strokeWidth: 2,
          stroke: "white"
        }),
      $(go.Shape, // the arrowhead
        {
          //画线
          toArrow: "Standard",
          stroke: "white"
        }),
      $(go.Panel, "Auto",
        new go.Binding("visible", "isSelected").ofObject(),
        $(go.Shape, "RoundedRectangle", // 链接形状
          {
            fill: "#F8F8F8",
            stroke: null
          }),
        $(go.TextBlock, {
            textAlign: "center",
            font: "10pt helvetica, arial, sans-serif",
            stroke: "#919191",
            margin: 2,
            minSize: new go.Size(10, NaN),
            editable: true
          },
          new go.Binding("text").makeTwoWay())
      )
    );
  load(); // 从一些JSON文本加载初始图
  // 初始化页面左侧的Palette
  jQuery("#accordion").accordion({
    heightStyle: "content",
    // collapsible: true,
    beforeActivate: function (event, ui) {
      myPaletteSmall.requestUpdate();
      myPaletteTall.requestUpdate();
 
    }
  });
  // initialize the first Palette
  myPaletteSmall =
    $(go.Palette, "myPaletteSmall", { // share the templates with the main Diagram
      nodeTemplate: $(go.Node, "Spot", {
          locationSpot: go.Spot.Center
        },
        new go.Binding("angle").makeTwoWay(),
        $(go.Panel, "Table", {
            
          },
          $(go.RowColumnDefinition, {
            row:2,
            column: 1,
          
          }),
          $(go.Picture, {
              row:1,
              column: 1,
              name: "Picture",
              desiredSize: new go.Size(40, 40),
   
            },
            new go.Binding("source", "pic", function (v) {
              return v;
            })),
            $(go.TextBlock, 'name', textStyle(), // the name
            {
              row:2,
              column: 1,
              background: '#F5F5F5',
              editable: false,
              isMultiline: false,
              minSize: new go.Size(10, 16)
            },
            new go.Binding("text", "text", function (v, e) {
              return v;
            })),
        ),

      ),
    //   groupTemplate: myDiagram.groupTemplate,
      layout: $(go.GridLayout)
    });



  // specify the contents of the Palette
  myPaletteSmall.model = new go.GraphLinksModel([{
      key: guid(),
      text: "UPS",
      pic: 'http://10.163.228.54:8080/img/ups.jpg',
      status: false,
      binding: {},

    },
    {
      key: guid(),
      text: "空调",
      pic: 'http://10.163.228.54:8080/img/ups.jpg',
      status: false,
      binding: {},

    },
    {
        key: guid(),
        text: "监控",
        pic: 'http://10.163.228.54:8080/img/ups.jpg',
        status: false,
        binding: {},
  
      },
  ]);

  // initialize the second Palette, of tall items
  myPaletteTall =
    $(go.Palette, "myPaletteTall", { // share the templates with the main Diagram
      nodeTemplate: $(go.Node, "Spot", {
        locationSpot: go.Spot.Center
      },
      new go.Binding("angle").makeTwoWay(),
      $(go.Panel, "Table", {
        
        },
        $(go.RowColumnDefinition, {
          row:2,
          column: 1,
        
        }),
        $(go.Picture, {
            row:1,
            column: 1,
            name: "Picture",
            desiredSize: new go.Size(40, 40),
 
          },
          new go.Binding("source", "pic", function (v) {
            return v;
          })),
          $(go.TextBlock, 'name', textStyle(), // the name
          {
            row:2,
            background: '#F5F5F5',
            column: 1,
            editable: false,
            isMultiline: false,
            minSize: new go.Size(10, 16)
          },
          new go.Binding("text", "text", function (v, e) {
            return v;
          })),
      ),

    ),
    //   groupTemplate: myDiagram.groupTemplate,
      layout: $(go.GridLayout)
    });

  // specify the contents of the Palette
  myPaletteTall.model = new go.GraphLinksModel([{
      key: guid(),
      text: "UPS",
      pic: 'http://10.163.228.54:8080/img/ups.jpg',
      status: false,
      binding: {},

    },
    {
      key: guid(),
      text: "UPS",
      pic: 'http://10.163.228.54:8080/img/ups.jpg',
      status: false,
      binding: {},

    },
  ]);





//   myPalette =
//     $(go.Palette, "myPaletteDiv", // 必须命名或引用DIV HTML元素
//       {
//         maxSelectionCount: 1,
//         nodeTemplate: $(go.Node, "Spot", {
//             locationSpot: go.Spot.Center
//           },
//           new go.Binding("angle").makeTwoWay(),
//           $(go.Panel, "Horizontal", {
//               background: '#F5F5F5'
//             },
//             $(go.Picture, {
//                 name: "Picture",
//                 desiredSize: new go.Size(70, 70),
//                 margin: 1.5,
//               },
//               new go.Binding("source", "pic", function (v) {
//                 return v;
//               })),
//           ),

//         ),
//         linkTemplate: // 简化链接模板，就在这个调色板中
//           $(go.Link, { // 因为GridLayout.alignment是Location，并且节点具有locationSpot == Spot.Center，
//               // 以相同的方式排列链接，我们必须假装链接具有相同的位置点
//               locationSpot: go.Spot.Center,
//               selectionAdornmentTemplate: $(go.Adornment, "Link", {
//                   locationSpot: go.Spot.Center
//                 },
//                 $(go.Shape, {
//                   isPanelMain: true,
//                   fill: null,
//                   stroke: "deepskyblue",
//                   strokeWidth: 0
//                 }),
//                 $(go.Shape, // the arrowhead
//                   {
//                     toArrow: "Standard",
//                     stroke: null
//                   })
//               )
//             }, {
//               routing: go.Link.AvoidsNodes,
//               curve: go.Link.JumpOver,
//               corner: 5,
//               toShortLength: 4
//             },
//             new go.Binding("points"),
//             $(go.Shape, // 链接路径形状
//               {
//                 isPanelMain: true,
//                 strokeWidth: 2
//               }),
//             $(go.Shape, // 箭头
//               {
//                 toArrow: "Standard",
//                 stroke: null
//               })
//           ),
//         model: new go.GraphLinksModel([ // 指定调色板的内容
//           //{text: "模块内容", figure: "形状", fill: "颜色"},值可以接受变量
//           {
//             key: guid(),
//             text: "UPS",
//             pic: 'http://10.163.228.54:8080/img/ups.jpg',
//             status: false,
//             binding: {},

//           },

//         ])
//       });
  /**
   * 右键菜单
   * @returns {*}
   */
  function makePartContextMenu() {
    return $(go.Adornment, "Vertical",
      makeMenuItem("定位",
        function (e, obj) { // OBJ is this Button
          var contextmenu = obj.part; // the Button is in the context menu Adornment
          var part = contextmenu.adornedPart; // the adornedPart is the Part that the context menu adorns
          // now can do something with PART, or with its data, or with the Adornment (the context menu)
           
          let key =part.data.binding.key
          if (key) {
            httpRequest(baseUrl + '?Method=LocateEquipment', {"id":key}).then(
              res => {
                   
              })
          }
          
           
        
        }),
      // makeMenuItem("删除",
      //   function (e, obj) {
      //     e.diagram.commandHandler.deleteSelection();
      //   },
      //   function (o) {
      //     return o.diagram.commandHandler.canDeleteSelection();
      //   })
    );
  };

  /**
   * 生成右键菜单项
   * @param text
   * @param action
   * @param visiblePredicate
   * @returns {*}
   */
  function makeMenuItem(text, action, visiblePredicate) {
    return $("ContextMenuButton",
      $(go.TextBlock, text, {
        margin: 5,
        textAlign: "left",
        stroke: "#f00"
      }), {
        click: action
      },
      // don't bother with binding GraphObject.visible if there's no predicate
      visiblePredicate ? new go.Binding("visible", "", visiblePredicate).ofObject() : {});
  };




}

function TopRotatingTool() {
  go.RotatingTool.call(this);
}

go.Diagram.inherit(TopRotatingTool, go.RotatingTool);
/** @override */
TopRotatingTool.prototype.updateAdornments = function (part) {
  go.RotatingTool.prototype.updateAdornments.call(this, part);
  var adornment = part.findAdornment("Rotating");
  if (adornment !== null) {
    adornment.location = part.rotateObject.getDocumentPoint(new go.Spot(0.5, 0, 0, -30)); // 在中间顶部以上
  }
};
/** @override */
TopRotatingTool.prototype.rotate = function (newangle) {
  go.RotatingTool.prototype.rotate.call(this, newangle + 90);
};
// TopRotatingTool类的结尾
// 以JSON格式显示用户可编辑的图表模型
function save() {
  saveDiagramProperties(); // 在写入JSON之前先执行此操作
  document.getElementById("mySavedModel").value = myDiagram.model.toJson();
  myDiagram.isModified = false;
  return myDiagram.model.toJson();
}

function load() {
  myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
  loadDiagramProperties(); // 在Model.modelData被带入内存后执行此操作
}

function reload(e) {
  // console.log(JSON.parse(JSON.stringify(e)));
  
  myDiagram.model = go.Model.fromJson(e);
  loadDiagramProperties(); // 在Model.modelData被带入内存后执行此操作
}

function saveDiagramProperties() {
  myDiagram.model.modelData.position = go.Point.stringify(myDiagram.position);
}

function loadDiagramProperties(e) {
  // 设置Diagram.initialPosition而不是Diagram.position，以处理初始化副作用
  var pos = myDiagram.model.modelData.position;
  if (pos) myDiagram.initialPosition = go.Point.parse(pos);
}

function textStyle() {
  return {
    font: "9pt  Segoe UI,sans-serif",
    stroke: "black"
  };
}
/**
 * 生成GUID
 * @returns {string}
 */
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function onObjectSingleClicked(params) {
  var part = params.subject.part;
 
}

function onObjectDoubleClicked(ev) {
  var part = ev.subject.part;
  showEquList(part)
  // updateNodeData(part,'222')
};

function updateNodeData(node, text) {
  console.log(node, text);
  myDiagram.startTransaction("vacate");
  myDiagram.model.setDataProperty(node.data, "status", true);
  myDiagram.model.setDataProperty(node.data, "binding", text);
  myDiagram.commitTransaction("vacate");
};