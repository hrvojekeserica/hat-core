Search.setIndex({docnames:["appendix/events","appendix/index","appendix/json","appendix/ports","appendix/sbs","components/event/backends/dummy","components/event/backends/sqlite","components/event/index","components/event/modules/dummy","components/gateway/devices/dummy","components/gateway/index","components/gui/adapters/dummy","components/gui/index","components/gui/views/dummy","components/index","components/monitor","components/orchestrator","components/translator","index","introduction","libraries/chatter","libraries/drivers/index","libraries/drivers/serial","libraries/drivers/tpkt","libraries/drivers/udp","libraries/duktape","libraries/index","libraries/juggler","libraries/peg","libraries/sbs","libraries/util"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,sphinx:56},filenames:["appendix/events.rst","appendix/index.rst","appendix/json.rst","appendix/ports.rst","appendix/sbs.rst","components/event/backends/dummy.rst","components/event/backends/sqlite.rst","components/event/index.rst","components/event/modules/dummy.rst","components/gateway/devices/dummy.rst","components/gateway/index.rst","components/gui/adapters/dummy.rst","components/gui/index.rst","components/gui/views/dummy.rst","components/index.rst","components/monitor.rst","components/orchestrator.rst","components/translator.rst","index.rst","introduction.rst","libraries/chatter.rst","libraries/drivers/index.rst","libraries/drivers/serial.rst","libraries/drivers/tpkt.rst","libraries/drivers/udp.rst","libraries/duktape.rst","libraries/index.rst","libraries/juggler.rst","libraries/peg.rst","libraries/sbs.rst","libraries/util.rst"],objects:{"hat.drivers":{serial:[22,0,0,"-"],tpkt:[23,0,0,"-"],udp:[24,0,0,"-"]},"hat.drivers.serial":{Connection:[22,1,1,""],mlog:[22,3,1,""],open:[22,4,1,""]},"hat.drivers.serial.Connection":{async_close:[22,2,1,""],closed:[22,2,1,""],read:[22,2,1,""],write:[22,2,1,""]},"hat.drivers.tpkt":{Address:[23,1,1,""],Connection:[23,1,1,""],ConnectionInfo:[23,1,1,""],Server:[23,1,1,""],connect:[23,4,1,""],listen:[23,4,1,""],mlog:[23,3,1,""]},"hat.drivers.tpkt.Address":{host:[23,3,1,""],port:[23,3,1,""]},"hat.drivers.tpkt.Connection":{async_close:[23,2,1,""],closed:[23,2,1,""],info:[23,2,1,""],read:[23,2,1,""],write:[23,2,1,""]},"hat.drivers.tpkt.ConnectionInfo":{local_addr:[23,3,1,""],remote_addr:[23,3,1,""]},"hat.drivers.tpkt.Server":{addresses:[23,2,1,""],async_close:[23,2,1,""],closed:[23,2,1,""]},"hat.drivers.udp":{Address:[24,1,1,""],Endpoint:[24,1,1,""],create:[24,4,1,""]},"hat.drivers.udp.Address":{host:[24,3,1,""],port:[24,3,1,""]},"hat.drivers.udp.Endpoint":{async_close:[24,2,1,""],closed:[24,2,1,""],empty:[24,2,1,""],receive:[24,2,1,""],send:[24,2,1,""]},"hat.duktape":{"default":[25,3,1,""],Interpreter:[25,1,1,""],Lib:[25,1,1,""],default_duktape_path:[25,3,1,""],init:[25,4,1,""]},"hat.duktape.Interpreter":{eval:[25,2,1,""],get:[25,2,1,""],set:[25,2,1,""]},"hat.gui":{view:[12,0,0,"-"],vt:[12,0,0,"-"]},"hat.gui.view":{View:[12,1,1,""],ViewManager:[12,1,1,""],create_view_manager:[12,4,1,""]},"hat.gui.view.View":{conf:[12,3,1,""],data:[12,3,1,""],name:[12,3,1,""]},"hat.gui.view.ViewManager":{async_close:[12,2,1,""],closed:[12,2,1,""],get:[12,2,1,""]},"hat.gui.vt":{parse:[12,4,1,""]},"hat.juggler":{Connection:[27,1,1,""],ConnectionClosedError:[27,5,1,""],Server:[27,1,1,""],connect:[27,4,1,""],listen:[27,4,1,""],mlog:[27,3,1,""],server_connects_close_timeout:[27,3,1,""],sync_local_delay:[27,3,1,""]},"hat.juggler.Connection":{async_close:[27,2,1,""],closed:[27,2,1,""],flush_local_data:[27,2,1,""],local_data:[27,2,1,""],receive:[27,2,1,""],register_change_cb:[27,2,1,""],remote_data:[27,2,1,""],send:[27,2,1,""],set_local_data:[27,2,1,""]},"hat.juggler.Server":{async_close:[27,2,1,""],closed:[27,2,1,""]},"hat.monitor.server":{blessing:[15,0,0,"-"],ui:[15,0,0,"-"]},"hat.monitor.server.blessing":{Algorithm:[15,1,1,""],calculate_blessing:[15,4,1,""]},"hat.monitor.server.blessing.Algorithm":{BLESS_ALL:[15,3,1,""],BLESS_ONE:[15,3,1,""]},"hat.monitor.server.ui":{WebServer:[15,1,1,""],create:[15,4,1,""],mlog:[15,3,1,""]},"hat.monitor.server.ui.WebServer":{async_close:[15,2,1,""],closed:[15,2,1,""]},"hat.orchestrator":{component:[16,0,0,"-"],ui:[16,0,0,"-"]},"hat.orchestrator.component":{Component:[16,1,1,""],Status:[16,1,1,""],create_timeout:[16,6,1,""],sigint_timeout:[16,6,1,""],sigkill_timeout:[16,6,1,""],start_delay:[16,6,1,""]},"hat.orchestrator.component.Component":{args:[16,2,1,""],async_close:[16,2,1,""],closed:[16,2,1,""],delay:[16,2,1,""],name:[16,2,1,""],register_change_cb:[16,2,1,""],revive:[16,2,1,""],set_revive:[16,2,1,""],start:[16,2,1,""],status:[16,2,1,""],stop:[16,2,1,""]},"hat.orchestrator.component.Status":{DELAYED:[16,3,1,""],RUNNING:[16,3,1,""],STARTING:[16,3,1,""],STOPPED:[16,3,1,""],STOPPING:[16,3,1,""]},"hat.orchestrator.ui":{WebServer:[16,1,1,""],create:[16,4,1,""]},"hat.orchestrator.ui.WebServer":{async_close:[16,2,1,""],closed:[16,2,1,""]},"hat.peg":{And:[28,1,1,""],Choice:[28,1,1,""],Class:[28,1,1,""],Dot:[28,1,1,""],Grammar:[28,1,1,""],Identifier:[28,1,1,""],Literal:[28,1,1,""],MatchCallFrame:[28,1,1,""],MatchResult:[28,1,1,""],Node:[28,1,1,""],Not:[28,1,1,""],OneOrMore:[28,1,1,""],Optional:[28,1,1,""],Sequence:[28,1,1,""],ZeroOrMore:[28,1,1,""],console_debug_cb:[28,4,1,""],walk_ast:[28,4,1,""]},"hat.peg.And":{expression:[28,3,1,""]},"hat.peg.Choice":{expressions:[28,3,1,""]},"hat.peg.Class":{values:[28,3,1,""]},"hat.peg.Grammar":{definitions:[28,2,1,""],parse:[28,2,1,""],starting:[28,2,1,""]},"hat.peg.Identifier":{value:[28,3,1,""]},"hat.peg.Literal":{value:[28,3,1,""]},"hat.peg.MatchCallFrame":{data:[28,3,1,""],name:[28,3,1,""]},"hat.peg.MatchResult":{node:[28,3,1,""],rest:[28,3,1,""]},"hat.peg.Node":{name:[28,3,1,""],value:[28,3,1,""]},"hat.peg.Not":{expression:[28,3,1,""]},"hat.peg.OneOrMore":{expression:[28,3,1,""]},"hat.peg.Optional":{expression:[28,3,1,""]},"hat.peg.Sequence":{expressions:[28,3,1,""]},"hat.peg.ZeroOrMore":{expression:[28,3,1,""]},"hat.sbs":{Repository:[29,1,1,""],default_schemas_sbs_path:[29,3,1,""]},"hat.sbs.Repository":{decode:[29,2,1,""],encode:[29,2,1,""],from_json:[29,2,1,""],to_json:[29,2,1,""]},"hat.translator":{common:[17,0,0,"-"],main:[17,0,0,"-"]},"hat.translator.common":{Translate:[17,3,1,""],Translator:[17,1,1,""]},"hat.translator.common.Translator":{input_schema:[17,3,1,""],input_type:[17,3,1,""],output_schema:[17,3,1,""],output_type:[17,3,1,""],translate:[17,3,1,""]},"hat.translator.main":{builtin_translators:[17,3,1,""],main:[17,4,1,""]},"hat.util":{aio:[30,0,0,"-"],common:[30,0,0,"-"],json:[30,0,0,"-"]},"hat.util.aio":{Group:[30,1,1,""],Queue:[30,1,1,""],QueueClosedError:[30,5,1,""],QueueEmptyError:[30,5,1,""],QueueFullError:[30,5,1,""],call:[30,4,1,""],call_on_cancel:[30,4,1,""],create_executor:[30,4,1,""],first:[30,4,1,""],init_asyncio:[30,4,1,""],mlog:[30,3,1,""],run_asyncio:[30,4,1,""],uncancellable:[30,4,1,""]},"hat.util.aio.Group":{async_close:[30,2,1,""],close:[30,2,1,""],closed:[30,2,1,""],closing:[30,2,1,""],create_subgroup:[30,2,1,""],is_open:[30,2,1,""],spawn:[30,2,1,""],wrap:[30,2,1,""]},"hat.util.aio.Queue":{close:[30,2,1,""],closed:[30,2,1,""],empty:[30,2,1,""],full:[30,2,1,""],get:[30,2,1,""],get_nowait:[30,2,1,""],get_nowait_until_empty:[30,2,1,""],get_until_empty:[30,2,1,""],maxsize:[30,2,1,""],put:[30,2,1,""],put_nowait:[30,2,1,""],qsize:[30,2,1,""]},"hat.util.common":{CallbackRegistry:[30,1,1,""],EnvPathArgParseAction:[30,1,1,""],LogRotatingFileHandler:[30,1,1,""],RegisterCallbackHandle:[30,1,1,""],extend_enum_doc:[30,4,1,""],first:[30,4,1,""],namedtuple:[30,4,1,""],parse_env_path:[30,4,1,""],parse_url_query:[30,4,1,""]},"hat.util.common.CallbackRegistry":{notify:[30,2,1,""],register:[30,2,1,""]},"hat.util.json":{Data:[30,3,1,""],Format:[30,1,1,""],SchemaRepository:[30,1,1,""],decode:[30,4,1,""],decode_file:[30,4,1,""],diff:[30,4,1,""],encode:[30,4,1,""],encode_file:[30,4,1,""],equals:[30,4,1,""],patch:[30,4,1,""]},"hat.util.json.Format":{JSON:[30,3,1,""],YAML:[30,3,1,""]},"hat.util.json.SchemaRepository":{from_json:[30,2,1,""],to_json:[30,2,1,""],validate:[30,2,1,""]},hat:{duktape:[25,0,0,"-"],juggler:[27,0,0,"-"],peg:[28,0,0,"-"],sbs:[29,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:data"},terms:{"0x00":29,"0x01":29,"abstract":[10,28],"boolean":[0,2,4,10,16,20],"byte":[4,20,22,23,24,28],"case":[15,30],"char":28,"class":[2,12,15,16,17,22,23,24,25,27,28,29,30],"const":30,"default":[1,2,12,15,16,17,18,19,20,25,28,29,30],"enum":[2,12,15,16,27,30],"export":[29,30],"final":20,"float":[16,27],"function":[3,7,10,12,15,16,17,18,19,20,25,26,28],"import":[7,10,12,15,16,28,29],"int":[22,23,24,28,29,30],"kon\u010dar":19,"new":[7,10,12,15,16,17,20,22,23,24,27,28,29,30],"null":[2,12,15,16,27,29],"return":[7,10,12,15,16,17,22,23,24,25,27,28,29,30],"short":20,"static":[15,27,29,30],"switch":16,"true":[0,2,7,10,16,20,29,30],"try":[10,12,15,30],"while":[7,10,15,20],AND:28,And:28,CTS:2,For:[7,12,15,16,19,22,23,25,27,28,30],Its:7,NOT:28,Not:28,One:20,RTS:2,SBS:[1,7,18,20,29],The:[7,10,12,15,20,30],There:15,These:[7,10,15,20,21,29],Use:30,With:[7,10],__file__:[7,10,12,15],__main__:[7,10,12,15,16],_run_cod:[7,10,12,15,16],_run_module_as_main:[7,10,12,15,16],abc:29,about:[7,15],abstracteventloop:[24,30],acc:28,access:[7,10],accord:[7,10,12,15,29,30],achiev:20,across:30,action:[7,28,30],activ:[10,12,15,16,19,20,22,23,27],actual:20,adapt:[2,18],adaptereventcli:12,adaptersess:12,adaptersessioncli:12,add:[7,27],added:[7,30],adding:[17,30],addit:[2,7,10,15,16,17,20,24,27,30],addition:[10,12,15,16],addr:23,address:[2,4,15,23,24,27],after:[7,10,12,15,16,30],against:30,aggreg:7,aio:30,algorith:15,algorithm:2,all:[2,7,10,12,15,16,19,20,23,25,27,29,30],allow:7,alreadi:15,also:[7,10,12,15,16,20,30],altern:16,alwai:[7,15],ani:[7,10,12,15,16,25,28,30],anoth:[12,20,29,30],api:[7,19,25],appendix:18,appli:[2,7,10,15,16,20,27,28,30],applic:[3,16,19,27],appropri:[7,10,12,20,28],arbitrari:[7,12,27,29],arch:19,architectur:15,archiv:12,archlinux:19,arg:[2,16,29,30],argpars:30,argument:[2,12,16,17,24,29,30],arrai:[2,4,15,16],ascend:[4,7],assert:[28,29],assign:[7,15],associ:[2,7,10,12,15,16,19,20],associd:12,assum:[15,27,30],assumpt:15,ast:28,async:[12,15,16,19,22,23,24,27,30],async_clos:[7,12,15,16,22,23,24,27,30],asynchron:[12,15,27],asyncio:[12,15,16,22,23,24,27,30],asynciter:30,attr:12,attribut:12,authent:12,author:12,autom:19,automat:16,avail:[7,10,12,15,16,17,19,20,21,30],await:30,back:[20,27],backend:[2,18],backend_engin:2,banana:12,base64:12,base:[7,10,12,15,16,17,19,20,22,23,24,25,27,28,29,30],basi:[7,15],basic:[15,20,21,27],baud:2,baudrat:2,becaus:15,becom:[7,10,12,15,16,17],befor:[7,15,30],begin:29,behavior:[15,20],better:[12,22],between:[2,7,10,12,15,16,20,27,29],bidirect:[10,12,15],big:[20,29],binari:[4,7,12,16,18,19,26],binary64:29,bind:20,bit:[2,29],bless:4,bless_al:[2,15],bless_on:[2,15],block:[20,30],bodi:[12,20],bool:[16,24,29,30],both:[7,12,27],bound:[7,12,20],browser:16,bryan:28,buffer:16,built:[19,29],builtin:[17,29],builtin_transl:17,bundl:12,bytearrai:29,bytes:2,cach:[15,25,27],calcul:15,calculate_bless:15,call:[7,10,12,15,16,23,28,30],call_on_cancel:30,call_stack:28,callabl:[16,23,27,28,30],callback:[12,16,23,27,28,30],callbackregistri:30,can:[2,7,10,12,15,16,17,19,20,27,28,29,30],cancel:[22,30],cancellederror:30,cannot:30,care:[7,10],caught:30,caus:7,caution:30,central:[7,10,15],certain:7,chang:[7,12,15,16,27],channel:15,charact:29,chatter:[3,7,10,12,15,18,19,26],chatter_sbs_repo:[7,10,12,15],check:[2,22],child:[12,16,28,30],children:30,choic:[7,28,30],choos:12,chosen:15,cid:[4,15],client:[2,10,12,16,19,20,27],close:[7,10,12,15,16,20,22,23,24,27,28,30],cls:30,code:[7,10,12,15,16,17,19,25],collect:[12,15,19,25,29,30],collid:7,color:12,com3:2,com:19,come:17,command:[2,16,17],comment:[28,29],common:[12,17,30],commun:[2,18,19,21,22,26],comparison:30,complement:29,complet:30,compon:[0,2,4,10,12,17,18,19,20,27],component_address:2,componentinfo:[4,15],composit:29,comput:15,concaten:29,concurr:[7,30],condit:7,conf:[12,15,16,22],conf_path:2,configur:[2,7,10,12,15,16,17,19,22],conn:12,connect:[2,7,10,12,15,16,20,22,23,27],connection_cb:[23,27],connectionclosederror:27,connectioninfo:23,consecut:2,consid:[16,17,20,29,30],consist:[12,15,19,20,27],consol:[16,28],console_debug_cb:28,constant:[12,16,25],constantli:16,constructor:2,consum:10,contain:[7,12,15,16,17,19,20,27,29,30],content:[7,12,29,30],continu:[7,10,12,15,27,30],control:[2,7,12,15,16,19],convent:7,convers:[7,15],convert:7,coordin:7,core:[7,10,12,15,16,19],coroutin:[12,15,16,22,23,24,27,30],correct:16,correspond:[7,20],could:[10,12],count:[15,29],counter:[16,20],cpython:19,creat:[0,7,10,12,15,16,17,19,22,23,24,27,28,29,30],create_datagram_endpoint:24,create_devic:10,create_executor:30,create_subgroup:30,create_timeout:16,create_view_manag:12,creation:[7,23,30],criteria:7,cross:[16,19],css:12,ctrl_break_ev:[16,30],ctype:25,current:[2,7,10,12,15,16,19,20,25,27,30],custom:[10,12,20],daemon:[16,19],data:[2,4,7,10,12,15,16,17,20,22,23,24,27,28,30],data_str:30,databas:2,datagram:24,date:2,datefmt:2,db_path:2,debug:28,debug_cb:28,debugg:28,declar:12,decod:[7,29,30],decode_fil:[7,10,12,15,16,30],decoded_data:29,decript:2,default_act:28,default_algorithm:[2,15],default_duktape_path:25,default_rank:2,default_schemas_sbs_path:29,defin:[7,10,12,15,16,20,22,27,28,29],definit:[1,12,15,16,17,18,20,28],delai:[2,16,27],deleg:15,delet:[7,10],delimit:29,deliv:[12,27],depend:[2,7,10,12,15,16],depth:28,deriv:[29,30],descend:[4,7],describ:[7,15,16,28],descript:[2,7,12,16,30],descriptor:20,design:29,dest:30,destroi:[0,10,12],detail:[7,25],detect:[7,20],determin:[7,15,20],determinist:16,dev:2,develop:19,devic:[0,2,7,18,19,21],device_nam:[0,10],device_typ:[0,10],deviceeventcli:10,dict:[12,15,28,29,30],dictionari:[12,30],diff:30,differ:[7,10,15,30],direcori:29,direct:[7,15,20,29],directli:[7,16,25],directori:[2,7,10,12,15,16,20,27,29,30],disabl:[2,10],disable_existing_logg:2,discard:7,disconnect:7,discov:15,discoveri:[15,19],dist:19,distinct:[20,27],distribut:[15,16,19],div:12,doc:19,document:[7,12,25,30],doe:[7,15,20],doesn:[7,10,15,16,28],doit:19,dom:19,don:15,done:[7,16,27],dot:28,doubl:29,driver:[2,18,19,22,23,24,26],dsr:2,dsrdtr:2,dst:30,dtr:2,ducktap:25,due:[15,16],duktap:[18,19,26],dummi:[7,10,12,18],duplex:[20,27],durat:15,dure:[7,10,12,15,16,17],dynam:[12,25],dynamicli:17,each:[7,10,12,15,16,17,19,20,27,28,29,30],earliest:7,easier:19,editor:17,effect:[16,30],effici:29,eightbit:2,either:12,electr:19,electron:19,element:[7,12,29,30],els:[28,30],empti:[7,24,30],enabl:[0,2,7,10,12,15,16,27,29,30],encapsul:12,encod:[0,2,7,10,12,15,16,17,20,27,30],encode_fil:30,encoded_data:29,end:[7,20,27,29],endian:[20,29],endless:7,endoffil:28,endoflin:28,endpoint:24,enforc:12,engin:19,enhanc:7,ensur:30,enter:16,entir:[7,15,29,30],entiti:[7,15],entri:[15,29],entry1:29,entry2:29,enumer:[15,16,30],enummeta:30,environ:[7,10,12,30],envpathargparseact:30,equal:[7,20,30],equival:12,errno:[7,10,12,15,16],error:[15,16,17,20,27],establish:[7,10,12,15,16,20,23,27],eval:25,evalu:[12,25],even:[15,16],event:[1,2,3,4,12,14,15,16,17,18,19,30],event_primari:17,event_server_group:2,eventid:4,eventlooppolici:30,eventpayload:4,eventtyp:4,everi:[15,30],exactli:15,exampl:[7,12,15,17,20,28,29],exceed:20,except:[7,16,27,28,29,30],exception_cb:30,exchang:[7,12,15,20,27],exclus:15,exec:[7,10,12,15,16],execut:[2,7,10,12,15,16,17,30],executor:30,executor_cl:30,exist:[2,15,16,20,27,30],exit:[16,17],expect:[16,20,27],explicitli:[7,27],expos:[12,16,25],expr:28,express:[18,19,26,29],extend:[17,30],extend_enum_doc:30,extens:[12,29],extern:[16,21],fail:[15,28],failur:[4,7],fals:[2,7,10,29,30],fashion:20,featur:[16,19,29],field:30,field_prop:30,file:[2,7,10,12,15,16,20,25,29,30],filenam:30,filenotfounderror:[7,10,12,15,16],filter:[2,7,10],find:7,fine:12,finish:[7,12,16,17,30],finit:20,first:[2,4,7,12,15,16,20,28,30],fivebit:2,flag:[7,15,16,20,30],flow:2,flush_local_data:27,folder:19,follow:[7,10,12,16,19,20,27,29],forc:27,forcefulli:16,ford:28,form:15,format:[2,17,20,27,29,30],formatt:2,forward:[12,16],foundat:28,framework:19,free:30,freeli:27,from:[2,7,10,12,15,16,17,20,28,29,30],from_json:[7,10,12,15,16,29,30],front:27,full:[2,7,12,20,27,30],functool:28,further:[7,12,27],futur:[12,19,22,23,24,27,30],garbag:25,gatewai:[2,14,18,19],gateway_nam:[0,2,10],gather:15,gener:[2,7,15,27,30],get:[7,12,25,30],get_nowait:30,get_nowait_until_empti:30,get_until_empti:30,git:19,github:19,given:20,global:[12,15,25],got:12,grain:12,grammar:[18,19,26],graphic:12,greater:7,greatest:7,green:12,group:[2,4,15,30],group_algorithm:[2,15],gui:[2,3,14,18,19,27],handl:30,handler:[2,30],happen:7,hard:16,hardwar:2,has:[7,12,16,20,29,30],hash:[2,12],hat:[2,4,7,10,12,15,16,17,19,20,21,22,23,24,25,27,28,29,30],hatev:4,hatmonitor:[4,15],hatp:[4,20],have:[7,10,15,20],header:20,help:[17,30],hex:[2,12,28],hierarch:[15,28],hierarchi:15,high:[7,25],higher:15,highest:15,highland:15,hold:[20,30],home:[7,10,12,15,16,19],homepag:19,horizont:15,host:[20,23,24,27],hostedtoolcach:[7,10,12,15,16],html:[12,25,27],http:[2,3,15,16,19,25,27],human:29,identcont:28,identif:[2,7,16,17],identifi:[7,10,12,15,17,20,28,29,30],identstart:28,ids:[4,7],ieee:29,ietf:27,ignor:[2,12,16,20,29,30],immedi:[12,15,16,30],immut:7,implement:[2,19],implicitli:[7,16],improv:12,inc:19,includ:[7,15,16,20,21,29,30],increment:[2,20],indent:30,independ:[7,12,15,27,30],index:[12,29],indic:15,individu:12,industri:19,infinit:30,info:23,inform:[7,16,17,19],infrastructur:[15,20,27],inherit:30,init:[12,25,30],init_asyncio:30,initi:[7,10,12,15,16,20,25,27,29,30],initial_view:2,inner:7,input:[12,16,17,28],input_schema:17,input_typ:17,insid:[7,12],instal:[7,10,12,15,16,17],instanc:[4,7,10,12,15,16,17,22,23,24,25,28,30],instanti:7,instead:[7,17,30],integ:[2,4,15,16,20],integr:[15,20],intellig:19,interact:12,interconnect:19,interfac:[2,10,12,17,19,21,25,30],interfer:7,intermediari:10,intern:[7,12],interpret:25,interrupt:[16,30],interv:2,intkeycollect:29,introduc:27,introduct:18,invalid:7,involv:[7,16],iot:19,is_open:30,isn:[7,15,16,20],issu:[0,10,12,15,16,19],item:[2,12,15,16,30],iter:[7,30],its:[7,12,15,20,30],itself:[15,28],javascript:[12,25],join:[12,28],json:[0,1,4,7,10,12,15,16,17,18,19,22,27,29,30],json_schema_repo:[12,16],jsonschema:30,juggler:[12,15,16,18,19,26],just:29,keep:[7,10,15],kei:[2,12,28,29],kept:15,ket:19,keyboardinterrupt:30,keyword:[2,30],know:15,koncar:19,kwarg:[24,30],label:17,lambda:[28,30],languag:29,last:[4,7,10,12,15,16,17,20,29,30],latenc:27,later:15,latest:7,layer:20,leaf:28,least:[7,15,30],leftarrow:28,length:[20,29],less:30,level:[2,7,25,30],lexic:28,lib:[7,10,12,15,16,25],librari:[15,18,19,21,25,30],lifetim:[7,10,16],limit:[7,21],line:[2,7,10,12,15,16,17,29],linux:19,list:[2,7,12,15,16,17,19,23,28,29,30],listen:[2,15,16,23,27],liter:28,load:[7,12,17],local:[2,12,15,16,23,24,27],local_addr:[23,24],local_data:27,localhost:2,log:[2,15,16,22,23,27,30],logger:[2,15,22,23,27,30],logic:[7,10],login:12,logout:12,logrotatingfilehandl:30,loop:[7,15,30],lost:15,low:[7,25],lower:[7,15],lowest:[7,15],lstrip:12,machin:16,made:[7,15,27],mai:7,main:[2,7,10,12,15,16,17],main_glob:[7,10,12,15,16],maintain:[7,15],malfunct:15,manag:[10,12,16,19,30],mandat:15,mandatori:[15,29],mani:7,manipul:30,map:[7,10,15,16,25],massag:15,master:[2,3],match:[7,10,15,28],matchcallfram:28,matchcallstack:28,matchresult:28,mathemat:15,max:[7,24],maximum:30,maxresult:4,maxsiz:30,mayb:[4,10,20,29],mean:[7,15],mechan:[15,20],member:30,memoryview:29,messag:[2,7,10,12,15,16,17],met:7,metavar:30,method:[7,12,23,30],mid:[4,15],mimic:20,mind:7,minim:29,minimum:2,mlog:[15,22,23,27,30],mode:15,modifi:7,modul:[2,4,10,12,15,16,17,18,19,20,22,23,27,29,30],module_engin:2,module_nam:29,modulenam:29,moment:[7,12],monitor:[2,3,4,10,12,14,16,18,19,28],monitor_address:2,more:[7,15,19],most:[7,10,12,15,16,20,29],msg:[4,12,20,27],msgclient:[4,15],msgmaster:[4,15],msgnotifi:[4,7],msgping:[4,20],msgpong:[4,20],msgqueryr:[4,7],msgqueryreq:[4,7],msgregisterr:[4,7],msgregisterreq:[4,7],msgserver:[4,15],msgsetrank:[4,15],msgslave:[4,15],msgsubscrib:[4,7],msys2:19,multi:12,multipl:[7,15,17,19,20,30],must:[7,29],mutual:[7,12],name:[2,4,7,12,15,16,17,19,20,23,25,28,29,30],namedtupl:30,namespac:12,narg:30,necessari:[15,20],need:22,neither:15,never:15,new_typ:29,newli:[7,10,15],node:[15,28],nodej:19,non:[16,17],none:[4,7,10,12,15,16,20,23,24,25,27,28,29,30],notabl:30,note:15,noth:29,notif:[7,10,15,30],notifi:[7,15,16,27,30],npm:19,nrt:28,number:[2,7,12,15,16,20,22,27,29,30],numer:[7,30],object:[2,7,12,15,16,22,23,24,25,27,28,29,30],observ:7,obtain:[7,12,15],occur:[7,16,17],omit:29,onc:[7,10,12,15,16,20,27,30],one:[7,15,16,19,20,29,30],oneof:[15,16],oneormor:28,onli:[2,7,10,15,16,19,20,25,29,30],onmessag:12,open:[7,10,12,15,16,19,20,22,27,28],oper:[2,15,20,22],opportun:7,opt:[7,10,12,15,16],optim:[27,29],option:[0,7,10,12,15,16,17,20,24,25,27,28,29,30],option_str:30,orang:12,orchestr:[2,3,10,14,18,19],order:[4,7,15,20,29],orderbi:4,org:[2,15,16,19,25,27],organ:29,other:[7,10,12,15,16,20,21,27,28,29,30],other_typ:29,otherwis:[16,30],output:[12,16,17],output_schema:17,output_typ:17,outsid:7,overhead:7,overli:16,overridden:30,own:7,owner:[4,20],packag:[7,10,12,15,16,17],package_path:16,pacman:19,page:16,pair:[12,17,23,28],paper:28,paramet:[12,15,16,20,22,23,24,25,27,28,29,30],parametr:29,parent:[2,7,10,12,15,30],parenthesi:29,pariti:2,parity_even:2,parity_mark:2,parity_non:2,parity_odd:2,parity_spac:2,pars:[12,18,19,26,30],parse_env_path:30,parse_url_queri:30,parser:[12,28],part:[7,10,12,15,16,17,19,20,25,27,29],parti:27,particip:15,pass:[2,7,10,20,24,27],password:[2,12],patch:[27,30],path:[2,7,10,12,15,16,17,25,27,29,30],pathlib:[15,16,25,29,30],pathlik:[27,30],patternproperti:[2,12],payload:[0,4,7,10,15,16,27],peer:[15,20,27],peg:[19,28],perform:[15,16],period:[16,20,22,27,30],persist:[7,10,15],pid:16,ping:4,pip:19,place:29,plant:19,platform:[16,19],plc:19,plu:28,point:[20,29,30],polici:30,polymorph:29,pong:20,pool:2,port:[1,2,18,20,22,23,24,27],posit:[7,17],possibl:[7,15,29,30],post:7,power:19,precis:29,predefin:[7,17,20,27,29],predic:30,prefix:[10,12,20,28,29],preload:12,prepar:16,prerequisit:27,present:[7,12,15],preserv:15,presum:15,prevent:25,previosli:30,previou:[7,15,27],previous:[7,10,15,16,30],primari:[10,15,16,17,28],primarili:12,prior:[10,12,20,27],prioriti:15,procedur:[10,12,16],process:[2,7,10,12,15,16],processev:7,proclaim:15,produc:7,product:28,program:17,project:[19,30],prompt:16,propag:[2,30],properti:[2,7,12,15,16,22,23,24,27,28,30],protocol:[3,10,12,15,16,18,19,23,26],provid:[2,7,10,12,15,16,17,19,27,30],proxi:12,pub:19,purepath:[29,30],purpos:15,put:[10,30],put_nowait:30,pydoit:19,python3:[7,10,12,15,16],python:2,qsize:30,queri:[2,7,10,30],query_pool_s:2,querydata:4,question:28,queu:16,queue:[24,30],queue_siz:24,queueclosederror:30,queueemptyerror:30,queuefullerror:30,rais:[27,28,30],raise_cancel:30,rang:[7,28],rank:4,rate:2,read:[12,16,17,22,23],readabl:29,readi:[4,15],real:[12,16],reason:15,receiv:[7,10,12,15,20,24,27,28],recent:[7,10,12,15,16],recept:30,recognit:28,recommend:15,recurs:[7,12,28,30],recursivli:29,redirect:16,reduc:28,redund:[15,19],ref:[2,15,16],refer:[7,12,29],regard:7,regardless:10,regex:29,regist:[0,7,10,16,27,30],register_change_cb:[16,27],registercallbackhandl:[16,27,30],registerev:[4,7],registr:[7,10,30],registri:[15,30],rel:12,relat:[7,30],relev:7,reli:12,reliabl:15,remain:[15,16,28],remot:[10,12,15,19,20,23,24,27],remote_addr:[23,24],remote_data:27,remov:30,render:[12,19],repeatedli:[10,12],repetit:16,replac:[7,16,30],repo:29,repositori:[7,10,12,15,19,20,29,30],repres:[0,2,7,10,12,15,16,17,20,27,28,29],represent:[12,29,30],request:[0,7,10,12,15,20],requir:[0,2,10,12,15,16,19,27,30],rerais:30,resourc:12,respect:12,respond:[7,12],respons:[7,10,12,15,16,20],rest:[28,29],restart:16,result:[7,12,17,20,28,30],retri:15,retriev:7,reusabl:19,revers:[7,10],review:27,reviv:[2,16],revok:15,rfc6902:27,rfc:20,role:[2,12],root:[2,12],rotatingfilehandl:30,rtsct:2,rule:12,run:[0,19,30],run_asyncio:30,run_glob:[7,10,12,15,16],run_in_executor:30,runner:[7,10,12,15,16],runpi:[7,10,12,15,16],salt:2,same:[7,10,15,17,27,29,30],sandbox:[7,10],satisfi:30,sbs:[2,4,7,10,12,15,19,20,29],sbs_repo:[7,10,12,15],schedul:30,schema:[1,12,15,16,17,18,20,27,30],schema_id:30,schemarepositori:[12,16,30],schemas_sb:[20,29],scheme:20,search:[29,30],second:[2,12,15,16,20,27,30],secondari:15,see:[7,15,16,19,20,22,23,25,27,30],segment:[20,30],select:7,selector:12,self:[7,20],semant:7,send:[7,10,12,15,16,20,24,27],sent:[7,12,20,27],sequenc:[20,28],sequenti:[7,16,29,30],serial:[2,18,19,20,21,26],serializ:[12,27,29,30],serv:10,server:[2,3,4,14,16,18,19,20,23,27],server_connects_close_timeout:27,server_id:2,servic:[15,16,19],session:[7,12],set:[0,2,7,10,15,16,17,20,21,24,25,27,29,30],set_local_data:27,set_rank:15,set_rev:16,sevenbit:2,sha:[2,12],shall:7,share:[12,16],shell:2,shema:29,shield:30,should:[7,10,12,15,16,27,28,29,30],show:17,side:[7,12,15],sigbreak:30,sigint:[16,30],sigint_timeout:16,sigkil:16,sigkill_timeout:16,sign:29,signal:[16,27,30],signific:[20,29],sigterm:30,silent:2,silent_interv:2,simpl:[7,15,16,17,18,19,26,28],simultan:20,singl:[7,10,12,15,16,17,20,27,29],sixbit:2,size:[22,24,27,29,30],slash:28,slot:30,small:[15,29],smart:12,socket:[15,23],soft:16,soon:16,sourc:[0,7,10,19],sourcetfrom:4,sourcetimestamp:4,sourcetto:4,space:[28,29],span:[12,29],spawn:[16,30],special:7,specif:[10,12,15,16,17,19,20,27],specifi:[10,15,29],split:[12,15,16,19],sponsor:19,spontan:7,sqlite3:19,sqlite:[2,7,18],src:30,src_py:[7,10,12,15,16],ssl:20,stack:28,standard:[16,30],star:28,start:[0,2,7,10,12,15,16,17,20,28,29],start_delai:16,startup:[2,12,15,16],state:[10,12,15,19],static_path:27,statu:[0,10,15,16],stderr:17,stdin:17,stdout:17,step:28,stop:[0,2,10,15,16,28,30],stopbit:2,stopbits_on:2,stopbits_one_point_f:2,stopbits_two:2,storag:[7,19],store:[7,12],str:[12,15,16,17,23,24,25,27,28,29,30],stream:[12,20],string:[2,4,7,12,15,16,20,30],stringio:12,strip:12,strkeycollect:29,structur:[2,7,12,15,17,20],style:12,sub:19,subdirectori:12,subgroup:30,subnod:28,subscrib:[7,10],subscript:[7,12],subsequ:30,subset:7,substitut:7,subtyp:[7,17],success:10,successfulli:[0,10,12,28],suffix:[28,30],sum:28,superior:15,supervis:15,support:[10,12,15,27,29],suppress:30,svg:12,symmetr:27,sync:[7,27],sync_local_delai:27,synchron:27,syntact:28,syntax:28,system:[0,2,7,10,12,15,19,21],tabl:29,tag:12,take:30,taken:[7,10],target:19,task:[19,30],tcp:[1,2,18,20,23],temporari:16,temporarili:30,termin:[10,12,15,16,20],terminateprocess:16,test:30,text:[12,27],tfrom:4,than:[7,12,15,30],thei:[7,12,27],theirs:15,them:[15,30],thi:[2,7,10,12,15,16,17,19,20,23,27,28,29,30],those:[7,15,16],thread:30,threadpoolexecutor:30,through:[7,15],thu:15,time:[2,7,10,12,15,16,27,28],timeout:[2,15,16,20,22,27],timestamp:[0,4,7,10],titl:2,to_json:[29,30],togeth:15,token:[4,7,15,20],tool:[19,27],toolkit:16,top:[20,23],total:16,tpkt:[18,21],traceback:[7,10,12,15,16],traction:19,transfer:27,transform:[12,17,19],transit:16,translat:[7,10,14,16,18,19,29],transmit:[15,27],transport:23,tree:[12,28],tri:15,trigger:[7,15],trust:15,tto:4,ttyusb0:2,tupl:[4,12,17,20,23,24,28,30],two:[2,15,20,29],txt:[12,19],type:[2,4,7,10,12,15,16,17,20,22,23,24,25,27,28,29,30],type_nam:29,udp:[18,21],uncancel:30,unconstrain:29,undefin:7,under:15,underli:[20,27],understand:7,uninterrupt:30,union:[4,28,30],uniqu:[2,7,10,12,15,17,20],uniquetyp:4,unix:12,unlimit:15,unrel:7,unstabl:19,unsuccess:12,unsuccessfulli:28,until:[7,10,30],updat:[12,15],upon:[7,16,20,27,30],uri:20,url:[27,30],usabl:29,usag:[12,17,20,28,29],use:[2,15,19,30],used:[2,7,10,12,15,16,17,19,20,21,24,25,27,28,29,30],user:[2,7,12,22,29],uses:[15,27],using:[7,20,29,30],usual:[12,15,16,20],utf:[7,10,12,15,16,27,29],util:[7,10,12,15,16,18,19,26,27],uvloop:30,valid:[12,29,30],validationerror:30,valu:[0,2,10,12,15,16,20,25,27,28,29,30],varg:30,variabl:[29,30],variant:17,version:2,vertic:15,view:[2,15,18],view_path:2,viewmanag:12,virtual:[12,19],visual:20,wai:[7,16,22],wait:[10,15,20,27,30],walk_ast:28,want:7,warn:30,watch:12,watermelon:12,web:[2,15],webserv:[15,16],websocket:27,when:[0,7,10,12,15,16,20,27,30],whenev:7,where:[10,12,15,19,20,28,29],whether:7,which:[0,7,10,12,15,16,17,19,20,27,28,29,30],white:29,who:[7,20],whole:7,whose:[7,12,20],win:19,window:[16,19,30],windowsproactoreventlooppolici:30,without:[16,29,30],woken:30,work:[2,7,10,12,15,16],wrap:30,wrapper:[7,18,19,22,24,26,30],write:[2,22,23],written:[7,29],wss:27,www:19,x64:[7,10,12,15,16],xml:12,xmln:12,yaml:[2,12,15,16,17,22,30],yarn:19,yml:[12,30],zealou:16,zero:[7,15,17,29,30],zeroormor:28,zip:[12,28]},titles:["Event definitions","Appendix","JSON Schema definitions","Default TCP ports","SBS Schema definitions","Dummy backend","Sqlite backend","Event Server","Dummy module","Dummy device","Gateway","Dummy adapter","GUI Server","Dummy view","Components","Monitor Server","Orchestrator","Translator","Content","Introduction","Chatter communication protocol","Drivers","Serial","TPKT","UDP","Duktape wrapper","Libraries","Juggler communication protocol","Parsing expression grammar","Simple binary serialization","Utility functions"],titleterms:{"boolean":29,"byte":29,"default":3,"float":29,"function":30,SBS:4,action:16,adapt:[11,12],address:20,algorithm:15,appendix:1,arrai:29,backend:[5,6,7,12,15,16],binari:29,bless:15,build:19,chatter:20,client:[7,15],common:[7,15],commun:[7,10,12,15,16,20,27],compon:[7,14,15,16],content:18,convers:20,data:29,definit:[0,2,4,29],depend:19,devic:[9,10],document:19,driver:21,duktap:25,dummi:[5,8,9,11,13],encod:29,engin:[7,10],event:[0,7,10],express:28,featur:15,frontend:[12,15,16],futur:[15,16],gatewai:[0,10],grammar:28,gui:12,implement:[7,10,12,15,16,17,20,22,23,24,25,27,28,29,30],improv:16,inform:15,instal:19,integ:29,interfac:[15,16],introduct:19,javascript:19,json:2,juggler:27,librari:26,lifetim:15,master:15,messag:[20,27],model:[15,27],modul:[7,8],monitor:15,orchestr:16,overview:[10,12],packag:19,pars:28,ping:20,port:3,possibl:16,protocol:[20,27],proxi:10,python:[7,10,12,15,16,17,19,20,22,23,24,25,27,28,29,30],rank:15,run:[7,10,12,15,16,17],schema:[2,4,29],serial:[22,29],server:[7,10,12,15],servic:20,simpl:29,slave:15,sqlite:6,state:16,string:29,tcp:3,todo:[7,10,12,15,17,27],tpkt:23,translat:17,tupl:29,udp:24,union:29,user:[15,16],util:30,view:[12,13],web:16,wrapper:25}})