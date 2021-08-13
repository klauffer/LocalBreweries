using System.Collections.Generic;
using System.Threading.Tasks;
using FunkyBasics.Maybe;
using LocalBreweries.Service.Breweries.Queries;

namespace LocalBreweries.Service.Breweries
{
    public interface IBreweryRepository
    {
        Task<MaybeResult<Brewery>> GetBrewery(int Id);

        Task<MaybeResult<IEnumerable<Brewery>>> Search(string city);
    }
}
