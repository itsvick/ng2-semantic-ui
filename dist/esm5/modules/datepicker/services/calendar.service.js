/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from "@angular/core";
import { DateUtil } from "../../../misc/util/internal";
/** @enum {number} */
var CalendarMode = {
    DateOnly: 0,
    TimeOnly: 1,
    Both: 2,
};
export { CalendarMode };
CalendarMode[CalendarMode.DateOnly] = "DateOnly";
CalendarMode[CalendarMode.TimeOnly] = "TimeOnly";
CalendarMode[CalendarMode.Both] = "Both";
var CalendarService = /** @class */ (function () {
    function CalendarService(config, localeValues) {
        this.localeValues = localeValues;
        this.onManualUpdate = function () { };
        this.config = config;
        this.currentDate = new Date();
        this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
        this.onDateChange = new EventEmitter();
        this.reset();
    }
    Object.defineProperty(CalendarService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this._config = config;
            config.updateBounds(this._selectedDate || this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "inFinalView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentView === this.config.mappings.finalView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "selectedDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDate;
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (date) {
                this._selectedDate = DateUtil.clone(date);
                this.currentDate = DateUtil.clone(date);
            }
            else {
                this._selectedDate = undefined;
            }
            this.config.updateBounds(this._selectedDate || this.currentDate);
            this.onManualUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "minDate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._minDate && this.config.dateMinBound) {
                return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
            }
            return this._minDate || this.config.dateMinBound;
        },
        set: /**
         * @param {?} min
         * @return {?}
         */
        function (min) {
            this._minDate = min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "maxDate", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._maxDate && this.config.dateMaxBound) {
                return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
            }
            return this._maxDate || this.config.dateMaxBound;
        },
        set: /**
         * @param {?} max
         * @return {?}
         */
        function (max) {
            this._maxDate = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarService.prototype, "firstDayOfWeek", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstDayOfWeek;
        },
        set: /**
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        function (firstDayOfWeek) {
            if (firstDayOfWeek != undefined) {
                this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.currentView = this.config.mappings.finalView;
        if (!this._selectedDate) {
            var /** @type {?} */ current = this.currentDate.getTime();
            if (this._minDate) {
                current = Math.max(current, this._minDate.getTime());
            }
            if (this._maxDate) {
                current = Math.min(current, this._maxDate.getTime());
            }
            this.currentDate = new Date(current);
            this.config.updateBounds(this.currentDate);
            this.currentView = this.config.mappings.initialView;
        }
    };
    /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.changeDate = /**
     * @param {?} date
     * @param {?} fromView
     * @return {?}
     */
    function (date, fromView) {
        this.currentDate = date;
        if (fromView === this.config.mappings.finalView) {
            this.selectedDate = date;
            return this.onDateChange.emit(date);
        }
        this.updateView(this.config.mappings.changed, fromView);
    };
    /**
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.zoomOut = /**
     * @param {?} fromView
     * @return {?}
     */
    function (fromView) {
        this.updateView(this.config.mappings.zoom, fromView);
    };
    /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    CalendarService.prototype.updateView = /**
     * @param {?} mappings
     * @param {?} fromView
     * @return {?}
     */
    function (mappings, fromView) {
        var /** @type {?} */ mapping = mappings.get(fromView);
        if (mapping == undefined) {
            throw new Error("Unknown view type.");
        }
        this.currentView = mapping;
    };
    return CalendarService;
}());
export { CalendarService };
function CalendarService_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarService.prototype._config;
    /** @type {?} */
    CalendarService.prototype.currentView;
    /** @type {?} */
    CalendarService.prototype.currentDate;
    /** @type {?} */
    CalendarService.prototype._selectedDate;
    /** @type {?} */
    CalendarService.prototype._minDate;
    /** @type {?} */
    CalendarService.prototype._maxDate;
    /** @type {?} */
    CalendarService.prototype._firstDayOfWeek;
    /** @type {?} */
    CalendarService.prototype.onDateChange;
    /** @type {?} */
    CalendarService.prototype.onManualUpdate;
    /** @type {?} */
    CalendarService.prototype.localeValues;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFVdkQsSUFBQTtJQTJFSSx5QkFBWSxNQUFxQixFQUFTLFlBQW9DO1FBQXBDLGlCQUFZLEdBQVosWUFBWSxDQUF3Qjs4QkFZM0MsZUFBUTtRQVh2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUV2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCOzBCQWxGVSxtQ0FBTTs7Ozs7WUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztrQkFHTixNQUFxQjtZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7OzswQkFJckQsd0NBQVc7Ozs7O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7Ozs7OzBCQU1wRCx5Q0FBWTs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7a0JBR04sSUFBcUI7WUFDekMs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R0Usb0NBQVU7Ozs7O2NBQUMsSUFBUyxFQUFFLFFBQXlCO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUV6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7OztJQUdyRCxpQ0FBTzs7OztjQUFDLFFBQXlCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7O0lBR2pELG9DQUFVOzs7OztjQUFDLFFBQWdELEVBQUUsUUFBeUI7UUFDMUYscUJBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDOzswQkE3SW5DO0lBK0lDLENBQUE7QUFuSUQsMkJBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElEYXRlcGlja2VyTG9jYWxlVmFsdWVzIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuLi92aWV3cy9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gXCIuLi9jbGFzc2VzL2NhbGVuZGFyLWNvbmZpZ1wiO1xuXG5leHBvcnQgZW51bSBDYWxlbmRhck1vZGUge1xuICAgIERhdGVPbmx5ID0gMCxcbiAgICBUaW1lT25seSA9IDEsXG4gICAgQm90aCA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgcHVibGljIGdldCBjb25maWcoKTpDYWxlbmRhckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25maWcoY29uZmlnOkNhbGVuZGFyQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OkNhbGVuZGFyVmlld1R5cGU7XG4gICAgcHVibGljIGdldCBpbkZpbmFsVmlldygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmlldyA9PT0gdGhpcy5jb25maWcubWFwcGluZ3MuZmluYWxWaWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZTpEYXRlO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkRGF0ZT86RGF0ZTtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzZWxlY3RlZERhdGUoZGF0ZTpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBEYXRlVXRpbC5jbG9uZShkYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLnVwZGF0ZUJvdW5kcyh0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIHRoaXMub25NYW51YWxVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9taW5EYXRlPzpEYXRlO1xuICAgIHByaXZhdGUgX21heERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IG1pbkRhdGUoKTpEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbkRhdGUgJiYgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWluRGF0ZSA+IHRoaXMuY29uZmlnLmRhdGVNaW5Cb3VuZCA/IHRoaXMuX21pbkRhdGUgOiB0aGlzLmNvbmZpZy5kYXRlTWluQm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhdGUgfHwgdGhpcy5jb25maWcuZGF0ZU1pbkJvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGF0ZShtaW46RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9taW5EYXRlID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4RGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5fbWF4RGF0ZSAmJiB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhEYXRlIDwgdGhpcy5jb25maWcuZGF0ZU1heEJvdW5kID8gdGhpcy5fbWF4RGF0ZSA6IHRoaXMuY29uZmlnLmRhdGVNYXhCb3VuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZSB8fCB0aGlzLmNvbmZpZy5kYXRlTWF4Qm91bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEYXRlKG1heDpEYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX21heERhdGUgPSBtYXg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBmaXJzdERheU9mV2VlaygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdERheU9mV2VlaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZpcnN0RGF5T2ZXZWVrKGZpcnN0RGF5T2ZXZWVrOm51bWJlcikge1xuICAgICAgICBpZiAoZmlyc3REYXlPZldlZWsgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdERheU9mV2VlayA9IE1hdGgubWF4KDAsIE1hdGgubWluKDYsIGZpcnN0RGF5T2ZXZWVrKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzpDYWxlbmRhckNvbmZpZywgcHVibGljIGxvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5sb2NhbGVWYWx1ZXMuZmlyc3REYXlPZldlZWs7XG5cbiAgICAgICAgdGhpcy5vbkRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1hbnVhbFVwZGF0ZTooKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldztcblxuICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWF4KGN1cnJlbnQsIHRoaXMuX21pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXhEYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGgubWluKGN1cnJlbnQsIHRoaXMuX21heERhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlQm91bmRzKHRoaXMuY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy5jb25maWcubWFwcGluZ3MuaW5pdGlhbFZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlRGF0ZShkYXRlOkRhdGUsIGZyb21WaWV3OkNhbGVuZGFyVmlld1R5cGUpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcblxuICAgICAgICBpZiAoZnJvbVZpZXcgPT09IHRoaXMuY29uZmlnLm1hcHBpbmdzLmZpbmFsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy5jaGFuZ2VkLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHVibGljIHpvb21PdXQoZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbmZpZy5tYXBwaW5ncy56b29tLCBmcm9tVmlldyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWaWV3KG1hcHBpbmdzOk1hcDxDYWxlbmRhclZpZXdUeXBlLCBDYWxlbmRhclZpZXdUeXBlPiwgZnJvbVZpZXc6Q2FsZW5kYXJWaWV3VHlwZSk6dm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5ncy5nZXQoZnJvbVZpZXcpO1xuICAgICAgICBpZiAobWFwcGluZyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdmlldyB0eXBlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbWFwcGluZztcbiAgICB9XG59XG4iXX0=