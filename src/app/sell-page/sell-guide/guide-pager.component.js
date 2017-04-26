"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var rest_service_1 = require("../../services/rest.service");
var GuidePagerComponent = (function () {
    function GuidePagerComponent(restService) {
        this.restService = restService;
        this.title = 'Vår SäljGuide';
        this.viewMode = 'id';
        this.guides = [];
    }
    GuidePagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Guides = this.restService.newRestEntity("guide");
        Guides.find('').then(function (data) {
            _this.guides = data;
        });
    };
    GuidePagerComponent.prototype.getPager = function () {
        var currentUrl = window.location.href;
        window.scrollTo(0, 0);
        return currentUrl[currentUrl.length - 1];
    };
    return GuidePagerComponent;
}());
GuidePagerComponent = __decorate([
    core_1.Component({
        selector: 'guide-pager',
        templateUrl: './guide-pager.html',
        styleUrls: ['./guide-pager.css'],
        providers: [rest_service_1.RestService],
    }),
    __metadata("design:paramtypes", [rest_service_1.RestService])
], GuidePagerComponent);
exports.GuidePagerComponent = GuidePagerComponent;
//# sourceMappingURL=guide-pager.component.js.map