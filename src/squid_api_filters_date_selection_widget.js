(function (root, factory) {
    root.squid_api.view.DateSelectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_filters_date_selection_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model: null,
        ranges : null,
        rangesPresets : {
            'all': function(min, max) { return [moment.utc(min), moment.utc(max)]; },
            'first-month': function(min, max) { return [moment.utc(min).startOf('month'), moment.utc(min).endOf('month')]; },
            'last-month': function(min, max) { return [moment.utc(max).startOf('month'), moment.utc(max).endOf('month')]; }
        },
        monthsOnlyDisplay : false,

        initialize: function(options) {
            var me = this;

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
            }
            if (options.model) {
                this.filters = options.model;
            } else {
                this.filters = squid_api.model.filters;
            }
            if (options.monthsOnlyDisplay) {
                this.monthsOnlyDisplay = options.monthsOnlyDisplay;
            }
            if (options.config) {
                this.config = options.config;
            } else {
                this.config = squid_api.model.config;
            }

            this.listenTo(this.filters, "change:selection", this.render);
            this.listenTo(this.config, "change:period", this.render);

            // listen for global status change
            squid_api.model.status.on('change:status', this.statusUpdate, this);
        },

        statusUpdate: function() {
            if (squid_api.model.status.get("status") == "RUNNING") {
                this.$el.find("span").addClass("inactive");
            } else {
                this.$el.find("span").removeClass("inactive");
            }
        },

        events: {
            "click .refresh": function() {
                var filters = $.extend(true, {}, this.filters.get("selection"));
                if (filters.facets) {
                    for (i=0; i<filters.facets.length; i++) {
                        if (filters.facets[i].dimension.type == "CONTINUOUS" && filters.facets[i].dimension.valueType == "DATE" && filters.facets[i].selectedItems.length > 0) {
                            filters.facets[i].selectedItems = [];
                        }
                    }
                    squid_api.model.config.set("selection", filters);
                }
            }
        },

        render: function() {
            if (this.filters) {
                var selection = this.filters.get('selection');
                var period = this.config.get("period");
                var domain = this.config.get("domain");
                var dates = {};
                var facet = false;

                if (selection) {
                    var facets = selection.facets;	
                    for (var i=0; i<facets.length; i++) {
                        var items = facets[i].facets;
                        if (period) {
                            if (period[domain]) {
                                if (period[domain].id == facets[i].id) {
                                    facet = facets[i];
                                    break;
                                }
                            }
                        } else if (facets[i].dimension.valueType == "DATE" && facets[i].dimension.type == "CONTINUOUS") {
                            facet = facets[i];
                            break;
                        }
                    }
                    // if period config exist but isn't found within the current domain, select the first one                    
                    if (! facet ) {
                        for (i=0; i<facets.length; i++) {
                            if (facets[i].dimension.valueType == "DATE" && facets[i].dimension.type == "CONTINUOUS") {
                                facet = facets[i];
                                break;
                            }
                        }
                    }
                }

                var viewData = {"facet":facet, "notReady":dates.notReady};

                // build the date pickers
                if (dates.currentStartDate && dates.currentEndDate) {
                    viewData.dateAvailable = true;
                    viewData.dateDisplay = dates.currentStartDate.utc().format("ll") + " - " + dates.currentEndDate.utc().format("ll");
                } else {
                    viewData.dateAvailable = false;
                }

                // months only display logic
                if (this.monthsOnlyDisplay && dates.currentStartDate && dates.currentEndDate) {
                    var d1 = dates.currentStartDate;
                    var d2 = dates.currentEndDate;
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    if ((d1.month() == d2.month()) && (d1.year() == d2.year())) {
                        viewData.dateDisplay = monthNames[d1.month()] + " "  + d1.year();
                    } else {
                        viewData.dateDisplay =  monthNames[d1.month()] + " " + d1.year() + " - " + monthNames[d2.month()] + " " + d2.year();
                    }
                }

                var selHTML = this.template(viewData);

                // render HTML
                this.$el.html(selHTML);

                // attach date picker onto date display
                if (facet) {
                    this.renderPicker(facet, dates);
                }
            }

            return this;
        },

        updateFacet : function(facet, startDate, endDate) {
            var obj = [{"lowerBound":startDate, "type":"i", "upperBound":endDate}];
            var attributesClone =  $.extend(true, {}, this.filters.attributes);
            if (attributesClone.selection) {
                for (var i=0; i<attributesClone.selection.facets.length; i++) {
                    if (attributesClone.selection.facets[i].id == facet.id) {
                        attributesClone.selection.facets[i].selectedItems = obj;
                    } else if (attributesClone.selection.facets[i].dimension.valueType == "DATE") {
                        attributesClone.selection.facets[i].selectedItems = [];
                    }
                }
                squid_api.model.config.set("selection", attributesClone.selection);
            }
        },

        renderPicker : function(facet, dates) {
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
                    pickerRanges[rangeName] = func.call(this, dates.minStartDate, dates.maxEndDate);
                }
            }

            if (dates.currentStartDate && dates.currentEndDate) {
                startDate = dates.currentStartDate;
                endDate = dates.currentEndDate;
            } else {
                startDate = dates.minStartDate;
                endDate = dates.maxEndDate;
            }

            // Build Date Picker
            this.$el.find("span").daterangepicker({
                opens: me.datePickerPosition, 
                format: 'YYYY-MM-DD', 
                showDropdowns: true, 
                ranges: pickerRanges, 
                "startDate" : startDate, 
                "endDate" : endDate, 
                "minDate" : dates.minStartDate, 
                "maxDate" : dates.maxEndDate
            });

            // Detect Apply Action
            this.$el.find("span").on('apply.daterangepicker', function(ev, picker) {
                // Update Change Selection upon date widget close
                var startDate = moment.utc(picker.startDate).utc().toDate();
                var endDate = moment.utc(picker.endDate).utc().toDate();
                me.updateFacet(facet, startDate, endDate);
            });

            this.$el.find("span").on('change.daterangepickerLeft', function(ev, calendar) {
                if ($(calendar).hasClass("left")) {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                } else if ($(calendar).hasClass("right")) {
                    $('.daterangepicker').find('.right td.available:not(.off):last').trigger('click');
                } else {
                    $('.daterangepicker').find('.left td.available:not(.off):first').trigger('click');
                }
            });

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
