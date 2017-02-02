this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

this["squid_api"]["template"]["squid_api_FiltersSelector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <label class=\"noData ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mandatory), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.noDataMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noDataMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "warning fa fa-exclamation-circle";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <ul class=\"facets\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.facets), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <li data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"facet\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.available), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <div class=\"facet-name\">\n                    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </div>\n                <ul class=\"items\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </li>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " class=\"facet available\" ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <li data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"item\">\n                        <div class=\"facet-value\">\n                            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                        </div>\n                        <div class=\"facet-remove\">\n                            <i class=\"glyphicon glyphicon-remove\"></i>\n                        </div>\n                    </li>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"squid-api-FiltersSelector\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noData), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_facet_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul class=\"squid-api-action\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<li class=\"active\" selected=\"true\" data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-attr=\"";
  if (helper = helpers.dataAttr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dataAttr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n						<i class=\"fa fa-square-o\"></i><span>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n					</li>\n				";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<li data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-attr=\"";
  if (helper = helpers.dataAttr) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dataAttr); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n						<i class=\"fa fa-square-o\"></i><span>";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n					</li>\n				";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n				<li></li>\n			";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<span class='no-items'>\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.computingInProgress), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n	</span>\n";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return "\n			<span class=\"glyphicon glyphicon-refresh\"></span>\n		";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_paging_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n		<li class=\"previous\" data-id=\"prev\"><a href=\"#\"><i class=\"fa fa-arrow-left\"></i></a></li>\n		";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<li data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><a  href=\"#\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " class=\"active\" ";
  }

function program6(depth0,data) {
  
  
  return "\n		<li class=\"next\"  data-id=\"next\"><a  href=\"#\"><i class=\"fa fa-arrow-right\"></i></a></li>\n		";
  }

  buffer += "<div class=\"pagination squid-api-action\">\n	<ul class=\"pagination\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prev), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.pages), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_selected_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <label class=\"noData ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mandatory), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.noDataMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noDataMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "warning fa fa-exclamation-circle";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <ul class=\"facets\" id=\"squid_api_filters_categorical_selected_view\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.facets), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <li attr-id=\"";
  if (helper = helpers.facetItemId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetItemId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" attr-name=\"";
  if (helper = helpers.facetNameId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetNameId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"facet-name\">\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.facetName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </div>\n                <div class=\"facet-value\">\n                    "
    + escapeExpression(((stack1 = (depth0 && depth0.facetItem)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </div>\n                <div class=\"facet-remove\">\n                    <i class=\"glyphicon glyphicon-remove\"></i>\n                </div>\n            </li>\n        ";
  return buffer;
  }

  buffer += "<div class=\"squid-api-filters-categorical-selected-view\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.noData), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"squid_api_filters-categorical-panel-view popup\">\n	";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.initialFacet), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div id=\"search\">\n		<div class=\"input-group\">\n		      <span class=\"input-group-addon\">\n		        <i id=\"search-in-progress\" class=\"fa fa-refresh fa-spin hidden\"></i>\n		        <i id=\"search-not-in-progress\" class=\"fa fa-search\"></i>\n		      </span>\n			<input class=\"form-control\" id=\"searchbox\" type=\"search\" placeholder=\"Search for\">\n		</div>\n	</div>\n	<div id=\"filter-display-results\">\n	</div>\n	<div id=\"selected\">\n	</div>\n	<div id=\"pagination-container\">\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n		<div id=\"filter-selection\">\n			<select class=\"btn btn-select-filter\" size=\"2\"></select>\n		</div>\n	";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"panel panel-default filter-panel squid_api_filters-categorical-panel-view\">\n	";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0['panel-buttons']), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"panel-body\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['panel-buttons']), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<div class=\"col-md-7\">\n				";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.initialFacet), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<div id=\"search\">\n                  <div class=\"input-group\">\n                    <input class=\"form-control\" id=\"searchbox\" type=\"search\" placeholder=\"Search for\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"fa fa-search\"></i>\n                    </span>\n                  </div>\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-md-7\">\n				<div id=\"filter-display-results\">\n				</div>\n			</div>\n			<div class=\"col-md-5\">\n				<div id=\"selected\">\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div id=\"pagination-container\">\n					\n			</div>\n		</div>\n		<div class=\"row\">\n		<div class=\"col-md-4\">\n		</div>\n		<div class=\"col-md-8\">\n				\n			</div>\n	</div>\n\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['panel-buttons']), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"panel-heading\">\n		<button type=\"button\" class=\"close\" data-toggle=\"collapse\"\n			data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\" aria-hidden=\"true\">\n		</button>\n	</div>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n			<div class=\"row\">\n		";
  }

function program9(depth0,data) {
  
  
  return "\n			<div class=\"row no-padding\">\n		";
  }

function program11(depth0,data) {
  
  
  return "\n					<div id=\"filter-selection\">\n						<select class=\"btn btn-select-filter\" size=\"2\"></select>\n					</div>\n				";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<div class=\"panel-footer\">\n			<button type=\"button\" class=\"btn btn-primary apply-selection\" data-toggle=\"collapse\"\n				data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Apply</button>\n			<button type=\"button\" class=\"btn btn-default cancel-selection\" data-toggle=\"collapse\"\n				data-target=\"";
  if (helper = helpers['data-target']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['data-target']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-clavier=\"true\">Close</button>\n		</div>\n	";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.popup), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["squid_api"]["template"]["squid_api_filters_categorical_view_hover_template"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <b>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b>\n        <ul>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.values), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n                <li> "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " </li>\n            ";
  return buffer;
  }

  buffer += "<div class=\"squid-api-categorical-view-hover-view\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_categorical_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <!-- display filter name and selection -->\r\n        <dt>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dt>\r\n        <dd>\r\n        <select name=\"";
  if (helper = helpers.facetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"multiselect\" multiple=\"multiple\" id=\"";
  if (helper = helpers.facetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" size=\"";
  if (helper = helpers.displaySize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displaySize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </select>\r\n        </dd>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                    ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                </option>\r\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return " selected";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <!-- just display filter name -->\r\n        <dt>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dt>\r\n        <dd>-</dd>\r\n    ";
  return buffer;
  }

  buffer += "   ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selAvailable), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_date_filter_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n            <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.error), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </option>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected";
  }

function program4(depth0,data) {
  
  
  return " disabled ";
  }

  buffer += "<div class=\"squid-api-continous-selection-widget\">\r\n    <select class=\"sq-select form-control squid-api-filters-widgets-period-selector\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_date_range_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <option value=\"";
  if (helper = helpers.val) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.val); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"select\" data-attr=\"";
  if (helper = helpers.val) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.val); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<div class=\"squid-api-range-selection-widget\">\n    <select class=\"form-control\">\n        <option value='custom'>Custom</option>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.ranges), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    </ul>\n</div>";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_date_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<span class=\"widget\">";
  if (helper = helpers.dateDisplay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dateDisplay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dateCompareDisplay), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<div class=\"compare\">\r\n			";
  if (helper = helpers.dateCompareDisplay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dateCompareDisplay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n		</div>\r\n		";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n        no date available\r\n    ";
  }

function program6(depth0,data) {
  
  
  return "\r\n        <button data-toggle=\"tooltip\" title=\"Click to refresh period boundaries\" class=\"form-control btn btn-default refresh-facet\"><i class=\"fa fa-refresh\"></i> <span>click to refresh</span></button>\r\n    ";
  }

  buffer += "<div class=\"squid-api-date-selection-widget\">\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dateAvailable), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notDone), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_filters_segment_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

  buffer += "<div class=\"checkbox\">\r\n    <label>\r\n      <input type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isSelected), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n    </label>\r\n</div>";
  return buffer;
  });

this["squid_api"]["template"]["squid_api_selection_widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n<div class=\"information\">All</div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selection), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"item\" style=\"padding: 3px; display: inline-block;\">\n<table style=\"border:1px solid #DDD; border-collapse: separate; border-spacing: 3px;\">\n	<tr>\n		<td><span class=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n		<td><a href=\"#\" id=\"";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"clear-filter\"><i class=\"glyphicon glyphicon-remove\"></i></a></td>\n	</tr>\n	<tr>\n		<td><span class=\"value\" style=\"color:#999;\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n		<td></td>\n	</tr>\n</table>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"sq-selection-panel\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.empty), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.facets), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
(function (root, factory) {
    root.squid_api.view.FiltersSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_FiltersSelector);
}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model : null,
        template : template,

        initialize : function(options) {
            this.config = squid_api.model.config;

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            }
            if (options.onSelectFacet) {
                this.onSelectFacet = options.onSelectFacet;
            }

            this.listenTo(this.model, "change", this.render);

            // render view
            this.render();
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var parent = $(event.currentTarget).parent("li");
                var facetId = parent.parent("ul").data("id");
                var itemId = parent.data("id");
                this.onRemoveItem(facetId, itemId);
            },
            "click .facet" : function(event) {
                // Obtain facet name / value
                var facetId = $(event.currentTarget).data("id");
                var facetName = $(event.currentTarget).text();
                if (this.onSelectFacet) {
                    this.onSelectFacet(facetId, facetName);
                }
            },
            "click .reset-filters" : function() {
                var me = this;
                var projectId = this.config.get("project");
                var bookmarkId = this.config.get("bookmark");

                // get the Bookmark
                squid_api.getCustomer().then(function(customer) {
                    customer.get("projects").load(projectId).then(function(project) {
                        project.get("bookmarks").load(bookmarkId).done(function(bookmark) {
                            var forcedConfig = {};
                            var config = me.config.toJSON();
                            // exclude the selection from re-setting the config
                            for (var x in config) {
                                if (x !== "selection") {
                                    forcedConfig[x] = config[x];
                                }
                            }
                            // set bookmark
                            squid_api.setBookmark(bookmark, forcedConfig);
                        }).fail(function(model, response, options) {
                            console.error("bookmark fetch failed : " + bookmarkId);
                        });
                    });
                });
            }
        },

        onRemoveItem : function(facetId, itemId) {
            // Copy model selection object properties to remove object reference
            var selectionClone = $.extend(true, {}, this.config.get("selection"));
            if (selectionClone) {
                var facets = selectionClone.facets;
                if (facets) {
                    // Remove selected item from facet
                    squid_api.controller.facetjob.unSelect(facets, facetId, itemId);
                    squid_api.setConfigSelection(selectionClone);
                }
            }
        },

        render : function() {
            var selFacets = [];
            var noData = true;
            if (this.model) {
                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        noData = false;
                        var facets = selection.facets;
                        for (i = 0; i < facets.length; i++) {
                            var facet = facets[i];
                            var selFacet = {
                                    "id" : facet.id,
                                    "name" : facet.name ? facet.name : facet.dimension.name,
                                    "items" : []
                            };
                            var selectedItems = facet.selectedItems;
                            for (ix = 0; ix < selectedItems.length; ix++) {
                                selFacet.items.push({
                                        "id" : selectedItems[ix].id,
                                        "name" : selectedItems[ix].value
                                });
                            }
                            selFacet.available = (facet.dimension.type === "CATEGORICAL" || facet.dimension.type === "SEGMENTS" || selFacet.items.length > 0) && facet.dimension.valueType !== "DATE";
                            selFacets.push(selFacet);
                        }
                    }
                }
            }

            this.$el.html(this.template({
                facets : selFacets,
                noData : noData,
                noDataMessage : this.noDataMessage
            }));
        }
    });

    return View;
}));

$.widget( "ui.dialog", $.ui.dialog, {
    options: {
        clickOutside: false, // Determine if clicking outside the dialog shall close it
        clickOutsideTrigger: "", // Element (id or class) that triggers the dialog opening
        parentContains: ".squid-api-action",
    },
    open: function() {
    var clickOutsideTriggerEl = $( this.options.clickOutsideTrigger );
    var that = this;

    if (this.options.clickOutside){
      // Add document wide click handler for the current dialog namespace
      $(document).on( "click.ui.dialogClickOutside" + that.eventNamespace, function(event){
        if ( $(event.target).closest($(clickOutsideTriggerEl)).length === 0 && $(event.target).closest($(that.uiDialog)).length === 0){
          that.close();
        }
      });
    }

    this._super(); // Invoke parent open method
  },

  close: function() {
    var that = this;

    // Remove document wide click handler for the current dialog
    $(document).off( "click.ui.dialogClickOutside" + that.eventNamespace );

    this._super(); // Invoke parent close method
  }
});

(function (root, factory) {
    root.squid_api.view.CategoricalFacetView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filters: null,
        format : null,
        noFiltersMessage : null,
        singleSelect : false,
        disabled : false,
        onChange : null,

        initialize : function(options) {
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }
            if (options.filters) {
                this.filters = options.filters;
            } else {
                this.filters = squid_api.model.filters;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_filters_categorical_facet_view;
            }
            if (options.status) {
            	this.status = options.status;
            } else {
            	this.status = squid_api.model.status;
            }
            if (options.noFiltersMessage) {
                this.noFiltersMessage = options.noFiltersMessage;
            }
            if (options.singleSelect) {
                this.singleSelect = options.singleSelect;
            }
            if (options.onChange) {
                this.onChange = options.onChange;
            }

            this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.model, "change:pageIndex", this.render);
            this.listenTo(this.model, "change:facet", this.render);
            this.listenTo(this.status, "change", this.widgetState);

            this.render();
        },

        widgetState: function() {
        	// treat global status
            var running = (this.status.get("status") != this.status.STATUS_DONE);
            if (running === true) {
                // computation is running
            } else {
                // computation is done : enable input
                this.disabled = false;
            }
        },

        events: {
            // Dimension Sorting
            "click li": function(item) {
                if (this.disabled === false) {
                    this.disabled = true;
                    // Get selected Filter & Item
                    var selectedFilter = this.model.get("selectedFilter");
                    var target = $(item.currentTarget);

                    // Get clicked filter value & create object
                    var value = target.attr("data-value");
                    var type = target.attr("data-type");
                    var id = target.attr("data-id");
                    var attributes = target.attr("data-attr");
                    
                    //T2726: useless as selectionClone is saved at the end, not this copy
                    //var configSelection = $.extend(true, {}, squid_api.model.config.get("selection"));
                    //var configSelectionFacets = configSelection.facets;

                    // Get selected Filters
                    var selectionClone = $.extend(true, {}, this.filters.get("selection"));
                    var facets = selectionClone.facets;

                    if (target.attr("selected")) {
                        // Style manipulation
                        target.removeClass("active");
                        target.removeAttr("selected");

                        // Remove selected item from facet
                        squid_api.controller.facetjob.unSelect(facets, selectedFilter, id);

                    } else {
                        // style manipulation
                        target.addClass("active");
                        target.attr("selected", true);

                        // set up object to add a new selected item
                        var selectObj = {id : id, type : type, value : value};
                        // add attributes if exist
                        if (attributes && attributes.length>0) {
                        	selectObj.attributes = JSON.parse(attributes);
                        }

                        // Push new filters to selectedItems array
                        var selectedFacet;
                        for (var i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.id === selectedFilter) {
                                selectedFacet = facet;
                                if (this.singleSelect) {
                                    facet.selectedItems = [selectObj];
                                } else {
                                    facet.selectedItems.push(selectObj);
                                }
                            }
                        }
                        
                        /*
                        var configSelectedFacet;
                        var selectedFacet1;
                        for (var i1=0; i1<configSelectionFacets.length; i1++) {
                            var facet1 = configSelectionFacets[i1];
                            if (facet1.id === selectedFilter) {
                                selectedFacet1 = facet1;
                                facet1.selectedItems = selectedFacet.selectedItems;
                            }
                        }
                        if (!selectedFacet1) {
                            configSelectionFacets.push(selectedFacet);
                        }
                        */
                        
                        // Remove selected items from children
                        //T2726: this has to be done on selectionClone.facets to be effective
                        squid_api.controller.facetjob.unSelectChildren(facets, selectedFacet, false);

                        //Handle callback when selection changed
                        if (this.onChange) {
                        	this.onChange(facets, selectedFacet);
                        }
                    }

                    // set config with updated selection
                    squid_api.setConfigSelection(selectionClone);
                }
            },
        },

        render : function() {
            var facet = this.model.get("facet");
            var message = null;
            var computingInProgress = false;
            var updatedItems = [];

            if (facet && this.filters) {
                this.$el.addClass("min-filter-height");

                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var itemIndex = this.model.get("itemIndex");

                // display current facet members
                var startIndex = (pageIndex * pageSize) - itemIndex;
                var endIndex = startIndex + pageSize;

                var selectedFilter = this.model.get("selectedFilter");
                var selection = this.filters.get("selection");
                if (endIndex > facetItems.length) {
                    endIndex = facetItems.length;
                }

                if (startIndex >= 0 && selection) {
                    var items = [];
                    var facets = selection.facets;
                    for (ix=startIndex; ix<endIndex; ix++) {
                        items.push(facetItems[ix]);
                    }

                    // Manipulate items to add a selected or not attribute
                    for (ix=0; ix<facets.length; ix++) {
                        if (selectedFilter === facets[ix].id) {
                            var selectedItems = facets[ix].selectedItems;
                            for (ix1=0; ix1<items.length; ix1++) {
                                var obj = items[ix1];
                                obj.selected = false;
                                if  (obj.attributes) {
                                	obj.dataAttr = JSON.stringify(obj.attributes);
                                }
                                for (ix2=0; ix2<selectedItems.length; ix2++) {
                                    if (items[ix1].id === selectedItems[ix2].id) {
                                        obj.selected = true;
                                        break;
                                    }
                                }
                                updatedItems.push(obj);
                            }
                        }
                    }
                }

                // set the message
                if (facet.get("done") === true) {
                    if ((facet.get("hasMore") === true) && (updatedItems < pageSize)) {
                        message = "Partial results (computation pending)";
                    } else if (!facetItems || facetItems.length === 0) {
                        message = "No Items";
                        this.$el.removeClass("min-filter-height");
                    }
                    computingInProgress = false;
                } else {
                    message = "Computing in progress";
                    computingInProgress = true;
                }

            } else {
                message = this.noFiltersMessage;
                this.$el.removeClass("min-filter-height");
            }

            var html = this.template({
                "items" : updatedItems, "message" : message, "computingInProgress" : computingInProgress
            });

            this.$el.html(html);
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalPagingView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        format : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.listenTo(this.model, "change:pageIndex", this.render);
            this.listenTo(this.model, "change:facet", this.render);
            this.render();
        },

        events : {
            "click li" : function(event) {
                event.preventDefault();
                event.stopPropagation();
                var pageId = $(event.currentTarget).data("id");
                var pageIndex = this.model.get("pageIndex");
                var nbPages = this.model.get("nbPages");
                var itemIndex = this.model.get("itemIndex");
                var pageSize = this.model.get("pageSize");
                var firstPageIndex = Math.round(itemIndex / pageSize);
                this.itemClicked = "number";
                if (pageId == "prev") {
                    if (pageIndex > (firstPageIndex - nbPages)) {
                        // previous page
                        this.model.set("pageIndex", pageIndex-1);
                    } else {
                        // previous page group
                        this.model.set("pageIndex", firstPageIndex - nbPages);
                    }
                    this.itemClicked = "prev";
                } else if (pageId == "next") {
                    if (pageIndex < (firstPageIndex + nbPages)) {
                        // next page
                        this.model.set("pageIndex", pageIndex+1);
                    } else {
                        // next page group
                        this.model.set("pageIndex", firstPageIndex + nbPages);
                    }
                    this.itemClicked = "next";
                } else {
                    this.model.set("pageIndex", pageId-1);
                }
            }
        },

        render : function() {
            var facet = this.model.get("facet");
            if (facet) {
                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var nbPages = this.model.get("nbPages");
                var itemIndex = this.model.get("itemIndex");

                //Sometimes initial facet jobs continue to be rendered even after page click
                if (pageIndex * pageSize === itemIndex) {
                    var next = false;
                    if (facet.get("hasMore")) {
                        next = true;
                    }

	                var pageCount = Math.min((facetItems.length / pageSize)+(itemIndex/pageSize),10);
	                var firstPageIndex = Math.round(itemIndex / pageSize);
	                if (firstPageIndex>4 && pageCount >= nbPages) {
	                	var offset = 4;
	                	if (facetItems && facetItems.length < 50) {
	                		offset = offset + Math.ceil((50 - facetItems.length) / pageSize);
	                	}
	                	firstPageIndex = firstPageIndex - offset;
	                	if ((facetItems.length + (offset * pageSize))>100 && next === false) {
	                		next = true;
	                	}
	                } else {
	                	if ((facetItems.length + (firstPageIndex * pageSize))>100 && next === false) {
	                		next = true;
	                	}
	                	firstPageIndex = 0;
	                }
	                
	                var pages = [];
	                if (pageCount>1 || pageIndex>0) {
	                    if (pageCount>nbPages) {
	                        pageCount = nbPages;
	                    }
	                    var prev = (firstPageIndex === 0) ? null : true;
	
	                    if (this.itemClicked === "prev" && (pageIndex + 1) % 2 === 0) {
	                        firstPageIndex = ((firstPageIndex + 1) - (pageSize) >= 0) ?  (firstPageIndex + 1) - pageSize : firstPageIndex;
	                        pageCount = nbPages;
	                        if (firstPageIndex === 0) {
	                            prev = false;
	                        }
	                    }
	                    for (var i=firstPageIndex; i<(firstPageIndex+pageCount); i++) {
	                        var selected = null;
	                        if (i == pageIndex) {
	                            selected = true;
	                        }
	                        pages.push({ "id" : i+1, "selected" :  selected});
	                    }
	
	                    this.$el.html(squid_api.template.squid_api_filters_categorical_paging_view({
	                        "prev" : prev,
	                        "pages" : pages,
	                        "next" : next
	                    }));
	                } else {
	                    this.$el.html("");
	                }
                }
            }
        }
    });

    return View;
}));
(function (root, factory) {
    root.squid_api.view.CategoricalSelectedView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,
        initialFacet : null,
        singleSelect : null,
        facetList : null,
        avoidFacets : null,
        mandatory : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }
            if (options.noDataMessage) {
                this.noDataMessage = options.noDataMessage;
            }
            if (options.initialFacet) {
                this.initialFacet = options.initialFacet;
            }
            if (options.initialDimension) {
                this.initialDimension = options.initialDimension;
            }
            if (options.singleSelect) {
                options.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
            }
            if (options.mandatory) {
                this.mandatory = options.mandatory;
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_filters_categorical_selected_view;
            }

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        events: {
            "click .facet-remove": function(event) {
                // Obtain facet name / value
                var facetName = $(event.currentTarget).parent("li").attr("attr-name");
                var itemId = $(event.currentTarget).parent("li").attr("attr-id");

                // Copy model selection object properties to remove object reference
                var selectionClone = $.extend(true, {}, this.model.get("selection"));
                if (selectionClone) {
                    var facets = selectionClone.facets;
                    if (facets) {
                        // Remove selected item from facet
                        squid_api.controller.facetjob.unSelect(facets, facetName, itemId);
                        // set config with updated selection
                        squid_api.setConfigSelection(selectionClone);
                    }
                }
                //squid_api.model.config.trigger("change:domain", squid_api.model.config);
            }
        },

        render : function() {
            var selFacets = [];
            var noData = true;
            if (this.model) {
                var selection = this.model.get("selection");
                if (selection) {
                    if (selection.facets) {
                        var facets = selection.facets;
                        for (i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.dimension.type == "CATEGORICAL" || facet.dimension.type == "SEGMENTS") {
                                var selectedItems = facet.selectedItems;
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    if (this.initialFacet == facet.id || (!this.initialFacet && !this.initialDimension)) {
                                        noData = false;
                                        var obj = {};
                                        obj.facetItem = selectedItems[ix].value;
                                        obj.facetItemId = selectedItems[ix].id;
                                        if (facet.name) {
                                            obj.facetName = facet.name;
                                        } else {
                                            obj.facetName = facet.dimension.name;
                                        }
                                        obj.facetNameId = facet.id;
                                        selFacets.push(obj);
                                    }
                                }
                            }
                        }
                    }
                    if (this.facetList) {
                        var updatedFacets = [];
                        for (i=0; i<selFacets.length; i++) {
                            for (ix=0; ix<this.facetList.length; ix++) {
                                if (this.facetList[ix] === selFacets[i].facetNameId) {
                                    updatedFacets.push(selFacets[i]);
                                }
                            }
                        }
                        if (updatedFacets.length === 0) {
                            noData = true;
                        } else {
                            selFacets = updatedFacets;
                        }
                    }
                    if (this.avoidFacets) {
                        for (i=0; i<this.avoidFacets.length; i++) {
                            for (ix=0; ix<selFacets.length; ix++) {
                                if (this.avoidFacets[i] === selFacets[ix].facetNameId) {
                                    selFacets.splice(ix, 1);
                                }
                            }
                        }
                    }
                }
            }

            this.$el.html(this.template({facets: selFacets, noData: noData, noDataMessage: this.noDataMessage, mandatory: this.mandatory}));
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalSelectorView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filterStore : null,
        format : null,
        facetList : null,
        avoidFacets : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (options.filterStore) {
                this.filterStore = options.filterStore;
            }
            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.avoidFacets) {
                this.avoidFacets = options.avoidFacets;
            }

            this.listenTo(this.model, "change:selection", this.renderSelection);
            this.render();
            this.renderSelection();
        },

        render : function() {
            var me = this;

            this.$el.find(".btn-select-filter").multiselect({
                nonSelectedText: 'Select Filter',
                onChange: function(option) {
                    var filterValue = $(option).val();
                    me.filterStore.set("selectedFilter", filterValue);
                }
            });

        },

        renderSelection : function() {
            var me = this;

            if (this.model.get("selection")) {
                var selectedFilter = me.filterStore.get("selectedFilter");
                var facets = this.model.get("selection").facets;
                var items = [];
                if (this.model.get("selection")) {
                    if (facets) {
                        for (i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if ((facet.dimension.type == "CATEGORICAL") || (facet.dimension.type == "SEGMENTS")) {
                                var selected = false;
                                if (facet.id == selectedFilter) {
                                    selected = true;
                                }
                                var json = {
                                    label : facet.name,
                                    title : facet.name,
                                    value : facet.id,
                                    selected : selected
                                };
                                if (this.facetList) {
                                    for (ix=0; ix<this.facetList.length; ix++) {
                                        if (this.facetList[ix] === facet.id) {
                                            items.push(json);
                                        }
                                    }
                                }
                                else {
                                    items.push(json);
                                }
                            }
                        }
                    }
                    if (this.avoidFacets) {
                        for (i=0; i<this.avoidFacets.length; i++) {
                            for (ix=0; ix<items.length; ix++) {
                                if (this.avoidFacets[i] === items[ix].value) {
                                    items.splice(ix, 1);
                                }
                            }
                        }
                    }

                    var select = this.$el.find(".btn-select-filter");
                    select.multiselect('dataprovider', items);

                    // Detect List Length for display purposes
                    if (items.length >= 10) {
                        select.siblings(".btn-group").addClass("largeList");
                    }
                }
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CategoricalView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        filterPanelTemplate: null,
        model : null,
        currentModel : null,
        format : null,
        panelButtons : true,
        filterPanel : null,
        filterSelected : null,
        nbPages : 10,
        buttonLabel : null,
        noFiltersMessage : "No Filter Selected",
        initialFacet : null,
        initialDimension : null,
        facetList : null,
        singleSelect : null,
        parentCheck : null,
        ignoredFacets : null,
        mandatory : null,
        popup : false,
        onChange : null,
        displayFacetQuantity : false,
        hoverFacetDisplay : null,
        facetViewOnly : null,
        template: null,
        facetViewTemplate: null,
        keyupCount:0,

        initialize : function(options) {
            var me = this;

            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            // force using the non-blocking engine
            this.model.set("engineVersion", "2");
            if (options.filterPanel) {
                this.filterPanel = options.filterPanel;
            } else {
                // create an element to hold the filterPanel
                this.filterPanel = 'squid_api-view-CategoricalView';
                $("body").append("<div id='"+this.filterPanel+"'></div>");
                this.filterPanel = "#"+this.filterPanel;
            }
            if (options.filterSelected) {
                this.filterSelected = options.filterSelected;
            }
            if (! options.panelButtons) {
                this.panelButtons = options.panelButtons;
            }
            if (options.facetViewOnly) {
                this.facetViewOnly = options.facetViewOnly;
            }
            if (options.buttonLabel) {
                this.buttonLabel = options.buttonLabel;
            }
            if (options.noFiltersMessage) {
                this.noFiltersMessage = options.noFiltersMessage;
            }
            if (options.initialFacet) {
                this.initialFacet = options.initialFacet;
            }
            if (options.initialDimension) {
                this.initialDimension = options.initialDimension;
            }
            if (options.facetViewTemplate) {
                this.facetViewTemplate = options.facetViewTemplate;
            }
            if (options.singleSelect) {
                this.singleSelect = options.singleSelect;
            }
            if (options.facetList) {
                this.facetList = options.facetList;
            }
            if (options.ignoredFacets) {
                this.ignoredFacets = options.ignoredFacets;
            }
            if (options.parentCheck) {
                this.parentCheck = options.parentCheck;
            }
            if (options.mandatory) {
                this.mandatory = options.mandatory;
            }
            if (options.popup) {
                this.popup = options.popup;
            }
            if (options.displayFacetQuantity) {
                this.displayFacetQuantity = options.displayFacetQuantity;
            }
            if (options.hoverFacetDisplay) {
                this.hoverFacetDisplay = options.hoverFacetDisplay;
            }
            if (options.onChange) {
                this.onChange = options.onChange;
            }
            if (options.template) {
                this.template = options.template;
            }
            if (options.status) {
                this.status = options.status;
            } else {
                this.status = squid_api.model.status;
            }

            this.filterPanelTemplate = squid_api.template.squid_api_filters_categorical_view;
            this.filterHoverTemplate = squid_api.template.squid_api_filters_categorical_view_hover_template;

            if (options.format) {
                this.format = options.format;
            } else {
                if (d3) {
                    this.format = d3.time.format("%Y-%m-%d");
                } else {
                    this.format = function(val){return val;};
                }
            }

            this.filterStore = new Backbone.Model( {
                // selected dimension
                selectedFilter : me.initialFacet,
                // current selected page
                pageIndex : 0,
                // nb of items in a page
                pageSize : 10,
                // nb of pages to display
                nbPages : 10,
                // current facet retrieved from API
                facet : null,
                // index id of the first item of facet
                itemIndex : 0,
                // previous search query
                searchPrevious : null,
                // current search query
                search : null
            }
            );

            squid_api.model.config.on("change:domain", function() {
                // reset
                me.initialFacet = null;
                me.filterStore.set({
                    "selectedFilter" : null,
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                me.setCurrentModel();
            }, this);

            this.model.on("change:selection", function(filters) {
                // Display label of Button which opens filter panel
                if (me.initialFacet) {
                   var name = me.getButtonLabel();
                   if (name) {
                       me.$el.find(".squid_api_filters_categorical_button").html(name + "<span class='caret'></span>");
                   }
                } else {
                    // search Facet By DimensionId = function(selection, dimensionId) {
                    var dimensionId = me.initialDimension;
                    if (dimensionId) {
                        var facetId;
                        var facets = filters.get("selection").facets;
                        for (var i=0; i<facets.length; i++) {
                            var facet = facets[i];
                            if (facet.id.lastIndexOf(dimensionId) === (facet.id.length - dimensionId.length - 1)) {
                                facetId = facet.id;
                                break;
                            }
                        }
                        me.setInitialFacet(facetId);
                    }
                }
                if (!me.currentModel) {
                    me.setCurrentModel();
                }
                if (me.currentModel !== me.model) {
                    var selectionClone = $.extend(true, {}, filters.get("selection"));
                    me.currentModel.set("selection", selectionClone);
                }
                if (me.displayFacetQuantity) {
                    me.updateFacetQuantityDisplay();
                }
            });

            this.filterStore.on("change:selectedFilter", function() {
                me.filterStore.set({
                    "searchPrevious" : null,
                    "search" : null,
                    "facet" : null,
                    "pageIndex" : 0,
                    "itemIndex" : 0
                }, {
                    "silent" : true
                });
                // reset the search box
                $(me.filterPanel).find("#searchbox").val("");
                // re-compute the filters
                squid_api.controller.facetjob.compute(me.currentModel);

            }, this);

            this.filterStore.on("change:search", function() {
                me.filterStore.set({"pageIndex": 0}, {"silent" : true});
                me.filterStore.trigger("change:pageIndex", me.filterStore);
            }, this);

            this.filterStore.on("change:pageIndex", function() {
                me.renderFacet(false);
            }, this);

            // listen for global status change
            this.status.on('change:status', this.statusUpdate, this);

            this.render();
        },

        setInitialFacet : function(initialFacet) {
            this.initialFacet = initialFacet;
            this.filterStore.set({
                "selectedFilter": initialFacet,
                "searchPrevious" : null,
                "search" : null,
                "facet" : null,
                "pageIndex" : 0,
                "itemIndex" : 0
            }, {
                "silent" : true
            });
            // reset the search box
            $(this.filterPanel).find("#searchbox").val("");
            this.render();
        },

        setIgnoredFacets : function(ignoredFacets) {
            this.ignoredFacets = ignoredFacets;
            this.render();
        },

        statusUpdate : function() {
            var running = (this.status.get("status") != this.status.STATUS_DONE);
            var disabled = null;

            if (this.parentCheck && this.currentModel.get("selection")) {
                var facetId = this.filterStore.get("selectedFilter");
                var currentModel = this.currentModel.get("selection").facets;
                var dimensionId;

                // Get Dimension ID of linked parent
                for (i=0; i<currentModel.length; i++) {
                    if ((currentModel[i].id === facetId) && (currentModel[i].dimension.parentId)) {
                        dimensionId = currentModel[i].dimension.parentId.dimensionId;
                    }
                }
                for (i=0; i<currentModel.length; i++) {
                    if ((currentModel[i].dimension.id.dimensionId === dimensionId) && (currentModel[i].selectedItems.length === 0)) {
                        disabled = true;
                    }
                }
            }


            if ((running) || (disabled)) {
                // computation is running : disable input
                this.$el.find("button").attr("disabled", true);
            } else {
                // computation is done : enable input
                this.$el.find("button").attr("disabled", false);
            }
        },

        setCurrentModel : function() {
            var me = this;
            if (this.panelButtons) {
                // duplicate the filters model
                this.currentModel = new squid_api.model.FiltersJob();
                var attributesClone = $.extend(true, {}, this.model.attributes);
                this.currentModel.set(attributesClone);
                this.listenTo(this.currentModel, 'change', function() {
                    // force facet fetch (because the selection has changed)
                    me.renderFacet(true);
                });
            } else {
                if (this.currentModel !== this.model) {
                    this.currentModel = this.model;
                    this.listenTo(this.currentModel, 'change', function() {
                        // force facet fetch (because the selection has changed)
                        me.renderFacet(true);
                    });
                }
            }
            this.render();
        },

        search : function(event) {
            var me = this;
            me.keyupCount++;
            setTimeout(function(){
                me.keyupCount--;
                // trigger the action only if this is the latest keyup
                if (me.keyupCount === 0) {
                    me.filterStore.set("search", event.target.value);
                }
            }, 200);
        },

        getButtonLabel : function() {
            // Button which opens filter Panel
            var buttonLabel = this.buttonLabel;
            if (!buttonLabel) {
                var selection = this.model.get("selection");
                if (this.initialFacet && selection) {
                    var facets = selection.facets;
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === this.initialFacet) {
                            buttonLabel = facets[i].name;
                        }
                    }
                } else {
                    buttonLabel = "Filters";
                }
            }
            return buttonLabel;
        },

        render : function() {
            // Button which opens filter Panel
            var buttonLabel = this.getButtonLabel();

            if (this.facetViewOnly) {
                this.$el.html(this.template());
                var facetItems = new squid_api.view.CategoricalFacetView({
                    el: $(this.el).find(".results"),
                    model: this.filterStore,
                    template: this.facetViewTemplate,
                    filters: this.currentModel,
                    noFiltersMessage : this.noFiltersMessage,
                    singleSelect : this.singleSelect,
                    onChange : this.onChange
                });
                var paginationView = new squid_api.view.CategoricalPagingView({
                    el: $(this.el).find(".pagination-container"),
                    model: this.filterStore
                });
            } else {
                // Print Base Filter Panel Layout
                this.keyupCount = 0;
                $(this.filterPanel).addClass("squid_api_filters_categorical_filter_panel").html(this.filterPanelTemplate({
                    "popup" : this.popup,
                    "data-target" : this.filterPanel,
                    "panel-buttons" : this.panelButtons,
                    "initialFacet" : this.initialFacet
                }));

                view = new squid_api.view.CategoricalSelectorView({
                    el: $(this.filterPanel).find("#filter-selection"),
                    model: this.currentModel,
                    filterStore : this.filterStore,
                    facetList : this.facetList,
                    avoidFacets : this.ignoredFacets
                });

                view2 = new squid_api.view.CategoricalFacetView({
                    el: $(this.filterPanel).find("#filter-display-results"),
                    model: this.filterStore,
                    template: this.facetViewTemplate,
                    filters: this.currentModel,
                    noFiltersMessage : this.noFiltersMessage,
                    singleSelect : this.singleSelect,
                    onChange : this.onChange
                });

                view3 = new squid_api.view.CategoricalPagingView({
                    el: $(this.filterPanel).find("#pagination-container"),
                    model: this.filterStore
                });

                if (this.panelButtons) {
                    view4 = new squid_api.view.CategoricalSelectedView({
                        el: $(this.filterPanel).find("#selected"),
                        model: this.currentModel,
                        noDataMessage: this.noFiltersMessage,
                        initialFacet : this.initialFacet,
                        initialDimension : this.initialDimension,
                        facetList : this.facetList,
                        avoidFacets : this.ignoredFacets,
                        mandatory : this.mandatory
                    });
                }

                view5 = new squid_api.view.CategoricalSelectedView({
                    el: this.filterSelected,
                    model: this.model,
                    noDataMessage: this.noFiltersMessage,
                    initialFacet : this.initialFacet,
                    initialDimension : this.initialDimension,
                    facetList : this.facetList,
                    avoidFacets : this.ignoredFacets,
                    mandatory : this.mandatory
                });

                var me = this;
                if (this.panelButtons) {
                    $(this.filterPanel).find(".apply-selection").click(function() {
                        me.applySelection();
                    });
                    $(this.filterPanel).find(".cancel-selection").click(function() {
                        me.cancelSelection();
                    });
                }

				//T2726: must put back the call back to launch a search on keyeup
                //This has been removed at a point, for an unknown reason
                $(this.filterPanel).find("#searchbox").keyup(_.bind(this.search, this));
               
				if (this.popup) {
                    if (buttonLabel) {
                        this.$el
                            .html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button'>" + buttonLabel + "<span class='caret'></span></button>");
                        this.statusUpdate();
                    }
                    $(this.filterPanel).dialog({
                        dialogClass: "squid-api-filters-widget-popup",
                        autoOpen: false,
                        position: {
                            my: "left top", at: "left bottom", of: this.$el.find("button")
                        },
                        clickOutside: true, // clicking outside the dialog will close it
                        clickOutsideTrigger: this.$el.find("button"), // Element (id or class) that triggers the dialog opening
                    });
                    // Click Event for filter panel button
                    this.$el.find("button").off("click").on("click", function() {
                        if ($(me.filterPanel).dialog("isOpen")) {
                            $(me.filterPanel).dialog( "close" );
                        } else {
                            $(me.filterPanel).dialog( "open" );
                        }
                    });
                } else {
                    if (buttonLabel) {
                        this.$el
                            .html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + "><span class='name'>" + buttonLabel + "</span><span class='caret'></span></button>");
                    }
                    $(this.filterPanel).addClass("collapse");
                }
                if (this.hoverFacetDisplay) {
                    this.displayFacetsOnHover();
                }
            }
        },

        displayFacetsOnHover: function() {
            var selection = this.model.get("selection");
            var jsonData = {items : []};
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // Button which opens filter Panel
                    var buttonLabel = this.getButtonLabel();
                    // loop through selected model facets
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].selectedItems.length > 0) {
                            var facet = facets[i];
                            // do not add to the count if a date
                            if (facet.dimension.type !== "CONTINUOUS" && facet.dimension.valueType !== "DATE") {
                                var selectedItems = facet.selectedItems;
                                // store local object
                                var obj = {};
                                obj.name = facet.name;
                                obj.values = [];
                                // obtain all selected items
                                for (ix=0; ix<selectedItems.length; ix++) {
                                    obj.values.push(selectedItems[ix].value);
                                }
                                // push to jsonData
                                jsonData.items.push(obj);
                            }
                        }
                    }
                }
            }
            if (jsonData.items.length !== 0) {
                var el = this.$el.find(".squid_api_filters_categorical_button");
                el.attr("data-original-title", this.filterHoverTemplate(jsonData));
                el.attr("data-placement", "bottom");
                el.tooltip({
                    html:true,
                    template: '<div class="tooltip squid_api_filters_categorical_button_hover_wrapper"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                });
            }
        },

        updateFacetQuantityDisplay: function() {
            var selection = this.model.get("selection");
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // Button which opens filter Panel
                    var buttonLabel = this.getButtonLabel();
                    // store number of selected facets items
                    var count = 0;
                    // loop through selected model facets
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].selectedItems.length > 0) {
                            // do not add to the count if a date
                            if (facets[i].dimension.type !== "CONTINUOUS" && facets[i].dimension.valueType !== "DATE") {
                                count += facets[i].selectedItems.length;
                            }
                        }
                    }
                    if (this.popup) {
                        if (buttonLabel) {
                            this.$el.html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button'>" + buttonLabel + " (" + count + ")<span class='caret'></span></button>");
                        }
                    } else {
                        this.$el.html("<button type='button' class='btn btn-default form-control squid_api_filters_categorical_button' data-toggle='collapse' data-target="+ this.filterPanel + "><span class='name'>" + buttonLabel + " (" + count + ")</span><span class='caret'></span></button>");
                    }
                    if (this.hoverFacetDisplay) {
                        this.displayFacetsOnHover();
                    }
                }
            }
        },

        events: {
            "keyup" : function(event) {
                this.search(event);
            },
            "click .squid_api_filters_categorical_button": function(item) {
                var className = 'opened';

                // Rotate Caret Position
                if (! this.popup) {
                    if ($(item.currentTarget).hasClass(className)) {
                        $(item.currentTarget).removeClass(className);
                    } else {
                        $(item.currentTarget).addClass(className);
                    }
                }

                /**
                    With each categorical view being independent, obtain all
                    filter panels which don't matched the one being clicked
                    & is currently open. Once identified, close it.
                **/

                var dataTarget = $(item.currentTarget).attr('data-target');
                var filterPanels = $('.squid_api_filters_categorical_filter_panel');
                var buttons = $('.squid_api_filters_categorical_button');

                for (i=0; i<filterPanels.length; i++) {
                    if ($(filterPanels[i]).hasClass('in') && ("#" + $(filterPanels[i]).attr('id')) !== dataTarget) {
                        var filterId = $(filterPanels[i]).attr('id');

                        // Close Panel
                        $(filterPanels[i]).removeClass('in');

                        // Remove Opened Class on Buttons
                        var target = $(filterPanels[i]).attr('id');

                        for (ix=0; ix<buttons.length; ix++) {
                            if ($(buttons[ix]).attr('data-target') === '#' + target) {
                                $(buttons[ix]).removeClass(className);
                            }
                        }
                    }
                }
            }
        },

        /**
         * Render a facet.
         * Facet fetch may be triggered if true is passed as the fetch arg or if the requested paging index
         * requires more elements to be fetched.
         */
        renderFacet : function(fetch) {
            var me = this;
            if (this.currentModel.get("selection")) {
                var selectedFacetId = this.filterStore.get("selectedFilter");
                var pageIndex = this.filterStore.get("pageIndex");
                var pageSize = this.filterStore.get("pageSize");
                var facet = this.filterStore.get("facet");
                var nbPages = this.filterStore.get("nbPages");

                // compute required index range
                var startIndex = pageIndex * pageSize;
                var endIndex = startIndex + pageSize;

                // check if we need to fetch more items
                var searchStale =  false;
                var searchPrevious = this.filterStore.get("searchPrevious");
                var search = this.filterStore.get("search");
                if ((search !== null) && (search != searchPrevious)) {
                    searchStale = true;
                }
                if ((facet) && (facet.get("id") == selectedFacetId) && (!searchStale)) {
                    var itemIndex = this.filterStore.get("itemIndex");

                    // compute what's the max index
                    var maxItem = itemIndex + facet.get("items").length;
                    if (startIndex < itemIndex) {
                        fetch = true;
                    }
                    if ((endIndex > maxItem) && (facet.get("hasMore") === true)) {
                        fetch = true;
                    }
                } else {
                    fetch = true;
                }

                if ((fetch === true) && (selectedFacetId) && (this.currentModel.get("id").facetJobId)) {
                    // pre-fetch some pages of facet members
                    var facetJob = new squid_api.model.ProjectFacetJobFacet();
                    facetJob.set("id",this.currentModel.get("id"));
                    facetJob.set("oid", selectedFacetId);
                    if (startIndex) {
                        facetJob.addParameter("startIndex", startIndex);
                    }
                    if (pageSize) {
                        facetJob.addParameter("maxResults", (nbPages * pageSize));
                    }
                    if (search) {
                        facetJob.addParameter("filter", search);
                    }
                    //always update searchPrevious even with null so text box ctrl+X is properly handled
                    this.filterStore.set("searchPrevious", search);
                    // get the results from API
                    this.facetJobFetch(facetJob, startIndex);
                } else {
                    // trigger facet render
                    me.filterStore.trigger("change:facet");
                }
            }
        },

        setFakeFacet: function() {
            // set a fake facet (to obtain model data)
            var f = new squid_api.model.ProjectFacetJobFacet();
            f.set("items", []);
            this.filterStore.set("facet", f);
        },

        facetJobFetch: function(facetJob, startIndex) {
            var me = this;
            var facetJobId = facetJob.get("oid");
            var selectedFilter = this.filterStore.get("selectedFilter");
            var selectedFacet = this.filterStore.get("facet");

            if (facetJobId === selectedFilter) {
                if (! selectedFacet) {
                    // due to timeOut for the success handler
                    this.setFakeFacet();
                }
                var searchInProgess = this.$el.find("#search-in-progress");
                var searchNotInProgess = this.$el.find("#search-not-in-progress");
                searchInProgess.removeClass("hidden");
                searchNotInProgess.addClass("hidden");
                facetJob.fetch({
                    error: function(model, response) {
                        console.error(response);
                        searchInProgess.addClass("hidden");
                        searchNotInProgess.removeClass("hidden");
                    },
                    success: function(model, response) {
                        if (me.filterStore.get("selectedFilter") === model.get("oid")) {
                            // make sure this request matches the current search
                            if (!model.has("filter") || (me.filterStore.get("search") === model.get("filter"))) {
                                if ((model.get("apiError") && (model.get("apiError") == "COMPUTING_IN_PROGRESS")) || model.get("done") === false) {
                                    if (model.get("done") === true) {
                                        me.filterStore.set("facet", model);
                                    } else {
                                        if (model.get("done") === false) {
                                            me.filterStore.set("facet", model);
                                        }
                                        // reset currentModel ID
                                        facetJob.set("id",me.currentModel.get("id"));
                                        // retry every 20 seconds
                                        setTimeout(function () {
                                            me.facetJobFetch(facetJob, startIndex);
                                        }, 20000);
                                    }
                                } else {
                                    me.filterStore.set("itemIndex", startIndex);
                                    me.filterStore.set("facet", model);
                                }
                                // set error message if exists
                                var errorMessage = model.get("errorMessage");
                                if (model.get("error")) {
                                    if (errorMessage) {
                                        squid_api.model.status.set("message", errorMessage);
                                    }
                                }
                                // manually trigger if previously set
                                me.filterStore.trigger("change:facet");
                                searchInProgess.addClass("hidden");
                                searchNotInProgess.removeClass("hidden");
                            }
                        }
                    }
                });
            }
        },

        applySelection : function() {
            var selectionClone = $.extend(true, {}, this.currentModel.get("selection"));
            this.model.set("selection", selectionClone);
        },

        cancelSelection : function() {

        },

        applyPaging : function(pageIndex) {
            filterStore.set("pageIndex", pageIndex);
        }

    });

    return View;
}));

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.CategoricalFilterView = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend( {

        model: null,
        parent : null,
        template : squid_api.template.squid_api_filters_categorical_widget,

        initialize : function() {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        events: {
            "change": function(event) {
                if (this.parent) {
                    this.parent.changeSelection(this);
                }
            }
        },

        getSelectedItems: function() {
            var selectedItems = [];
            var val = this.$el.find("select").val();
            var values = [];
            if (!val) {
                // ignore
            } else if (!val instanceof Array) {
                values.push(val);
            } else {
                values = val;
            }
            for (var i=0; i<values.length; i++) {
                var v = values[i];
                if (v !== '') {
                    selectedItems.push({
                        "id": v,
                        "value": v,
                        "type": "v"
                    });
                }
            }
            return selectedItems;
        },

        render : function() {
            var selHTML = null;
            if (this.model && this.model.get('dimension')) {
                var items = this.model.get('items');
                var selItems = this.model.get('selectedItems');
                var name = this.model.get('name');
                var facetId = this.model.get('facetId');

                var selAvailable = false;
                var options = [];
                if (items && items.length > 0) {
                    // set flag to indicate the filter selection is available
                    selAvailable = true;
                    // build select box options
                    var selected;
                    var selItemsLen = selItems.length;
                    for (var j = 0; j < items.length; j++) {
                        selected = false;
                        for (var k = 0; k < selItemsLen; k++) {
                            if (items[j].id == selItems[k].id) { // option is selected
                                selected = true;
                                break;
                            }
                        }
                        options.push({"value" : items[j].id, "label" : items[j].value, "selected" : selected});
                    }
                }
                var displaySize = options.length>10?10:options.length;
                // get HTML template and fill corresponding data
                selHTML = this.template({
                    "selAvailable" : selAvailable,
                    "facetId" : facetId,
                    "name" : name,
                    "options" : options,
                    "displaySize" : displaySize
                });
            }
            // render HTML
            if (selHTML) {
                this.$el.html(selHTML);
            } else {
                this.$el.html("");
            }

            return this;
        },

        setEnable: function(enable) {
            var selection = this.$el.find("select");
            if (selection) {
                $(selection).attr('disabled', !enable);
            }
        }

    });

    return View;
}));
(function (root, factory) {
    root.squid_api.view.DateFilterSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_filter_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.filters = squid_api.model.filters;
            this.status = squid_api.model.status;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }

            this.listenTo(this.config, "change:period", this.render);
            this.listenTo(this.filters, "change:selection", this.render);

            // listen for global status change
            this.status.on('change:status', this.statusUpdate, this);

            this.renderView();
        },

        remove: function() {
            this.undelegateEvents();
            this.$el.empty();
            this.stopListening();
            return this;
        },

        statusUpdate: function() {
        	if (this.status.get("status") !== "DONE") {
        		this.$el.find("button").prop("disabled", true);
        	} else {
        		this.$el.find("button").prop("disabled", false);
        	}
        },

        renderView: function(jsonData) {
            var me = this;
            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();

            // Initialize plugin
            this.$el.find("select").multiselect({
                buttonText: function(option, select) {
                    if (select.find("option:selected").length > 0) {
                        text = select.find("option:selected").text();
                    } else if (select.find("option").length > 0) {
                        text = "Select a period";
                    } else {
                        text = 'No usable period exists';
                    }
                    return text;
                },
                onChange: function(facet) {
                    var period = _.clone(me.config.get("period"));
                    var domain = me.config.get("domain");
                    period[domain] = facet.val();
                    var selection = me.getPeriodSelection(period);
                    me.config.set({"period": period, "selection" : selection});
                }
            });

            // Remove Button Title Tag
            this.$el.find("button").removeAttr('title');

            this.statusUpdate();
        },

        render: function() {
            var me = this;
            var domain = this.config.get("domain");
            var periodConfig = this.config.get("period");
            var jsonData = {"options" : []};
            // iterate through all filter facets
            var selection = me.filters.get("selection");
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    var period = me.config.get("period");
                    for (var dimIdx=0; dimIdx<facets.length; dimIdx++) {
                        var facet = facets[dimIdx];
                        if (facet.dimension.valueType == "DATE" && facet.dimension.type === "CONTINUOUS" && ! facet.error) {
                            var option = {"label" : facet.name, "value" : facet.id, "error" : facets[dimIdx].error, "selected" : false};
                            // if currently selected within config
                            if (periodConfig) {
                                if (periodConfig[domain] == facet.id) {
                                    option.selected = true;
                                }
                            }
                            jsonData.options.push(option);
                        }
                    }
                }
            }

            // Alphabetical Sorting
            jsonData.options.sort(function(a, b) {
                var labelA=a.label.toLowerCase(), labelB=b.label.toLowerCase();
                if (labelA < labelB)
                    return -1;
                if (labelA > labelB)
                    return 1;
                return 0; // no sorting
            });

            this.renderView(jsonData);

            return this;
        },
        
        /**  
         * responsible for removing a previously active date facet from the selection.
         */
        getPeriodSelection: function(period) {
            var selection = $.extend(true, {}, this.config.get("selection"));
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    var changed = false;
                    var domain = this.config.get("domain");
                    for (var i=0; i<facets.length; i++) {
                        var facet = facets[i];
                        if (facet.dimension.valueType === "DATE") {
                            if (facet.id !== period[domain]) {
                                changed = true;
                                facets.splice(i, 1);
                            }
                        }
                    }
                    selection.facets = facets;
                }
            }
            return selection;
        },
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DateRangeSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_range_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        facetsAttribute : "facets",
        model: null,
        monthsOnlyDisplay : false,
        ranges: [
            {
                name : "All",
                lowerExpression : "=$'MIN'",
                upperExpression : "=$'MAX'"
            },
            {
                name : "First Month",
                lowerExpression : "=$'MIN'",
                upperExpression : "=DATE_ADD($'MIN', 1 ,\"MONTH\")"
            },
            {
                name : "Last Month",
                lowerExpression : "=DATE_SUB($'MAX', 1 ,\"MONTH\")",
                upperExpression : "=$'MAX'"
            }
        ],

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.status = squid_api.model.status;
            this.filters = squid_api.model.filters;

            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }
                if (options.ranges) {
                    this.ranges = options.ranges;
                }
                if (options.facetsAttribute) {
                    this.facetsAttribute = options.facetsAttribute;
                }
            }

            this.listenTo(this.config, "change:period", this.render);
            this.listenTo(this.config, "change:selection", this.render);
            this.render();
        },

        changeEvent: function(e) {
            var val = $(e.target).attr("data-attr") || $(e.target).val();
            var ranges = this.jsonData.ranges;
            for (i=0; i<ranges.length; i++) {
                if (ranges[i].val === val) {
                    this.updateSelection(ranges[i].lowerExpression, ranges[i].upperExpression);
                }
            }

            var filtersSelection = this.filters.get("selection");
            if (val === "custom") {
                if (filtersSelection) {
                    var facets = filtersSelection[this.facetsAttribute];
                    if (facets) {
                        for (ix=0; ix<facets.length; ix++) {
                            if (facets[ix].dimension.type === "CONTINUOUS" && facets[ix].dimension.valueType === "DATE") {
                                if (facets[ix].selectedItems.length > 0) {
                                    this.updateSelection(facets[ix].selectedItems[0].lowerBound, facets[ix].selectedItems[0].upperBound);
                                }
                            }
                        }
                    }
                }
            }
        },

        events: {
            "change select" : function(e) {
                this.changeEvent(e);
            },
            "click .select" : function(e) {
                this.changeEvent(e);
            }
        },

        updateSelection: function(lowerExpression, upperExpression) {
            // set the period facet
            var period = this.config.get("period");
            if (period) {
                var periodId = period[this.config.get("domain")];
                var selectionClone = $.extend(true, {}, this.config.get("selection"));
                if (selectionClone) {
                    var facets = selectionClone[this.facetsAttribute];
                    if ((!facets || (facets && facets.length === 0)) && (this.facetsAttribute !== "facets")) {
                        // init the period facets (case of compareTo empty)
                        facets = [];
                        for (var i1=0; i1<selectionClone.facets.length; i1++) {
                            if (selectionClone.facets[i1].id === periodId) {
                                facets.push($.extend(true, {}, selectionClone.facets[i1]));
                                break;
                            }
                        }
                    }

                    if (facets) {
                        if (lowerExpression && upperExpression) {
                            for (var i=0; i<facets.length; i++) {
                                if (facets[i].id === periodId) {
                                    facets[i].selectedItems[0].lowerBound = lowerExpression;
                                    facets[i].selectedItems[0].upperBound = upperExpression;
                                }
                            }

                        } else {
                            facets = null;
                        }
                        selectionClone[this.facetsAttribute] = facets;
                    }
                }

                // set config selection
                this.config.set("selection", selectionClone);
            } else {
                console.error("No period found in config");
            }
        },

        statusUpdate: function() {
            if (this.status.get("status") === "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },
        currentlySelected: function(range) {
            var selection = this.config.get("selection");
            var selected = false;
            if (selection) {
                var facets = selection[this.facetsAttribute];
                if (facets) {
                    for (ix=0; ix<facets.length; ix++) {
                        if (facets[ix].dimension.type === "CONTINUOUS" && facets[ix].dimension.valueType === "DATE" && facets[ix].selectedItems.length > 0) {
                            if (facets[ix].selectedItems[0].lowerBound === range.lowerExpression && facets[ix].selectedItems[0].upperBound === range.upperExpression) {
                                selected = true;
                                break;
                            }
                        }
                    }
                }
            }
            return selected;
        },

        disableSelector: function() {
            if (this.$el.find(".disabled").length > 0) {
                this.$el.find(".disabled").show();
            } else {
                this.$el.find("select").attr("disabled", true);
            }
        },

        render: function() {
            var selection = this.config.get("selection");
            var domain = this.config.get("domain");
            var period = this.config.get("period");

            var range;
            this.jsonData = {
                ranges : []
            };

            // construct data
            for (i=0; i<this.ranges.length; i++) {
                range = this.ranges[i];
                range.selected = this.currentlySelected(range);
                range.val = range.name.replace(" ", "-");
                this.jsonData.ranges.push(range);
            }

            // render html
            var html = this.template(this.jsonData);
            this.$el.html(html);

            if (! period || ! period[domain]) {
                this.disableSelector();
            }

            // detect currently selected expression range
            for (i=0; i<this.ranges.length; i++) {
                range = this.ranges[i];
                if (this.currentlySelected(range) === true) {
                    this.$el.find("select").val(range.val);
                }
            }

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DateSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model: null,
        ranges : null,
        rangesPresets : {
            'all': function(min, max) {
                return [moment(min).utc(), moment(max).utc()];
            },
            'first-month': function(min, max) {
                return [moment(min).utc().startOf('month'), moment(min).utc().endOf('month')];
            },
            'last-month': function(min, max) {
                return [moment(max).utc().startOf('month'), moment(max).utc().endOf('month')];
            }
        },
        monthsOnlyDisplay : false,
        datePickerPosition: null,

        initialize: function(options) {
            var me = this;
            this.config = squid_api.model.config;
            this.status = squid_api.model.status;
            this.filters = squid_api.model.filters;

            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.ranges) {
                this.ranges = options.ranges;
            }
            if (options.datePickerPosition) {
                this.datePickerPosition  = options.datePickerPosition;
            } else {
                this.datePickerPosition = "right";
            }
            if (options.monthsOnlyDisplay) {
                this.monthsOnlyDisplay = options.monthsOnlyDisplay;
            }

            this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.config, "change:period", this.render);

            // listen for global status change
            this.listenTo(this.status, "change:status", this.statusUpdate);
        },

        events: {
            "click .refresh-facet": function() {
                // allow the user to refresh the given facet
                var me = this;
                var periods = this.config.get("period");
                var periodId = periods[this.config.get("domain")];

                // add spinning class
                this.$el.find(".refresh-facet i").addClass("fa-spin");
                this.$el.find(".refresh-facet span").text("refreshing");
                
                // get facet members for period facet
                squid_api.controller.facetjob.getFacetMembers(this.filters, periodId).done(function() {
                     me.render();
                });
            }
        },

        statusUpdate: function() {
            if (this.status.get("status") == "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },

        render: function() {
            /*
               responsible for printing the currently selected date facets selectedItems (active dates)
             */
            var configPeriod = this.config.get("period");
            var domain = this.config.get("domain");
            var selection = this.config.get("selection");
            var minMax = {};
            var selectedItems;
            var dates = {};
            var facet = null;
            var resetFacet = false;
            var viewData = {"dateAvailable" : false};

            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    for (i=0; i<facets.length; i++) {
                        // obtain current facet from config if exists
                        if (configPeriod) {
                            if (configPeriod[domain]) {
                                if (facets[i].id == configPeriod[domain]) {
                                    facet = facets[i];
                                }
                            }
                        }
                    }
                }
            }
            if (facet) {
                viewData.name = facet.name;

                // detect if facet is done or not
                var filters = this.filters;
                if (filters) {
                    var filtersSelection = filters.get("selection");
                    if (filtersSelection) {
                        var filtersFacets = filtersSelection.facets;
                        if (filtersFacets) {
                            for (ix=0; ix<filtersFacets.length; ix++) {
                                if (filtersFacets[ix].id == facet.id) {
                                    if (! filtersFacets[ix].done && filtersFacets[ix].items) {
                                        if (filtersFacets[ix].items.length === 0) {
                                            viewData.notDone = true;
                                        }
                                    }
                                    // min-max date check
                                    if (filtersFacets[ix].items) {
                                        if (filtersFacets[ix].items.length > 0) {
                                            minMax = filtersFacets[ix].items[0];
                                            dates.minDate = moment(minMax.lowerBound).utc();
                                            dates.maxDate = moment(minMax.upperBound).utc();
                                            dates.currentEndDate = moment(minMax.upperBound).utc();
                                        }
                                    }
                                    // currently selected date check
                                    if (filtersFacets[ix].selectedItems) {
                                        selectedItems = filtersFacets[ix].selectedItems[0];
                                        if (selectedItems) {
                                            dates.currentStartDate = moment(selectedItems.lowerBound).utc();
                                            dates.currentEndDate = moment(selectedItems.upperBound).utc();
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // compare
                    var results = filters.get("results");
                    if (results) {
                        var compareTo = results.compareTo;
                        if (compareTo && compareTo[0]) {
                            var compareItem = compareTo[0].selectedItems[0];
                            dates.compareStartDate = moment(compareItem.lowerBound).utc();
                            dates.compareEndDate = moment(compareItem.upperBound).utc();
                        }
                    }
                   
                }

                // set view data
                viewData.facet = facet;
                if (dates.currentStartDate && dates.currentEndDate) {
                    viewData.dateAvailable = true;
                    viewData.dateDisplay = dates.currentStartDate.format("ll") + " - " + dates.currentEndDate.format("ll");
                    if (dates.compareStartDate && dates.compareEndDate) {
                        viewData.dateCompareDisplay = dates.compareStartDate.format("ll") + " - " + dates.compareEndDate.format("ll");
                    }
                }

                // months only display logic
                if (this.monthsOnlyDisplay && dates.currentStartDate && dates.currentEndDate) {
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    var d1 = dates.currentStartDate;
                    var d2 = dates.currentEndDate;
                    if ((d1.month() == d2.month()) && (d1.year() == d2.year())) {
                        viewData.dateDisplay = monthNames[d1.month()] + " "  + d1.year();
                    } else {
                        viewData.dateDisplay =  monthNames[d1.month()] + " " + d1.year() + " - " + monthNames[d2.month()] + " " + d2.year();
                    }
                    if (dates.compareStartDate && dates.compareEndDate) {
                        var dc1 = dates.compareStartDate;
                        var dc2 = dates.compareEndDate;
                        if ((dc1.month() == dc2.month()) && (dc1.year() == dc2.year())) {
                            viewData.dateCompareDisplay = monthNames[dc1.month()] + " "  + dc1.year();
                        } else {
                            viewData.dateCompareDisplay =  monthNames[dc1.month()] + " " + dc1.year() + " - " + monthNames[dc2.month()] + " " + dc2.year();
                        }
                    }
                }
            }

            // render html
            var html = this.template(viewData);
            this.$el.html(html);

            this.$el.find(".refresh-facet").tooltip({
                placement: "right",
                trigger: "hover"
            });

            // attach date picker if a facet is found
            if (facet) {
                this.renderPicker(facet, dates);
            }

            return this;
        },

        updateFacet : function(facet, startDate, endDate) {
            /*
                responsible for updating a given date facet with a new start / end date.
             */
            var obj = [{"lowerBound":startDate, "type":"i", "upperBound":endDate}];
            var selection =  $.extend(true, {}, this.filters.get("selection"));
            if (selection) {
                for (var i=0; i<selection.facets.length; i++) {
                    if (selection.facets[i].id == facet.id) {
                        selection.facets[i].selectedItems = obj;
                    }
                }
                this.config.set("selection", squid_api.utils.buildCleanSelection(selection));
            }
        },

        renderPicker : function(facet, dates) {
            /*
                responsible for attaching the date picker with associated events
             */

            var me  = this;

            // compute the ranges
            var pickerRanges = {};
            for (var rangeName in me.ranges) {
                var value = me.ranges[rangeName];
                var func = null;
                if ((typeof value === "string") || (value instanceof String)) {
                    // check for a predefined range
                    if (me.rangesPresets[value]) {
                        func = me.rangesPresets[value];
                    }
                } else {
                    func = value;
                }
                if (func) {
                    pickerRanges[rangeName] = func.call(this, dates.minDate, dates.maxDate);
                }
            }

            // Build Date Picker
            this.$el.find(".widget").daterangepicker({
                format: 'YYYY-MM-DD',
                opens: this.datePickerPosition,
                showDropdowns: true,
                startDate: dates.currentStartDate ? dates.currentStartDate.format('YYYY-MM-DD') : null,
                endDate: dates.currentEndDate ? dates.currentEndDate.format('YYYY-MM-DD') : null,
                minDate : dates.minDate ? dates.minDate.format('YYYY-MM-DD') : moment().utc().subtract("50", "years").format("YYYY-MM-DD"),
                maxDate : dates.maxDate ? dates.maxDate.format('YYYY-MM-DD') : moment().utc().format("YYYY-MM-DD"),
            });

            // apply action
            this.$el.find("span").on('apply.daterangepicker', function(ev, picker) {
                // Update Change Selection upon date widget close
                var startDate = picker.startDate.format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000";
                var endDate = picker.endDate.format("YYYY-MM-DDTHH:mm:ss.SSS") + "+0000";
                me.updateFacet(facet, startDate, endDate);
            });

            // automatically trigger first date selection within the month on left calendar change
            this.$el.find("span").on('change.daterangepickerLeft', function(ev, calendar) {
                if ($(calendar).hasClass("left")) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                } else if ($(calendar).hasClass("right")) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                } else {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                }
            });

            // automatically trigger last date selection within the month on right calendar change
            this.$el.find("span").on('change.daterangepickerRight', function(ev, calendar) {
                if ($(calendar).hasClass("left")) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                } else if ($(calendar).hasClass("right")) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                } else {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                }
            });
        }
    });

    return View;
}));

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['Backbone', 'squid_api'], factory);
    } else {
        root.squid_api.view.SegmentSelector = factory(root.Backbone, root.squid_api);
    }
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend( {

        model: null,
        segment : null,
        displayName : null,
        onCheck : null,
        template : squid_api.template.squid_api_filters_segment_widget,
        disabled : false,

        initialize : function(options) {
            this.segment = options.segment;
            this.displayName = options.displayName;
            this.config = squid_api.model.config;
            if (options.onCheck) {
                this.onCheck = options.onCheck;
            } else {
                this.onCheck = "set";
            }
            // in order to replace segment when checkbox is on / off
            if (options.replaceWith) {
                this.replaceWith = options.replaceWith;
            }

            if (this.config) {
                this.listenTo(this.config, 'change:selection', this.render);
            }

            // listen for global status change
            this.listenTo(squid_api.model.status, 'change:status', this.render);
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        setTemplate : function(t) {
            if (t) {
                this.template = t;
            }
        },

        events: {
            "change": function(event) {
                if (this.disabled === false) {
                    this.disabled = true;
                    var segment = this.getSegment();

                    var selection = $.extend(true, {}, this.config.get("selection"));
                    if (segment !== null) {
                        var selectedItems = segment.selectedItems;
                        var selectedItemsUpdated = [];
                        var isChecked = event.target.checked;
                        if (this.onCheck == "unset") {
                            isChecked = !isChecked;
                        }
                        for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                            var item = selectedItems[sIdx];
                            if (isChecked || (item.id !== this.segment)) {
                                if (item.id !== this.replaceWith) {
                                    selectedItemsUpdated.push(item);
                                }
                            }
                        }
                        if (this.replaceWith) {
                            if (! isChecked) {
                                selectedItemsUpdated.push({"id" : this.replaceWith, "type" : "v"});
                            }
                        }
                        if (isChecked) {
                            selectedItemsUpdated.push({"id" : this.segment, "type" : "v"});
                        }

                        // update config selection
                        if (selection) {
                            if (selection.facets) {
                                var facets = selection.facets;
                                for (i=0; i<facets.length; i++) {
                                    if (facets[i].dimension.type == "SEGMENTS") {
                                        facets[i].selectedItems = selectedItemsUpdated;
                                    }
                                }
                                selection.facets = facets;
                            }
                        }
                        this.config.set("selection", squid_api.utils.buildCleanSelection(selection));
                    }
                }
            }
        },

        getSegment : function() {
            var segment = null;
            var selection = this.config.get('selection');
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    // lookup segment facet
                    for (var fIdx = 0; fIdx < facets.length; fIdx++) {
                        var facet = facets[fIdx];
                        if (facet.dimension.type == "SEGMENTS") {
                            // check if the segment is selected
                            segment = facet;
                        }
                    }
                }
            }
            return segment;
        },

        render : function() {
            var selHTML = null;
            var isSelected = false;
            if (this.config) {
                // check if the segment is selected
                var segment = this.getSegment();
                if (segment) {
                    var selectedItems = segment.selectedItems;
                    for (var sIdx = 0; sIdx < selectedItems.length; sIdx++) {
                        var item = selectedItems[sIdx];
                        if (item.id == this.segment) {
                            isSelected = true;
                        }
                    }
                }

                if (this.onCheck == "unset") {
                    isSelected = !isSelected;
                }

                // get HTML template and fill corresponding data
                selHTML = this.template({
                    "isSelected" : isSelected,
                    "displayName" : this.displayName,
                });
            }
            // render HTML
            if (selHTML) {
                this.$el.html(selHTML);
            } else {
                this.$el.html("");
            }

            // treat global status
            var running = (squid_api.model.status.get("status") != squid_api.model.status.STATUS_DONE);
            if (running === true) {
                // computation is running : disable input
                this.$el.find("input").attr("disabled","disabled");
            } else {
                // computation is done : enable input
                this.disabled = false;
                this.$el.find("input").removeAttr("disabled");
            }

            return this;
        }

    });

    return View;
}));

// squid_api_selection_widget.js
(function (root, factory) {
    root.squid_api.view.SelectionView = factory(root.Backbone, root.squid_api, root.squid_api.template.squid_api_selection_widget);
}(this, function (Backbone, squid_api, template) {
    var View = Backbone.View.extend( {

        model: null,
        template : null,
        selection : null,

        initialize : function(options) {
            if (!this.model) {
                this.model = squid_api.model.filters;
            }
            if (this.model) {
                this.model.on('change:selection', this.render, this);
                this.model.on('change:enabled', this.enabled, this);
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },

        unselect : function(dimension,value) {
            var sel = this.model.get("selection");
            var userSel = { "facets" : [] };
            for (var i=0; i<sel.facets.length; i++) {
                var facet = sel.facets[i];
                var userFacet = {"dimension" : facet.dimension, "selectedItems" : [], "id" : facet.id, "items" : facet.items, "totalSize" : facet.totalSize};
                userSel.facets.push(userFacet);
                for (var j=0;j<facet.selectedItems.length;j++) {
                    var item = facet.selectedItems[j];
                    if ((facet.dimension.oid == dimension.oid) && (item.id==value.item.id || (value.item.id==-1 && item.value==value.item.value))) {
                        // unselect this item
                    } else {
                        userFacet.selectedItems.push(item);
                    }
                }
            }
            squid_api.model.config.set("selection", userSel);
        },

        events: {
            "click .clear-filter": function(event) {
                event.preventDefault();
                if (this.model.get("selection") && this.selection && this.model.isDone()) {
                    var index = event.target.id;
                    if (index>=0) {
                        var idx = 0;
                        for (var key in this.selection) {
                            var sel = this.selection[key];
                            for (var j=0;j<sel.selection.length;j++) {
                                if (index==idx++) {
                                    this.unselect(sel.dimension,sel.selection[j]);
                                }
                            }
                        }
                    }
                }
            }
        },

        enabled : function() {
            if (this.model.get("enabled")) {
                this.$el.find('.clear-filter').removeAttr('disabled');
            } else {
                this.$el.find('.clear-filter').attr('disabled',"disabled");
            }
        },

        render : function() {
            if (this.model && this.model.get("selection")) {
                this.selection = this.model.getSelection();
                for (var key in this.selection) {
                    for (var i=0;i<this.selection[key].selection.length;i++) {
                        var item = this.selection[key].selection[i];
                        if (item.item.id===0 && item.item.value=="true") {
                            item.value = " ";
                        }
                    }
                }
                if (this.selection) {
                    // get HTML template and fill corresponding data
                    var empty = true;
                    var selection = this.model.get("selection").facets;

                    for (var facet=0; facet<selection.length; facet++) {
                        if (selection[facet].dimension.type !== "CONTINUOUS") {
                            if (selection[facet].selectedItems.length !== 0) {
                                empty = false;
                            }
                        }
                    }

                    var selHTML = this.template({
                        "facets" : this.selection,
                        "empty" : empty
                    });
                    // render HTML
                    this.$el.html(selHTML);
                }
                this.enabled();
            }
            return this;
        },

    });

    return View;
}));
