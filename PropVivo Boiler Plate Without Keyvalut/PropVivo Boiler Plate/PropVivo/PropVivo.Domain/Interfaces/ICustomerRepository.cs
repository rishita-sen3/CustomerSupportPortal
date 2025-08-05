using PropVivo.Domain.Models;
using System.Threading.Tasks;

namespace PropVivo.Domain.Interfaces
{
    public interface ICustomerRepository
    {
        Task<Customer> GetCustomerByPhoneAsync(string phoneNumber);
    }
}
