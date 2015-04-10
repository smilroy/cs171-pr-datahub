/**
 * MapVis 
 * @param _parentElement -- the HTML or SVG element (D3 node) to which to attach the vis
 * @param _data -- the data array
 * @param _metaData -- the meta-data / data description object
 * @constructor
 */
MapVis = function(_parentElement, _data, _metaData) {
  this.parentElement = _parentElement;
  this.data = _data;
  this.metaData = _metaData;
  this.displayData = [];

  // Define all "constants" here
  this.margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    this.width = 250 - this.margin.left - this.margin.right,
    this.height = 370 - this.margin.top - this.margin.bottom;

  this.initVis();
}

/**
 * Method that sets up the SVG and the variables
 */
MapVis.prototype.initVis = function() {

  var map = L.mapbox.map('mapVis', 'niamhdurfee.lmdl8410');



  // // filter, aggregate, modify data
  // this.wrangleData(null);

  // // call the update method
  // this.updateVis();
}

MapVis.prototype.wrangleData = function(_filterFunction) {
  this.displayData = this.filterAndAggregate(_filterFunction);
}

MapVis.prototype.updateVis = function() {
  var that = this;
}

/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
MapVis.prototype.onSelectionChange = function() {
  
  this.updateVis();
}

/*
 *
 * ==================================
 * From here on only HELPER functions
 * ==================================
 *
 * */

MapVis.prototype.filterAndAggregate = function(_filter) {
  // Set filter to a function that accepts all items
  var filter = function() {
    return true;
  }
  if (_filter != null) {
    filter = _filter;
  }

  var that = this;

  return res;
}