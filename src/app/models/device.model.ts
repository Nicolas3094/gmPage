import { DeviceDetectorService, OrientationType } from "ngx-device-detector";

export class Device {
    
    isMobile: boolean;
    isTablet: boolean;
    isDesktopDevice: boolean;
    isPortrait: boolean;

    constructor(device: DeviceDetectorService) {
        this.isMobile = device.isMobile();
        this.isTablet = device.isTablet();
        this.isDesktopDevice = device.isDesktop();
        this.isPortrait = device.orientation === OrientationType.Portrait;
    }
}
