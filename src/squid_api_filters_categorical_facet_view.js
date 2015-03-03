(function (root, factory) {
    root.squid_api.view.CategoricalFacetView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        model : null,
        filters: null,
        format : null,

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
            }

            this.model.on("change:pageIndex", this.render, this);
            this.model.on("change:facet", this.render, this);
            this.filters.on("change", this.render, this);
        },

        events: {
            // Dimension Sorting
            "click li": function(item) {
                // Get selected Filter & Item
                var selectedFilter = this.model.get("selectedFilter");
                var selectedItem = $(item.currentTarget).attr("data-attr");

                // Get clicked filter value & create object
                var value = $(item.currentTarget).attr("data-id");
                var type = $(item.currentTarget).attr("data-type");
                var id = $(item.currentTarget).attr("data-id");

                // Get selected Filters
                var facets = this.filters.get("selection").facets;

                // Set up new object to update facet model
                var selection = {facets: []};

                if ($(item.currentTarget).attr("selected")) {
                    // Style manipulation
                    $(item.currentTarget).removeClass("active");
                    $(item.currentTarget).removeAttr("selected");

                    // Remove selected item from facet 
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === selectedFilter) {
                            var selectedItems = facets[i].selectedItems;
                            var updatedSelectedItems = [];
                            for (ix=0; ix<selectedItems.length; ix++) {
                                if (id !== selectedItems[ix].id) {
                                    var obj = {};
                                    obj.id = selectedItems[ix].id;
                                    obj.type = selectedItems[ix].type;
                                    obj.value = selectedItems[ix].value;
                                    updatedSelectedItems.push(obj);
                                }
                            }
                            facets[i].selectedItems = updatedSelectedItems;
                        }
                    }
                } else {
                    // style manipulation
                    $(item.currentTarget).addClass("active");
                    $(item.currentTarget).attr("selected", true);
                    
                    // set up object to add a new selected item
                    var selectObj = {id : id, type : type, value : value};

                    // Push new filters to selectedItems array
                    for (i=0; i<facets.length; i++) {
                        if (facets[i].id === selectedFilter) {
                            facets[i].selectedItems.push(selectObj);
                        }
                    }
                }

                // Set the updated filters model
                selection.facets = facets;
                this.filters.set("selection", selection);
                this.filters.trigger("change");
            },
        },

        render : function() {
            var facet = this.model.get("facet");
            if (facet) {
                var facetItems = facet.get("items");
                var pageIndex = this.model.get("pageIndex");
                var pageSize = this.model.get("pageSize");
                var itemIndex = this.model.get("itemIndex");

                if (facetItems.length === 0) {
                    this.$el.html("No Items");
                } else {
                    // display current facet members
                    var startIndex = (pageIndex * pageSize) - itemIndex;
                    var endIndex = startIndex + pageSize;
                    // Store selected Filter
                    var selectedFilter = this.model.get("selectedFilter");
                    // Store facets
                    var facets = this.filters.get("selection").facets;
                    if (endIndex > facetItems.length) {
                        endIndex = facetItems.length;
                    }
                    var items = [];
                    for (ix=startIndex; ix<endIndex; ix++) {
                        var facetItem = facetItems[ix];
                        facetItem.selected = false;

                        for (ix1=0; ix1<facets.length; ix1++) {
                            if (selectedFilter === facets[ix1].id) {
                                var selectedItems = facets[ix1].selectedItems;
                                // Set selected facet to true if already selected
                                for (ix2=0; ix2<selectedItems.length; ix2++) {
                                    if (facetItem.id === selectedItems[ix2].id) {
                                        facetItem.selected = true;
                                    }
                                }
                            }
                        }
                        items.push(facetItems[ix]);
                    }
                    if (items.length>0) {
                        var html = squid_api.template.squid_api_filters_categorical_facet_view({
                            "items" : items
                        });
                        this.$el.html(html);
                    } else {
                        // computing in progress
                    }
                }
                
            }
            
        }

    });

    return View;
}));
