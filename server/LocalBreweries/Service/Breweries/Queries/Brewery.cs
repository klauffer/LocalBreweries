namespace LocalBreweries.Service.Breweries.Queries
{
    public class Brewery
    {
        public int Id { get; }
        public string Name { get; }
        public string Type { get; }
        public Address Address { get; }
        public Coordinate Coordinate { get; }
        public string PhoneNumber { get; }
        public string Url { get; }

        public Brewery(int id, string name, string type, Address address, Coordinate coordinate, string phoneNumber, string url)
        {
            Id = id;
            Name = name;
            Type = type;
            Address = address;
            Coordinate = coordinate;
            PhoneNumber = phoneNumber;
            Url = url;
        }

        

    }
}
