import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
// Collections
import { SuiMessageModule, SuiPaginationModule } from "./collections/internal";
// Modules
import { SuiAccordionModule, SuiCheckboxModule, SuiCollapseModule, SuiDatepickerModule, SuiDimmerModule, SuiDropdownModule, SuiModalModule, SuiPopupModule, SuiProgressModule, SuiRatingModule, SuiSearchModule, SuiSidebarModule, SuiTabsModule, SuiSelectModule, SuiTransitionModule } from "./modules/internal";
// Behaviors
import { SuiLocalizationModule } from "./behaviors/internal";
// Misc
import { SuiUtilityModule } from "./misc/internal";
var SuiModule = /** @class */ (function () {
    function SuiModule() {
    }
    SuiModule = __decorate([
        NgModule({
            exports: [
                // Collections
                SuiMessageModule,
                SuiPaginationModule,
                // Modules
                SuiAccordionModule,
                SuiCheckboxModule,
                SuiCollapseModule,
                SuiDatepickerModule,
                SuiDimmerModule,
                SuiDropdownModule,
                SuiModalModule,
                SuiPopupModule,
                SuiProgressModule,
                SuiRatingModule,
                SuiSearchModule,
                SuiSelectModule,
                SuiSidebarModule,
                SuiTabsModule,
                SuiTransitionModule,
                // Behaviors
                SuiLocalizationModule,
                // Misc
                SuiUtilityModule
            ]
        })
    ], SuiModule);
    return SuiModule;
}());
export { SuiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbInN1aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsY0FBYztBQUNkLE9BQU8sRUFDSCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ3RCLE1BQU0sd0JBQXdCLENBQUM7QUFFaEMsVUFBVTtBQUNWLE9BQU8sRUFDSCxrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLG1CQUFtQixFQUN0QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLFlBQVk7QUFDWixPQUFPLEVBQ0gscUJBQXFCLEVBQ3hCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTztBQUNQLE9BQU8sRUFDSCxnQkFBZ0IsRUFDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQWdDekI7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQTlCckIsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixtQkFBbUI7Z0JBRW5CLFVBQVU7Z0JBQ1Ysa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLG1CQUFtQjtnQkFFbkIsWUFBWTtnQkFDWixxQkFBcUI7Z0JBRXJCLE9BQU87Z0JBQ1AsZ0JBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vLyBDb2xsZWN0aW9uc1xuaW1wb3J0IHtcbiAgICBTdWlNZXNzYWdlTW9kdWxlLFxuICAgIFN1aVBhZ2luYXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vY29sbGVjdGlvbnMvaW50ZXJuYWxcIjtcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHtcbiAgICBTdWlBY2NvcmRpb25Nb2R1bGUsXG4gICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgU3VpRGF0ZXBpY2tlck1vZHVsZSxcbiAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgU3VpRHJvcGRvd25Nb2R1bGUsXG4gICAgU3VpTW9kYWxNb2R1bGUsXG4gICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgU3VpUHJvZ3Jlc3NNb2R1bGUsXG4gICAgU3VpUmF0aW5nTW9kdWxlLFxuICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgIFN1aVRhYnNNb2R1bGUsXG4gICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbn0gZnJvbSBcIi4vbW9kdWxlcy9pbnRlcm5hbFwiO1xuXG4vLyBCZWhhdmlvcnNcbmltcG9ydCB7XG4gICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG59IGZyb20gXCIuL2JlaGF2aW9ycy9pbnRlcm5hbFwiO1xuXG4vLyBNaXNjXG5pbXBvcnQge1xuICAgIFN1aVV0aWxpdHlNb2R1bGVcbn0gZnJvbSBcIi4vbWlzYy9pbnRlcm5hbFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgLy8gQ29sbGVjdGlvbnNcbiAgICAgICAgU3VpTWVzc2FnZU1vZHVsZSxcbiAgICAgICAgU3VpUGFnaW5hdGlvbk1vZHVsZSxcblxuICAgICAgICAvLyBNb2R1bGVzXG4gICAgICAgIFN1aUFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgU3VpQ2hlY2tib3hNb2R1bGUsXG4gICAgICAgIFN1aUNvbGxhcHNlTW9kdWxlLFxuICAgICAgICBTdWlEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aURyb3Bkb3duTW9kdWxlLFxuICAgICAgICBTdWlNb2RhbE1vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aVByb2dyZXNzTW9kdWxlLFxuICAgICAgICBTdWlSYXRpbmdNb2R1bGUsXG4gICAgICAgIFN1aVNlYXJjaE1vZHVsZSxcbiAgICAgICAgU3VpU2VsZWN0TW9kdWxlLFxuICAgICAgICBTdWlTaWRlYmFyTW9kdWxlLFxuICAgICAgICBTdWlUYWJzTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuXG4gICAgICAgIC8vIEJlaGF2aW9yc1xuICAgICAgICBTdWlMb2NhbGl6YXRpb25Nb2R1bGUsXG5cbiAgICAgICAgLy8gTWlzY1xuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2R1bGUge31cbiJdfQ==