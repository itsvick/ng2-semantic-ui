/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
var CalendarRangeHourService = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarRangeHourService, _super);
    function CalendarRangeHourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    CalendarRangeHourService.prototype.configureItem = /**
     * @param {?} item
     * @param {?} baseDate
     * @return {?}
     */
    function (item, baseDate) {
        // Set minutes and seconds to 0
        var /** @type {?} */ customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    };
    return CalendarRangeHourService;
}(CalendarRangeService));
export { CalendarRangeHourService };
var SuiCalendarHourView = /** @class */ (function (_super) {
    tslib_1.__extends(SuiCalendarHourView, _super);
    function SuiCalendarHourView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4)) || this;
    }
    Object.defineProperty(SuiCalendarHourView.prototype, "date", {
        get: /**
         * @return {?}
         */
        function () {
            return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarHourView.decorators = [
        { type: Component, args: [{
                    selector: "sui-calendar-hour-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table four column hour\">\n<thead *ngIf=\"service.config.mode != 1\">\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                }] }
    ];
    /** @nocollapse */
    SuiCalendarHourView.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return SuiCalendarHourView;
}(CalendarView));
export { SuiCalendarHourView };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL2hvdXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBELElBQUE7SUFBOEMsb0RBQW9COzs7Ozs7Ozs7SUFDdkQsZ0RBQWE7Ozs7O2NBQUMsSUFBaUIsRUFBRSxRQUFhOztRQUVqRCxxQkFBTSxZQUFZLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7bUNBWnBDO0VBTzhDLG9CQUFvQixFQU9qRSxDQUFBO0FBUEQsb0NBT0M7O0lBMkJ3QywrQ0FBWTtJQU1qRCw2QkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksd0JBQXdCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDakc7MEJBTlUscUNBQUk7Ozs7O1lBQ1gsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7O2dCQTVCekgsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxnb0JBcUJiO2lCQUNBOzs7O2dCQXhDbUIsU0FBUzs7OEJBQTdCO0VBeUN5QyxZQUFZO1NBQXhDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgY29uc3QgY3VzdG9tRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy50aW1lLnJlcGxhY2UoL1ttc10vZywgXCIwXCIpO1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBuZXcgRGF0ZVBhcnNlcihjdXN0b21Gb3JtYXQsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdChpdGVtLmRhdGUpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItaG91ci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSBmb3VyIGNvbHVtbiBob3VyXCI+XG48dGhlYWQgKm5nSWY9XCJzZXJ2aWNlLmNvbmZpZy5tb2RlICE9IDFcIj5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiNFwiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJIb3VyVmlldyBleHRlbmRzIENhbGVuZGFyVmlldyB7XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLmRhdGUsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuSG91ciwgbmV3IENhbGVuZGFyUmFuZ2VIb3VyU2VydmljZShEYXRlUHJlY2lzaW9uLkRhdGUsIDYsIDQpKTtcbiAgICB9XG59XG4iXX0=