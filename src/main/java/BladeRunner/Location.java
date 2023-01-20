package BladeRunner;

import BladeRunner.Table.LocationTables.Sector;

public class Location {
    private Sector sector;
    private String area;
    private String location;

    public Location(){};

    public Location(Sector sector, String area, String location) {
        this.sector = sector;
        this.area = area;
        this.location = location;
    }

    public Sector getSector() {
        return sector;
    }

    public String getArea() {
        return area;
    }

    public String getLocation() {
        return location;
    }

    public String toString() {
        return location + ", " + area + ", Sector " + sector.toString() + ": " + sector.getDescription();
    }
}
