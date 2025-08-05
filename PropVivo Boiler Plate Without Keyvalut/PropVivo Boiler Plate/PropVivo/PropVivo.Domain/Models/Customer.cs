using PropVivo.Domain.Common;

namespace PropVivo.Domain.Models
{
    public class Customer : BaseEntity
    {
        public string? PhoneNumber { get; set; }
        public string? Name { get; set; }
        public string? Location { get; set; }

        public Customer()
        {
            SetCustomDocumentType(nameof(Customer)); // ✅ Use this instead
        }
    }
}
