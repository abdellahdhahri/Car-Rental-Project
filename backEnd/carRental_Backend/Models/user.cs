using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Numerics;

namespace carRental_Backend.Models
{
    public class user
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Pswd { get; set; }
        
        public string Adress { get; set; }
        public string  Phone { get; set; }
        public string role { get; set; }

    }
}
