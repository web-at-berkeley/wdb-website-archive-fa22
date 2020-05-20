"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Utils_1 = require("../../../Utils/Utils");
var ShapeType_1 = require("../../../Enums/ShapeType");
var ImageDrawer = (function () {
    function ImageDrawer() {
        this.images = [];
    }
    ImageDrawer.prototype.getImages = function (container) {
        var containerImages = this.images.filter(function (t) { return t.id == container.id; });
        if (!containerImages.length) {
            this.images.push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        else {
            return containerImages[0];
        }
    };
    ImageDrawer.prototype.addImage = function (container, image) {
        var containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    };
    ImageDrawer.prototype.init = function (container) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, imageOptions, _i, imageOptions_1, optionsImage;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = container.options;
                        imageOptions = (_a = options.particles.shape.options[ShapeType_1.ShapeType.images]) !== null && _a !== void 0 ? _a : options.particles.shape.options[ShapeType_1.ShapeType.image];
                        if (!(imageOptions instanceof Array)) return [3, 5];
                        _i = 0, imageOptions_1 = imageOptions;
                        _b.label = 1;
                    case 1:
                        if (!(_i < imageOptions_1.length)) return [3, 4];
                        optionsImage = imageOptions_1[_i];
                        return [4, this.loadImageShape(container, optionsImage)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5: return [4, this.loadImageShape(container, imageOptions)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.destroy = function () {
        this.images = [];
    };
    ImageDrawer.prototype.loadImageShape = function (container, imageShape) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var image, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, Utils_1.Utils.loadImage(imageShape.src)];
                    case 1:
                        image = _b.sent();
                        this.addImage(container, image);
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        console.log("tsParticles error - " + imageShape.src + " not found");
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        var image = particle.image;
        var element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        var ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        var pos = {
            x: -radius,
            y: -radius,
        };
        context.globalAlpha = opacity;
        context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
        context.globalAlpha = 1;
    };
    return ImageDrawer;
}());
exports.ImageDrawer = ImageDrawer;
