_ = ShowcaseConstants_.prototype;
_.cwVerticalSplitPanelText = function cwVerticalSplitPanelText(){
  return 'This is some text to show how the contents on either side of the splitter flow.';
}
;
function $onInitialize_22(this$static){
  var decPanel, randomText$1, vSplit;
  vSplit = new VerticalSplitPanel_0;
  $ensureDebugId(vSplit, 'cwVerticalSplitPanel');
  vSplit.setSize('500px', '350px');
  $setSplitPosition_1(vSplit, '30%');
  randomText$1 = new ObjectRef_0(this$static.constants.cwVerticalSplitPanelText() + ' ');
  $foreach($until_0($intWrapper(($clinit_Predef$() , MODULE$_12 , 0)), 2), new CwVerticalSplitPanel$$anonfun$onInitialize$1_0(randomText$1));
  $setTopWidget(vSplit, new HTML_1(dynamicCast(randomText$1.elem, Q$String)));
  $setBottomWidget(vSplit, new HTML_1(dynamicCast(randomText$1.elem, Q$String)));
  decPanel = new DecoratorPanel_0;
  decPanel.setWidget(vSplit);
  return decPanel;
}

_ = CwVerticalSplitPanel$$anon$1.prototype;
_.onSuccess = function onSuccess_23(){
  this.callback$1.onSuccess_0($onInitialize_22(this.$outer$u0020));
}
;
function $$init_430(){
}

function $apply_52(this$static){
  this$static.randomText$1.elem = dynamicCast(this$static.randomText$1.elem, Q$String) + dynamicCast(this$static.randomText$1.elem, Q$String);
}

function CwVerticalSplitPanel$$anonfun$onInitialize$1_0(randomText$1){
  $$init_430();
  this.randomText$1 = randomText$1;
  AbstractFunction1_0.call(this);
}

function CwVerticalSplitPanel$$anonfun$onInitialize$1(){
}

_ = CwVerticalSplitPanel$$anonfun$onInitialize$1_0.prototype = CwVerticalSplitPanel$$anonfun$onInitialize$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_53(v1){
  $apply_52(this, unboxToInt(v1));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_431(){
  return Lcom_google_gwt_sample_showcase_client_content_panels_CwVerticalSplitPanel$$anonfun$onInitialize$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.randomText$1 = null;
function getOffsetHeight_1(elem){
  $clinit_UIObject();
  return getElementPropertyInt(elem, 'offsetHeight');
}

function setHeight_1(elem, height){
  $clinit_UIObject();
  setStyleAttribute(elem, 'height', height);
}

function $$init_661(this$static){
  this$static.impl = new VerticalSplitPanel$Impl_0;
}

function $buildDOM_0(this$static, thumb){
  var bottomDiv, splitDiv, topDiv;
  topDiv = $getElement_1(this$static, 0);
  bottomDiv = $getElement_1(this$static, 1);
  splitDiv = $getSplitElement(this$static);
  appendChild($getElement(this$static), this$static.container);
  appendChild(this$static.container, topDiv);
  appendChild(this$static.container, splitDiv);
  appendChild(this$static.container, bottomDiv);
  setInnerHTML(splitDiv, "<div class='vsplitter' style='text-align:center;'>" + $getHTML(thumb) + '<\/div>');
  addScrolling(topDiv);
  addScrolling(bottomDiv);
}

function $setBottomWidget(this$static, w){
  $setWidget_3(this$static, 1, w);
}

function $setSplitPosition_1(this$static, pos){
  var topElem;
  this$static.lastSplitPosition = pos;
  topElem = $getElement_1(this$static, 0);
  setHeight_1(topElem, pos);
  $setSplitPosition_2(this$static.impl, getOffsetHeight_1(topElem));
}

function $setTopWidget(this$static, w){
  $setWidget_3(this$static, 0, w);
}

function VerticalSplitPanel_0(){
  VerticalSplitPanel_2.call(this, new VerticalSplitPanel_Resources_en_InlineClientBundleGenerator_0);
}

function VerticalSplitPanel_1(thumbImage){
  SplitPanel_0.call(this, createDiv(), createDiv(), preventBoxStyles(createDiv()), preventBoxStyles(createDiv()));
  $$init_661(this);
  this.container = preventBoxStyles(createDiv());
  $buildDOM_0(this, thumbImage);
  this.setStyleName('gwt-VerticalSplitPanel');
  this.impl.init_2(this);
  $setSplitPosition_1(this, '50%');
}

function VerticalSplitPanel_2(resources){
  VerticalSplitPanel_1.call(this, create_9(resources.verticalSplitPanelThumb()));
}

function VerticalSplitPanel(){
}

_ = VerticalSplitPanel_0.prototype = VerticalSplitPanel.prototype = new SplitPanel;
_.getClass$ = function getClass_662(){
  return Lcom_google_gwt_user_client_ui_VerticalSplitPanel_2_classLit;
}
;
_.onEnsureDebugId = function onEnsureDebugId_21(baseID){
  $onEnsureDebugId_0(this, baseID);
  ensureDebugId($getElement_1(this, 0), baseID, 'top');
  ensureDebugId($getElement_1(this, 1), baseID, 'bottom');
}
;
_.onLoad = function onLoad_8(){
  this.impl.onAttach();
  $setSplitPosition_1(this, this.lastSplitPosition);
  addCommand(new VerticalSplitPanel$1_0(this));
}
;
_.onSplitterResize = function onSplitterResize_0(x, y){
  this.impl.onSplitterResize_0(this.initialTopHeight + y - this.initialThumbPos);
}
;
_.onSplitterResizeStarted = function onSplitterResizeStarted_0(x, y){
  this.initialThumbPos = y;
  this.initialTopHeight = getOffsetHeight_1($getElement_1(this, 0));
}
;
_.onUnload = function onUnload_4(){
  this.impl.onDetach();
}
;
_.setHeight = function setHeight_3(height){
  $setHeight_0(this, height);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$HasWidgets$ForIsWidget, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Iterable]);
_.container = null;
_.initialThumbPos = 0;
_.initialTopHeight = 0;
_.lastSplitPosition = null;
function $$init_662(){
}

function VerticalSplitPanel$1_0(this$0){
  this.this$0 = this$0;
  Object_1.call(this);
  $$init_662();
}

function VerticalSplitPanel$1(){
}

_ = VerticalSplitPanel$1_0.prototype = VerticalSplitPanel$1.prototype = new Object_0;
_.execute_1 = function execute_16(){
  $setSplitPosition_1(this.this$0, this.this$0.lastSplitPosition);
}
;
_.getClass$ = function getClass_663(){
  return Lcom_google_gwt_user_client_ui_VerticalSplitPanel$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Command]);
_.this$0 = null;
function $$init_663(){
}

function $setSplitPosition_2(this$static, px){
  var newBottomHeight, rootElemHeight, splitElem, splitElemHeight;
  splitElem = $getSplitElement(this$static.panel);
  rootElemHeight = getOffsetHeight_1(this$static.panel.container);
  splitElemHeight = getOffsetHeight_1(splitElem);
  if (rootElemHeight < splitElemHeight) {
    return;
  }
  newBottomHeight = rootElemHeight - px - splitElemHeight;
  if (px < 0) {
    px = 0;
    newBottomHeight = rootElemHeight - splitElemHeight;
  }
   else if (newBottomHeight < 0) {
    px = rootElemHeight - splitElemHeight;
    newBottomHeight = 0;
  }
  this$static.updateElements($getElement_1(this$static.panel, 0), splitElem, $getElement_1(this$static.panel, 1), px, px + splitElemHeight, newBottomHeight);
}

function $updateElements(topElem, splitElem, bottomElem, topHeight, bottomTop){
  setHeight_1(topElem, topHeight + 'px');
  setTop(splitElem, topHeight + 'px');
  setTop(bottomElem, bottomTop + 'px');
}

function VerticalSplitPanel$Impl_0(){
  Object_1.call(this);
  $$init_663();
}

function expandToFitParentHorizontally_0(elem){
  addAbsolutePositoning(elem);
  setStyleAttribute(elem, 'left', '0');
  setStyleAttribute(elem, 'right', '0');
}

function VerticalSplitPanel$Impl(){
}

_ = VerticalSplitPanel$Impl_0.prototype = VerticalSplitPanel$Impl.prototype = new Object_0;
_.getClass$ = function getClass_664(){
  return Lcom_google_gwt_user_client_ui_VerticalSplitPanel$Impl_2_classLit;
}
;
_.init_2 = function init_5(panel){
  var bottomElem, topElem;
  this.panel = panel;
  setStyleAttribute($getElement(panel), 'position', 'relative');
  topElem = $getElement_1(panel, 0);
  bottomElem = $getElement_1(panel, 1);
  expandToFitParentHorizontally_0(topElem);
  expandToFitParentHorizontally_0(bottomElem);
  expandToFitParentHorizontally_0($getSplitElement(panel));
  expandToFitParentUsingCssOffsets(panel.container);
  setStyleAttribute(bottomElem, 'bottom', '0');
}
;
_.onAttach = function onAttach_6(){
}
;
_.onDetach = function onDetach_6(){
}
;
_.onSplitterResize_0 = function onSplitterResize_1(px){
  $setSplitPosition_2(this, px);
}
;
_.updateElements = function updateElements(topElem, splitElem, bottomElem, topHeight, bottomTop, bottomHeight){
  $updateElements(topElem, splitElem, bottomElem, topHeight, bottomTop);
}
;
_.panel = null;
function $clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator(){
  $clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator = nullMethod;
  _instance0_7 = new VerticalSplitPanel_Resources_en_InlineClientBundleGenerator_0;
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAArklEQVR42mNgAAI/Pz/xsLCweUC8KygoqJ4BBnx8fKRjYmJeBAQEPAwODr4THR39DIgPgSVBOoCCD+Pi4s5UVVWdaW5uPpOdnf02Pj7emyEiImJXYmLinUmTJp3ZsmXLmV27dp1pamp6UVxcXMgQFRXVnJ+f/xQkcerUqTMnTpw4W1tb+66trU0LbHRBQcH+urq6dz09PS9B9MSJExGOAgGgSnug0ekzZszQgokBAExeULnCXQAFAAAAAElFTkSuQmCC';
}

function $$init_664(){
}

function $verticalSplitPanelThumbInitializer(){
  verticalSplitPanelThumb = new ImageResourcePrototype_0('verticalSplitPanelThumb', fromTrustedString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAArklEQVR42mNgAAI/Pz/xsLCweUC8KygoqJ4BBnx8fKRjYmJeBAQEPAwODr4THR39DIgPgSVBOoCCD+Pi4s5UVVWdaW5uPpOdnf02Pj7emyEiImJXYmLinUmTJp3ZsmXLmV27dp1pamp6UVxcXMgQFRXVnJ+f/xQkcerUqTMnTpw4W1tb+66trU0LbHRBQcH+urq6dz09PS9B9MSJExGOAgGgSnug0ekzZszQgokBAExeULnCXQAFAAAAAElFTkSuQmCC'), 0, 0, 7, 7, false, false);
}

function VerticalSplitPanel_Resources_en_InlineClientBundleGenerator_0(){
  $clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator();
  Object_1.call(this);
  $$init_664();
}

function VerticalSplitPanel_Resources_en_InlineClientBundleGenerator(){
}

_ = VerticalSplitPanel_Resources_en_InlineClientBundleGenerator_0.prototype = VerticalSplitPanel_Resources_en_InlineClientBundleGenerator.prototype = new Object_0;
_.getClass$ = function getClass_665(){
  return Lcom_google_gwt_user_client_ui_VerticalSplitPanel_1Resources_1en_1InlineClientBundleGenerator_2_classLit;
}
;
_.verticalSplitPanelThumb = function verticalSplitPanelThumb_0(){
  return get_64();
}
;
var _instance0_7, verticalSplitPanelThumb = null;
function $clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator$verticalSplitPanelThumbInitializer(){
  $clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator$verticalSplitPanelThumbInitializer = nullMethod;
  $verticalSplitPanelThumbInitializer(($clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator() , _instance0_7));
}

function get_64(){
  $clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator$verticalSplitPanelThumbInitializer();
  return $clinit_VerticalSplitPanel_Resources_en_InlineClientBundleGenerator() , verticalSplitPanelThumb;
}

var Lcom_google_gwt_user_client_ui_VerticalSplitPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalSplitPanel', 'VerticalSplitPanel', Lcom_google_gwt_user_client_ui_SplitPanel_2_classLit), Lcom_google_gwt_user_client_ui_VerticalSplitPanel$Impl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalSplitPanel$Impl', 'VerticalSplitPanel$Impl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_VerticalSplitPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalSplitPanel$1', 'VerticalSplitPanel$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_panels_CwVerticalSplitPanel$$anonfun$onInitialize$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.panels.', 'CwVerticalSplitPanel$$anonfun$onInitialize$1', 'CwVerticalSplitPanel$$anonfun$onInitialize$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_user_client_ui_VerticalSplitPanel_1Resources_1en_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalSplitPanel_Resources_en_InlineClientBundleGenerator', 'VerticalSplitPanel_Resources_en_InlineClientBundleGenerator', Ljava_lang_Object_2_classLit);
$entry(onLoad)(25);
