System.register(['angular2/core', 'angular2/router', '../services/hotels.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hotels_service_1;
    var HotelDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hotels_service_1_1) {
                hotels_service_1 = hotels_service_1_1;
            }],
        execute: function() {
            HotelDetailsComponent = (function () {
                function HotelDetailsComponent(hotelsService, routeParams, router) {
                    this.hotelsService = hotelsService;
                    this.routeParams = routeParams;
                    this.router = router;
                }
                HotelDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var hotel_ID = this.routeParams.get('hotel_ID');
                    console.log('getting hotel with hotel_ID: ', hotel_ID);
                    this.hotelsService
                        .getHotel(hotel_ID)
                        .subscribe(function (h) { return _this.hotel = h; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Successfully fetched a Hotel data!'); });
                };
                HotelDetailsComponent.prototype.gotoHotelsList = function () {
                    var link = ['Hotels'];
                    this.router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HotelDetailsComponent.prototype, "hotel", void 0);
                HotelDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'hotel-details',
                        templateUrl: './app/template/hotel-details.html',
                    }), 
                    __metadata('design:paramtypes', [hotels_service_1.HotelsService, router_1.RouteParams, router_1.Router])
                ], HotelDetailsComponent);
                return HotelDetailsComponent;
            }());
            exports_1("HotelDetailsComponent", HotelDetailsComponent);
        }
    }
});
//# sourceMappingURL=hotel-details.component.js.map