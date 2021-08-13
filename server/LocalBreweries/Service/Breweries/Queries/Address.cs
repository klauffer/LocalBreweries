namespace LocalBreweries.Service.Breweries.Queries
{
    public class Address
    {
        public string Street { get; }
        public string City { get; }
        public string State { get; }
        public string Zip { get; }
        public string Country { get; }

        public Address(string street, string city, string state, string zip, string country)
        {
            Street = street;
            City = city;
            State = state;
            Zip = zip;
            Country = country;
        }

        
    }
}