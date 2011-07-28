_ = ShowcaseConstants_.prototype;
_.cwFlexTableAddRow = function cwFlexTableAddRow(){
  return 'Add a row';
}
;
_.cwFlexTableDetails = function cwFlexTableDetails(){
  return 'This is a FlexTable that supports <B>colspans<\/B> and <B>rowspans<\/B>.  You can use it to format your page or as a special purpose table.';
}
;
_.cwFlexTableRemoveRow = function cwFlexTableRemoveRow(){
  return 'Remove a row';
}
;
function $com$google$gwt$sample$showcase$client$content$tables$CwFlexTable$$addRow(flexTable){
  var numRows;
  numRows = $getRowCount(flexTable);
  $setWidget_2(flexTable, numRows, 0, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
  $setWidget_2(flexTable, numRows, 1, new Image_1($images(($clinit_Showcase$() , MODULE$_4)).gwtLogo()));
  $setRowSpan($getFlexCellFormatter(flexTable), 0, 1, numRows + 1);
}

function $com$google$gwt$sample$showcase$client$content$tables$CwFlexTable$$removeRow(flexTable){
  var numRows;
  numRows = $getRowCount(flexTable);
  if (numRows > 1) {
    $removeRow_0(flexTable, numRows - 1);
    $setRowSpan($getFlexCellFormatter(flexTable), 0, 1, numRows - 1);
  }
}

function $onInitialize_25(this$static){
  var addRowButton, buttonPanel, flexTable$1, removeRowButton;
  flexTable$1 = new FlexTable_0;
  flexTable$1.addStyleName('cw-FlexTable');
  flexTable$1.setWidth('32em');
  $setCellSpacing(flexTable$1, 5);
  $setCellPadding(flexTable$1, 3);
  $setHorizontalAlignment_0($getFlexCellFormatter(flexTable$1), 0, 1, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  $setHTML_2(flexTable$1, 0, 0, this$static.constants.cwFlexTableDetails());
  $setColSpan($getFlexCellFormatter(flexTable$1), 0, 0, 2);
  addRowButton = new Button_2(this$static.constants.cwFlexTableAddRow(), ($clinit_Handlers$() , MODULE$_2).fn2clickHandler(new CwFlexTable$$anonfun$1_0(this$static, flexTable$1)));
  addRowButton.addStyleName('sc-FixedWidthButton');
  removeRowButton = new Button_2(this$static.constants.cwFlexTableRemoveRow(), ($clinit_Handlers$() , MODULE$_2).fn2clickHandler(new CwFlexTable$$anonfun$2_0(this$static, flexTable$1)));
  removeRowButton.addStyleName('sc-FixedWidthButton');
  buttonPanel = new VerticalPanel_0;
  buttonPanel.setStyleName('cw-FlexTable-buttonPanel');
  $add_16(buttonPanel, addRowButton);
  $add_16(buttonPanel, removeRowButton);
  $setWidget_2(flexTable$1, 0, 1, buttonPanel);
  $setVerticalAlignment($getFlexCellFormatter(flexTable$1), 0, 1, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  $com$google$gwt$sample$showcase$client$content$tables$CwFlexTable$$addRow(flexTable$1);
  $com$google$gwt$sample$showcase$client$content$tables$CwFlexTable$$addRow(flexTable$1);
  $ensureDebugId(flexTable$1, 'cwFlexTable');
  return flexTable$1;
}

_ = CwFlexTable$$anon$1.prototype;
_.onSuccess = function onSuccess_26(){
  this.callback$1.onSuccess_0($onInitialize_25(this.$outer$u0020));
}
;
function $$init_445(){
}

function $apply_59(this$static){
  $com$google$gwt$sample$showcase$client$content$tables$CwFlexTable$$addRow(this$static.flexTable$1);
}

function CwFlexTable$$anonfun$1_0($outer, flexTable$1){
  $$init_445();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.flexTable$1 = flexTable$1;
  AbstractFunction1_0.call(this);
}

function CwFlexTable$$anonfun$1(){
}

_ = CwFlexTable$$anonfun$1_0.prototype = CwFlexTable$$anonfun$1.prototype = new AbstractFunction1;
_.apply_0 = function apply_60(v1){
  $apply_59(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_446(){
  return Lcom_google_gwt_sample_showcase_client_content_tables_CwFlexTable$$anonfun$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.flexTable$1 = null;
function $$init_446(){
}

function $apply_60(this$static){
  $com$google$gwt$sample$showcase$client$content$tables$CwFlexTable$$removeRow(this$static.flexTable$1);
}

function CwFlexTable$$anonfun$2_0($outer, flexTable$1){
  $$init_446();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.flexTable$1 = flexTable$1;
  AbstractFunction1_0.call(this);
}

function CwFlexTable$$anonfun$2(){
}

_ = CwFlexTable$$anonfun$2_0.prototype = CwFlexTable$$anonfun$2.prototype = new AbstractFunction1;
_.apply_0 = function apply_61(v1){
  $apply_60(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.getClass$ = function getClass_447(){
  return Lcom_google_gwt_sample_showcase_client_content_tables_CwFlexTable$$anonfun$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]);
_.$outer$u0020 = null;
_.flexTable$1 = null;
function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
}

function $setRowSpan(this$static, row, column, rowSpan){
  setElementPropertyInt($ensureElement(this$static, row, column), 'rowSpan', rowSpan);
}

var Lcom_google_gwt_sample_showcase_client_content_tables_CwFlexTable$$anonfun$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.tables.', 'CwFlexTable$$anonfun$1', 'CwFlexTable$$anonfun$1', Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_tables_CwFlexTable$$anonfun$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.tables.', 'CwFlexTable$$anonfun$2', 'CwFlexTable$$anonfun$2', Lscala_runtime_AbstractFunction1_2_classLit);
$entry(onLoad)(27);
