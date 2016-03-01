(function (root, factory) {
    root.squid_api.view.DateRangeSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_range_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        model: null,
        ranges : null,
        defaultRanges: [
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
        monthsOnlyDisplay : false,

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
            } else {
                this.ranges = this.defaultRanges;
            }

            this.listenTo(this.config, "change:selection", this.render);
        },

        events: {
            "click li": function(e) {
                var className = $(e.currentTarget).attr("class");
                var ranges = this.jsonData.ranges;
                for (i=0; i<ranges.length; i++) {
                    if (ranges[i].className == className) {
                        this.updateSelection(ranges[i].lowerExpression, ranges[i].upperExpression);
                    }
                }
            }
        },

        updateSelection: function(lowerExpression, upperExpression) {
            var selection = $.extend(true, {}, this.config.get("selection"));
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    for (var i=0; i<facets.length; i++) {
                        if (facets[i].dimension.type == "CONTINUOUS" && facets[i].dimension.valueType == "DATE") {
                            facets[i].selectedItems[0].lowerBound = lowerExpression;
                            facets[i].selectedItems[0].upperBound = upperExpression;
                            break;
                        }
                    }
                }
            }

            // set config selection
            this.config.set("selection", selection);
        },

        statusUpdate: function() {
            if (this.status.get("status") == "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },
        clickEvent: function(range) {
            console.log(range.lowerExpression);
        },
        render: function() {
            this.jsonData = {
                ranges : []
            };

            // construct data
            for (i=0; i<this.ranges.length; i++) {
                var range = this.ranges[i];
                range.className = range.name.replace(" ", "-");
                this.jsonData.ranges.push(range);
            }

            // render html
            var html = this.template(this.jsonData);
            this.$el.html(html);

            return this;
        }
    });

    return View;
}));
