var divg = document.getElementById("divg");
       
        function start() {
                console.log("开始");
                //btn_start.style.visibility= "hidden";
                var btn_next = document.createElement("button");
                console.log("Button created");
                divg.innerText = "点击开始以开始游戏";
                btn_next.innerHTML = "开始";
                btn_next.className = "btn_next";
                btn_next.style.position = "relative";
                btn_next.style.top = 200+"px";
                btn_next.style.left = 294+"px";
                document.getElementById("divg").append(btn_next);
                btn_next.onclick = function () {
                    divg.innerText = "今天是考试周后的第一个周末，你准备睡个懒觉";
                    var btn_next2 = document.createElement("button");
                    console.log("Button2 created");
                    btn_next2.innerHTML = "Next";
                    btn_next2.className = "btn_next";
                    btn_next2.style.position = "relative";
                    btn_next2.style.top = 200+"px";
                    btn_next2.style.left = 102+"px";
                    document.getElementById("divg").append(btn_next2);
                        btn_next2.onclick = function () {
                        divg.innerHTML = "丁铃铃铃铃铃铃铃……";
                        var btn_next3 = document.createElement("button");
                        console.log("Button3 created");
                        btn_next3.innerHTML = "Next";
                        btn_next3.className = "btn_next";
                        btn_next3.style.position = "relative";
                        btn_next3.style.top = 200+"px";
                        btn_next3.style.left = 284+"px";
                        document.getElementById("divg").append(btn_next3);
                        btn_next3.onclick = function () {
                            divg.innerHTML = "奇怪，昨天晚上没有定闹钟啊...";
                            var btn_next4 = document.createElement("button");
                            console.log("Button4 created");
                            btn_next4.innerHTML = "Next";
                            btn_next4.className = "btn_next";
                            btn_next4.style.position = "relative";
                            btn_next4.style.top = 200+"px";
                            btn_next4.style.left = 218.5+"px";
                            document.getElementById("divg").append(btn_next4);
                            btn_next4.onclick = function () {
                                divg.innerHTML = "看看手机...";
                                var btn_next5 = document.createElement("button");
                                console.log("Button5 created");
                                btn_next5.innerHTML = "Next";
                                btn_next5.className = "btn_next";
                                btn_next5.style.position = "relative";
                                btn_next5.style.top = 200+"px";
                                btn_next5.style.left = 362.5+"px";
                                document.getElementById("divg").append(btn_next5);
                                btn_next5.onclick = function () {
                                    divg.innerHTML = "哦，原来是昨天（划掉";
                                    var btn_next6 = document.createElement("button");
                                    console.log("Button6 created");
                                    btn_next6.innerHTML = "Next";
                                    btn_next6.className = "btn_next";
                                    btn_next6.style.position = "relative";
                                    btn_next6.style.top = 200+"px";
                                    btn_next6.style.left = 278+"px";
                                    document.getElementById("divg").append(btn_next6);
                                    btn_next6.onclick = function () {
                                        divg.innerHTML = "寝室里怎么一个人都没有了？得下床康康...";
                                        var btn_next7 = document.createElement("button");
                                        console.log("Button7 created");
                                        btn_next7.innerHTML = "Next";
                                        btn_next7.className = "btn_next";
                                        btn_next7.style.position = "relative";
                                        btn_next7.style.top = 200+"px";
                                        btn_next7.style.left = 138.5+"px";
                                        document.getElementById("divg").append(btn_next7);
                                        btn_next7.onclick = function () {
                                            divg.innerHTML = "先去哪里看看呢？";
                                            var btn_balconyf = document.createElement("button");
                                            console.log("ButtonBalconyf created");
                                            btn_balconyf.innerHTML = "阳台";
                                            btn_balconyf.className = "btn_balcony";
                                            btn_balconyf.style.position = "relative";
                                            btn_balconyf.style.top = 200+"px";
                                            btn_balconyf.style.left = -300+"px";
                                            document.getElementById("divg").append(btn_balconyf);

                                            var btn_door = document.createElement("button");
                                            console.log("ButtonDoor created");
                                            btn_door.innerHTML = "大门";
                                            btn_door.className = "btn_door";
                                            btn_door.style.position = "relative";
                                            btn_door.style.top = 200+"px";
                                            btn_door.style.left = 50+"px";
                                            document.getElementById("divg").append(btn_door);
                                            btn_balconyf.onclick = function () {
                                                divg.innerHTML = "为什么不先出门看看呢？"
                                                var btn_door = document.createElement("button");
                                                console.log("ButtonDoor created");
                                                btn_door.innerHTML = "大门";
                                                btn_door.className = "btn_door";
                                                btn_door.style.position = "relative";
                                                btn_door.style.top = 200+"px";
                                                btn_door.style.left = -148+"px";
                                                document.getElementById("divg").append(btn_door);

                                                btn_door.onclick = function () {
                                                    divg.innerHTML = "这门不讲武德，怎么打不开了？这好吗？只能去阳台康康了...";
                                                    var btn_balcony = document.createElement("button");
                                                    btn_balcony.innerHTML = "阳台";
                                                    btn_balcony.className = "btn_balcony";
                                                    btn_balcony.style.position = "relative";
                                                    btn_balcony.style.top = 200+"px";
                                                    btn_balcony.style.left = -399+"px";
                                                    document.getElementById("divg").append(btn_balcony);

                                                    btn_balcony.onclick = function () {
                                                        divg.innerHTML = "这里也没什么好看的，快溜吧...";
                                                        console.log("Real button balcony created!");
                                                        var btn_wc = document.createElement("button");
                                                        btn_wc.innerHTML = "撤硕";
                                                        btn_wc.className = "btn_wc";
                                                        btn_wc.style.position = "relative";
                                                        btn_wc.style.top = 200+"px";
                                                        btn_wc.style.left = -191+"px";
                                                        document.getElementById("divg").append(btn_wc);
                                                        btn_wc.onclick = function () {
                                                            var btn_next8 = document.createElement("button");
                                                            divg.innerHTML = "撤硕里好像有些奇怪的东西...这是一把钥匙？赶紧去门口试试！";
                                                            console.log("Button8 created!");
                                                            btn_next8.innerHTML = "门口";
                                                            btn_next8.className = "btn_next";
                                                            btn_next8.style.position = "relative";
                                                            btn_next8.style.top = 200+"px";
                                                            btn_next8.style.left = -415+"px";
                                                            document.getElementById("divg").append(btn_next8);
                                                            btn_next8.onclick = function () {
                                                                var btn_next9 = document.createElement("button");
                                                                divg.innerHTML = "绝了，门把手上居然可以插钥匙...";
                                                                console.log("Button9 created!");
                                                                btn_next9.innerHTML = "插进去试试";
                                                                btn_next9.className = "btn_next";
                                                                btn_next9.style.position = "relative";
                                                                btn_next9.style.top = 200+"px";
                                                                btn_next9.style.left = -207+"px";
                                                                document.getElementById("divg").append(btn_next9);
                                                                btn_next9.onclick = function () {
                                                                    var btn_next10 = document.createElement("button");
                                                                    divg.innerHTML = "门开了！爷可以出去了！";
                                                                    console.log("Button10 created!");
                                                                    btn_next10.innerHTML = "结束游戏";
                                                                    btn_next10.className = "btn_next";
                                                                    btn_next10.style.position = "relative";
                                                                    btn_next10.style.top = 200+"px";
                                                                    btn_next10.style.left = -148+"px";
                                                                    document.getElementById("divg").append(btn_next10);
                                                                    btn_next10.onclick = function () {
                                                                        var btn_next11 = document.createElement("button");
                                                                        divg.innerHTML = "游戏结束";
                                                                        console.log("Button11 created!");
                                                                        btn_next11.innerHTML = "再来一次";
                                                                        btn_next11.className = "btn_next";
                                                                        btn_next11.style.position = "relative";
                                                                        btn_next11.style.top = 200+"px";
                                                                        btn_next11.style.left = -36+"px";
                                                                        document.getElementById("divg").append(btn_next11);
                                                                        btn_next11.onclick = start;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            btn_door.onclick = function () {
                                                divg.innerHTML = "这门不讲武德，怎么打不开了？这好吗？只能去阳台康康了...";
                                                //var btn_back = document.createElement("button");
                                                btn_next7.style.left = -400+"px";
                                                btn_next7.innerHTML = "这不好";
                                                document.getElementById("divg").append(btn_next7);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            
                
            //var btn_next = document.createElement("button");
        }
        window.onload = start;